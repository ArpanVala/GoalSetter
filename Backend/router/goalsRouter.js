const express = require('express');
const router = express.Router();
const {getGoals,addGoal,updateGoal,deleteGoal} = require('../controller/goalsController');

// router.route('/').get(getGoals).post(addGoal);
// router.route('/:id').put(updateGoal).delete(deleteGoal);

router.get('/',getGoals)

router.post('/',addGoal)

router.put('/:id',updateGoal)

router.delete('/:id',deleteGoal)

module.exports = router;