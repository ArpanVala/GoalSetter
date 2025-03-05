const express = require('express');
const userRouter = express.Router();
const {registerUser, loginUser, getUser} = require('../controller/usersController');
const protect = require('../middleware/authMiddleware');
userRouter.post('/',registerUser);

userRouter.post('/login',loginUser);

userRouter.get('/me', protect,getUser);

module.exports = userRouter;