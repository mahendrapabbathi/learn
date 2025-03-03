import React from 'react'
import Navbar from './components/Navbar/Navbar'
// import SignUp from './pages/Sign Up/SignUp'
import Home from './pages/Home/Home'
import {Routes,Route} from "react-router-dom"
import { useState } from 'react'
import Login from './components/Login/Login'
import "./App.css"
import Dashboard from './pages/Dashboard/Dashboard'
// import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo'

const App = () => {

  const [login,setLogin] = useState(false);

  return (
    <>
    {login?<Login setLogin={setLogin}/>:<></>}
    <div className="container">
      <div className='app'>
        <Navbar setLogin={setLogin}/>
      </div>
    </div>
      {/* <hr /> */}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
    </>
  )
}

export default App
