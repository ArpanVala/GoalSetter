const asyncHandler = require('express-async-handler');

//@desc get goal
//@route GET /api/goals
//@access Public
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "list goals" });
})

//@desc add goal
//@route POST /api/goals
//@access Public
const addGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error('Please enter text');
    }
    res.status(200).json({ message: "add goals" });
})

//@desc update goal
//@route PUT /api/goals/:id
//@access Public
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `update goal:${req.params.id}` });
})

//@desc delete goal
//@route DELETE /api/goals/:id
//@access Public
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete goal:${req.params.id}` });
})
module.exports = { getGoals, addGoal, updateGoal, deleteGoal };