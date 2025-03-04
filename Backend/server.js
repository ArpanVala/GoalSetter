const express = require('express');
const dotenv =  require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const {connectDB} = require('./config/db');


connectDB();

const port = process.env.PORT || 8001;
const app=express(); 

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/goals',require('./router/goalsRouter'));
app.use('/api/user',require('./router/usersRouter'));

app.use(errorHandler);
app.listen(port,()=>{console.log(`Server is running on port ${port}...`);
})

