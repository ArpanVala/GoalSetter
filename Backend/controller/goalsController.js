const asyncHandler = require('express-async-handler');
const Goal = require('../model/goalModel');
const User = require('../model/userModel');
// WE CAN USER req.user.id BECAUSE OF MIDDLEWARE authMiddleware

//@desc get goal
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
    
// WE CAN USER req.user.id BECAUSE OF MIDDLEWARE authMiddleware
    const goals = await Goal.find({user :req.user.id})

    res.status(200).json({goals});
})

//@desc add goal
//@route POST /api/goals
//@access Private
const addGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error('Please enter text');
    }
    const goal = await Goal.create({
        text:req.body.text,
        user:req.user.id     
    });

    res.status(200).json({goal});
})

//@desc update goal
//@route PUT /api/goals/:id
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not found');
    }

    // const user = await User.findById(req.user.id)

    //check for user
    if(!req.user){
        res.status(401)
        throw new Error('user not found');
    }

    if(goal.user.toString() !== req.user.id ){
        res.status(401)
        throw new Error('Not authorized');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{ new:true,})

    res.status(200).json({updatedGoal});
})

//@desc delete goal
//@route DELETE /api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not found');
    }
    
    // const user = await User.findById(req.user.id)

    //check for user
    if(!req.user){
        res.status(401)
        throw new Error('user not found');
    }

    if(goal.user.toString() !== req.user.id ){
        res.status(401)
        throw new Error('Not authorized');
    }
    await goal.deleteOne();
    res.status(200).json({id:req.params.id});
})
module.exports = { getGoals, addGoal, updateGoal, deleteGoal };