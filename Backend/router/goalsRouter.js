const express = require('express');
const router = express.Router();
const {getGoals,addGoal,updateGoal,deleteGoal} = require('../controller/goalsController');
const protect = require('../middleware/authMiddleware');

// router.route('/').get(getGoals).post(addGoal);
// router.route('/:id').put(updateGoal).delete(deleteGoal);

router.get('/',protect ,getGoals)

router.post('/', protect,addGoal)

router.put('/:id', protect,updateGoal)

router.delete('/:id', protect,deleteGoal)

module.exports = router;