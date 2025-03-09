
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import Toasting from './components/Toasting/Toasting';
import Footer from './components/Footer/Footer';
import './App.css';

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
      <Footer isLoggedIn={login}/>
      
      <Toasting theme="dark" position="top-center" />
    </>
  );
};

export default App;
