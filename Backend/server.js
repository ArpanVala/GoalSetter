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
    origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
        callback(new Error('Not allowed by CORS'));
    }
},
credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/goals',require('./router/goalsRouter'));
app.use('/api/users',require('./router/usersRouter'));

//serve frontend
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../frontend/dist')));
    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'../','frontend','dist','index.html')))
}
else{
    app.get('/',(req,res)=>res.send("please go to production"))
}

app.use(errorHandler);
app.listen(port,()=>{console.log(`Server is running on port ${port}...`);
})


