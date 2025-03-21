// import React, { useContext } from 'react'
// import "./Hero.css"
// import { useNavigate } from 'react-router-dom'
// import { StoreContext } from '../../context/StoreContext';

// const Hero = ({setLogin}) => {

//   const navigate = useNavigate();
//   const {token} = useContext(StoreContext)

//   const viewAllCourses=()=>{
//       if(token){
//         navigate("/dashboard")
//       }
//       else{
//         setLogin(true);
//       }
//   }
//   return (
    
//     <div id='hero' className='heading'>
//       <h1 className='heading-text'>The All-In-One Learning Platform</h1>
//       <p>Unlock your coding potential with our interactive programming courses, designed for beginners and experts alike. Learn in-demand skills through hands-on projects, real-world applications, and expert guidance.</p>
//       <button onClick={viewAllCourses}>View All Courses</button>
//     </div>
//   )
// }

// export default Hero




import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./Hero.css"; // Keep your styles here

const Hero = ({ setLogin }) => {
  const navigate = useNavigate();
  const { token } = useContext(StoreContext);

  const viewAllCourses = () => {
    if (token) {
      navigate("/dashboard");
    } else {
      setLogin(true);
    }
  };

  return (
    <div className="hero-container">
      {/* Left Side - Hero Section */}
      <div className="heading">
        <p className="heading-text">The All-In-One Learning Platform</p>
        <p className="heading-para">
          Unlock your coding potential with our interactive programming courses,
          designed for beginners and experts alike. Learn in-demand skills
          through hands-on projects, real-world applications, and expert
          guidance.
        </p>
        <button onClick={viewAllCourses}>View All Courses</button>
      </div>

      {/* Right Side - Skills Section */}
      <div className="skills-content">
        <ul>
          {["Java", "Python", "Data Structures", "JavaScript"].map((course, index) => (
            <div className="courses" key={index}>
              <li onClick={viewAllCourses} >{course}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
