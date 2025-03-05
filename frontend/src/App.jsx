import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Header from './components/Header'

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
    </div>
    </BrowserRouter>

    </>

  )
}

export default App
