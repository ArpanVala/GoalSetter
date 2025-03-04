const User = require('../model/userModel')
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


//@desc register user
//@route GET /api/user/
//@access Public
const registerUser = asyncHandler(async(req,res)=>{
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error('Please fill all the fields')
    }

    //checj if user already exist
    const userExists = await User.findOne({email})

    if(userExists)
    {
        res.status(400);
        throw new Error('User already exists')
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create new user
    const user = await User.create({
        name,
        email,
        password:hashedPassword,
    })

    if(user)
    {
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    }
    else
    {
        res.status(400)
        throw new Error('Invalid user data');
    }
})

//@desc login user
//@route GET /api/user/login
//@access Public
const loginUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password)))
    {
        res.status(200).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    }
    else
    {
        res.status(400)
        throw new Error('Invalid credentials !');
    }
})

//@desc user data
//@route GET /api/user/me
//@access Public
const getUser = asyncHandler(async(req,res)=>{
    const user = await User.find();
    res.status(200).json({user})
})

//generate jwt
const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: '20d',
    })
}

module.exports = {registerUser, loginUser, getUser}; 