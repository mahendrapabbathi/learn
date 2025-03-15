
// import React, { useContext, useState } from "react";
// import "./Login.css";
// import { assets } from "../../assets/assets";
// import { useNavigate } from "react-router-dom";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = ({ setLogin }) => {
//   const { url, setToken } = useContext(StoreContext);

//   const [currentState, setCurrentState] = useState("Sign Up");
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };

//   const onLogin = async (e) => {
//     e.preventDefault();
//     try {
//       let newUrl = currentState === "Login" ? `${url}/api/user/login` : `${url}/api/user/register`;
//       const response = await axios.post(newUrl, data);

//       if (response.data.success) {
//         setToken(response.data.token);
//         localStorage.setItem("token", response.data.token);
//         setLogin(false);
//         toast.success(response.data.message || "Login successful!");
//         navigate("/dashboard");
//       } else {
//         toast.error(response.data.message || "Something went wrong!");
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Server error. Please try again.");
//     }
//   };

//   const toggleForm = () => {
//     setCurrentState((prev) => (prev === "Login" ? "Sign Up" : "Login"));
//     setData({ name: "", email: "", password: "" });
//   };

//   return (
//     <div className="login-popup">
//       <form onSubmit={onLogin} className="login-popup-container">
//         <div className="login-popup-title">
//           <p>{currentState === "Login" ? "Login" : "Sign Up"}</p>
//           <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="Close" />
//         </div>
//         <div className="login-popup-input">
//           {currentState === "Sign Up" && (
//             <input name="name" type="text" placeholder="Name" value={data.name} onChange={onChangeHandler} required />
//           )}
//           <input name="email" type="email" placeholder="Email" value={data.email} onChange={onChangeHandler} required />
//           <input name="password" type="password" placeholder="Password" value={data.password} onChange={onChangeHandler} required />
//         </div>
//         <button type="submit">{currentState === "Login" ? "Login" : "Create account"}</button>
//         <div className="login-popup-condition">
//           <input type="checkbox" id="terms-checkbox" required />
//           <p>By continuing, I agree to the terms & privacy policy.</p>
//         </div>
//         <div className="account">
//           <p>{currentState === "Sign Up" ? "Already have an account?" : "Not registered yet?"}</p>
//           <p onClick={toggleForm} className="blue">
//             {currentState === "Sign Up" ? "Login" : "Create account"}
//           </p>
//         </div>
//       </form>

//     </div>
//   );
// };

// export default Login;




import React, { useContext, useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = ({ setLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currentState, setCurrentState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      let newUrl = currentState === "Login" ? `${url}/api/user/login` : `${url}/api/user/register`;
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setLogin(false);
        toast.success(response.data.message || "Logged in successfully!");
        navigate("/dashboard");
      } else {
        toast.error(response.data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Server error. Please try again.");
    }
  };

  const toggleForm = () => {
    setCurrentState((prev) => (prev === "Login" ? "Sign Up" : "Login"));
    setData({ name: "", email: "", password: "" });
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <p>{currentState === "Login" ? "Login" : "Sign Up"}</p>
          <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-input">
          {currentState === "Sign Up" && (
            <input name="name" type="text" placeholder="Name" value={data.name} onChange={onChangeHandler} required />
          )}
          <input name="email" type="email" placeholder="Email" value={data.email} onChange={onChangeHandler} required />
          <div className="password-container">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={data.password}
              onChange={onChangeHandler}
              required
            />
            {showPassword ? (
              <FaEyeSlash className="eye-icon" onClick={() => setShowPassword(false)} />
            ) : (
              <FaEye className="eye-icon" onClick={() => setShowPassword(true)} />
            )}
          </div>
        </div>
        <button type="submit">{currentState === "Login" ? "Login" : "Create account"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" id="terms-checkbox" required />
          <p>By continuing, I agree to the terms & privacy policy.</p>
        </div>
        <div className="account">
          <p>{currentState === "Sign Up" ? "Already have an account?" : "Not registered yet?"}</p>
          <p onClick={toggleForm} className="blue">
            {currentState === "Sign Up" ? "Login" : "Create account"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
