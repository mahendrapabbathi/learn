import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import Footer from './components/Footer/Footer';
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Courses from './pages/Courses/Courses';
import DNavbar from './Course_components/Navbar/DNavbar';

const App = () => {
  const [login, setLogin] = useState(false);
  const location = useLocation(); 

  const showDNavbar = ["/dashboard", "/courses"].includes(location.pathname);
  const isCoursesPage = location.pathname==="/courses";

  return (
    <>
      {login && <Login setLogin={setLogin} />}
      
      <div className="container">
        <div className="app">
          <Navbar setLogin={setLogin} isCoursesPage={isCoursesPage}/>
        </div>
        {showDNavbar && <DNavbar />}
      </div>

      <BackgroundImage />

      <Routes>
        <Route path="/" element={<Home setLogin={setLogin}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses/>} />
      </Routes>

      <hr />
      <Footer login={login} /> 
      
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default App;
