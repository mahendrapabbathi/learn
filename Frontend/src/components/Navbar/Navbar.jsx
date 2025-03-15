
import React, { useContext, useState } from 'react';
import "./Navbar.css";
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets.js';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from "react-toastify";

const Navbar = ({ setLogin, isCoursesPage }) => {
  const [menu, setMenu] = useState('home');
  const { token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

const logout = () => {
  localStorage.removeItem("token");
  setToken("");
  navigate("/");
  toast.success("Logged out successfully!");
};

  const handleScroll = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMenu("home");
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
      setMenu(id);
    }
  };

  const isDashboard = location.pathname === "/dashboard";

  return (
    <div className='navbar'>
      <Link to="/" onClick={() => handleScroll("home")} className="logo">
        <p className='logoo'>U</p>
        <p className='unlock'>UnlockEdu</p>
      </Link>

      <div className="nav-right">
        {!isDashboard && !isCoursesPage && (
          <ul className="elements">
            <Link to="/" onClick={() => handleScroll("home")} className={menu === "home" ? "active" : ""}>Home</Link>
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
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="Logout" />
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
