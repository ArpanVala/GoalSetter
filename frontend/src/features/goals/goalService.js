import axios from 'axios'

// const API_URL = 'http://localhost:5000/api/goals/'
const API_URL = 'https://goalsetter-mern-xoy6.onrender.com/api/goals/'

// create goal
const createGoal = async(goalData, token) =>{
    const config = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, goalData, config)
    
    return response.data.goal //becuase api returns object of array named 'goal'
}

// get goals
const getGoals = async(token) =>{
    const config = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    
    return response.data.goals //because api returns object of array named 'goals'
}

// delete goal
const deleteGoal = async(goalId, token) =>{
    const config = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + goalId, config)
    
    return response.data
}
// Update goal
const updateGoal = async(goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL + goalData._id, goalData, config)
    
    // Return the entire response data so you can access updatedGoal in the reducer
    return response.data.updatedGoal
}

const goalService = {
   createGoal,
   getGoals,
   deleteGoal,
   updateGoal
}


export default goalService