const asyncHandler = require('express-async-handler');
const Goal = require('../model/goalModel');

//@desc get goal
//@route GET /api/goals
//@access Public
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    res.status(200).json({goals});
})

//@desc add goal
//@route POST /api/goals
//@access Public
const addGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error('Please enter text');
    }
    const goal = await Goal.create({text:req.body.text});

    res.status(200).json({goal});
})

//@desc update goal
//@route PUT /api/goals/:id
//@access Public
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not found');
    }

    const upadtedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{ new:true,})

    res.status(200).json({upadtedGoal});
})

//@desc delete goal
//@route DELETE /api/goals/:id
//@access Public
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not found');
    }
    
    await goal.deleteOne();
    res.status(200).json({id:req.params.id});
})
module.exports = { getGoals, addGoal, updateGoal, deleteGoal };