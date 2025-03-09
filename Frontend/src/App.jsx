// App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import Footer from './components/Footer/Footer';
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <>
      {login && <Login setLogin={setLogin} />}
      
      <div className="container">
        <div className="app">
          <Navbar setLogin={setLogin} />
        </div>
      </div>

      <BackgroundImage />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <hr />
      <Footer login={login} /> {/* Pass login state to Footer */}
      
      <ToastContainer position="top-center" autoClose={3000} />

    </>
  );
};

export default App;
