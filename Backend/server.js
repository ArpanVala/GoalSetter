const  path = require('path');
const express = require('express');
const dotenv =  require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const {connectDB} = require('./config/db');
const cors = require('cors');

connectDB();

const port = process.env.PORT || 5000;
const app=express(); 


//for deployment
const allowedOrigins = ['https://goalsetter-frontend-geog.onrender.com'];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps, curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log("Blocked by CORS: ", origin);
      callback(null, true); // Temporarily allow all origins for testing
      // Change back to: callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
}));


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/goals',require('./router/goalsRouter'));
app.use('/api/users',require('./router/usersRouter'));


// Handle preflight OPTIONS requests explicitly for debugging
app.options('*', cors());

// Development route
if (process.env.NODE_ENV !== 'production') {
  app.get('/', (req, res) => res.send("Please go to production"));
}
//serve frontend
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../frontend/dist')));
    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'../','frontend','dist','index.html')))
}
else{
    app.get('/',(req,res)=>res.send("please go to production"))
}

app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}...`);
    console.log('CORS allowed origins:', allowedOrigins);
})


