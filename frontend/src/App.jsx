import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <div className="container">
    <Header/>
    <Routes>
      <Route path='/' element={<DashboardPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
    <ToastContainer/>
    </div>
    </BrowserRouter>


    </>

  )
}

export default App
