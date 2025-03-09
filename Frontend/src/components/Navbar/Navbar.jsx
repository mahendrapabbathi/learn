
import React, { useContext, useState } from 'react';
import "./Navbar.css";
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets.js';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ setLogin }) => {
  const [menu, setMenu] = useState('home');
  const { token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" }); 
      setMenu("home");
    }
  };

  return (
    <div className='navbar'>
       <Link to="/" onClick={() => handleScroll("home")} className="logo">
        <p className='logoo'>U</p>
        <p className='unlock'>UnlockEdu</p>
      </Link>

      <div className="nav-right">
        {!token && (
          <ul className="elements">
            <Link to={"/"} onClick={() => handleScroll("home")} className={menu === "home" ? "active" : ""}>Home</Link>
            <a href='#skills' onClick={() => handleScroll("skills")} className={menu === "skills" ? "active" : ""}>Courses</a>
            <a href='#contact' onClick={() => handleScroll("contact")} className={menu === "contact" ? "active" : ""}>Contact</a>
            <a href='#footer' onClick={() => handleScroll("footer")} className={menu === "footer" ? "active" : ""}>Footer</a>
          </ul>
        )}

        {!token ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setLogin(true);
            }}
          >
            Sign In
          </button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

