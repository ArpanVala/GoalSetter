import axios from 'axios'

const API_URL = 'http://localhost:5000/api/goals/'

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


const goalService = {
   createGoal,
   getGoals,
}


export default goalService