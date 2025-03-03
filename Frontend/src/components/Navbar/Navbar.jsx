// import React, { useContext } from 'react'
// import "./Navbar.css"
// import { StoreContext } from '../../context/StoreContext'
// import { assets } from '../../assets/assets.js'
// import { useNavigate } from 'react-router-dom'

// const Navbar = ({ setLogin }) => {

//   const { token, setToken } = useContext(StoreContext);

//   const navigate = useNavigate();
//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/");
//   }

//   return (
//     <div className='navbar'>
//       <div className="logo">
//         <p className='logoo'>U</p>
//         <p className='unlock'>UnlockEdu</p>
//       </div>

      

//       <div className="nav-right">
//         <div className="elements">
//           <li>Home</li>
//           <li>Courses</li>
//           <li>Contact</li>
//         </div>
//         {
//           !token
//             ? <button onClick={(e) => {
//               e.preventDefault();
//               setLogin(true);
//             }}>Sign In</button>
//             :
//             <div className='navbar-profile'>
//               <img src={assets.profile_icon} alt="" />
//               <ul className="nav-profile-dropdown">
//                 <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
//               </ul>
//             </div>
//         }
//       </div>


//     </div>
//   )
// }

// export default Navbar







import React, { useContext } from 'react';
import "./Navbar.css";
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets.js';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setLogin }) => {
  const { token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className='navbar'>
      <div className="logo">
        <p className='logoo'>U</p>
        <p className='unlock'>UnlockEdu</p>
      </div>

      <div className="nav-right">
        {/* Hide navigation elements if the user is logged in */}
        {!token && (
          <div className="elements">
            <li>Home</li>
            <li>Courses</li>
            <li>Contact</li>
          </div>
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
