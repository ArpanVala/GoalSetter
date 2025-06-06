import axios from 'axios'

// const API_URL = 'http://localhost:5000/api/users/'
const API_URL = 'https://goalsetter-mern-xoy6.onrender.com/api/users/'

// Register user
const register = async(userData) =>{
    const response = await axios.post(API_URL, userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

//logout user
const logout = () => {
    localStorage.removeItem('user')
}

// login user
const login = async(userData) =>{
    const response = await axios.post(API_URL + 'login', userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}


const authService = {
    register,
    logout,
    login
}


export default authService