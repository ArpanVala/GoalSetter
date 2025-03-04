const User = require('../model/userModel')
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


//@desc register user
//@route GET /api/user/
//@access Public
const registerUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:'user registered!'})
})

//@desc login user
//@route GET /api/user/login
//@access Public
const loginUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:'user login!'})
})

//@desc user data
//@route GET /api/user/me
//@access Public
const getUser = asyncHandler(async(req,res)=>{
    const user = await User.find();
    res.status(200).json({user})
})

module.exports = {registerUser, loginUser, getUser}; 