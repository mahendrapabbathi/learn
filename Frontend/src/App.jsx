import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Courses from './pages/Courses/Courses';
import DNavbar from './Course_components/Navbar/DNavbar';
import CoursePage from './Course_components/Navbar/CoursePage/CoursePage';

const App = () => {
  const [login, setLogin] = useState(false);
  const location = useLocation(); 

  // Define where we are
  const isHomePage = location.pathname === "/";
  const isDashboardPage = location.pathname === "/dashboard";
  const isCoursesPage = location.pathname === "/courses";
  const isCourseDetailPage = location.pathname.startsWith("/courses/");

  return (
    <>
      {login && <Login setLogin={setLogin} />}
      
      <div className="container">
        <div className="app">
          <Navbar setLogin={setLogin} isHomePage={isHomePage} isCourseDetailPage={isCourseDetailPage} />
        </div>

        {!isHomePage && <DNavbar />}
      </div>

      <Routes>
        <Route path="/" element={<Home setLogin={setLogin} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/courses" element={<Courses />} /> */}
        <Route path="/courses/:language" element={<CoursePage />} />
      </Routes>

      {!isCourseDetailPage && <Footer login={login} />} 
      
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default App;
