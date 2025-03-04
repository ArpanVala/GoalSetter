const express = require('express');
const userRouter = express.Router();
const {registerUser, loginUser, getUser} = require('../controller/usersController');

userRouter.post('/',registerUser);

userRouter.post('/login',loginUser);

userRouter.get('/me',getUser);

module.exports = userRouter;