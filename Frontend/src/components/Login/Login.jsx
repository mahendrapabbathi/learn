
import React, { useContext, useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
import {useNavigate} from "react-router-dom"
import { StoreContext } from "../../context/StoreContext";
import axios from "axios"

const Login = ({ setLogin }) => {

  const {url,setToken} = useContext(StoreContext)

  const [currentState, setCurrentState] = useState("Sign Up"); 
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function onChangeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if(currentState==="Login"){
      newUrl += "/api/user/login"
    }
    else{
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl,data);
    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token);
      setLogin(false);
    }
    else{
      alert(response.data.message)
    }
    navigate('/dashboard');
  };
  

  function toggleForm() {
    setCurrentState((prev) => (prev === "Login" ? "Sign Up" : "Login"));
    setData({
      name: "",
      email: "",
      password: "",
    });
  }

  return (
    <div className="login-popup">
      {/* <form className="login-popup-container" onSubmit={handleSubmit}> */}
      <form onSubmit={onLogin} className="login-popup-container" >
        <div className="login-popup-title">
          <p>{currentState === "Login" ? "Login" : "Sign Up"}</p>
          <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-input">
          {currentState === "Sign Up" && (
            <input name="name" type="text" placeholder="Name" value={data.name} onChange={onChangeHandler} required />
          )}
          <input name="email" type="email" placeholder="Email" value={data.email} onChange={onChangeHandler} required />
          <input name="password" type="password" placeholder="Password" value={data.password} onChange={onChangeHandler} required />
        </div>
        <button type="submit">{currentState === "Login" ? "Login" : "Create account"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" id="terms-checkbox" required />
          <p>By continuing, I agree to the terms & privacy policy.</p>
        </div>
        <div className="account">
          <p>{currentState === "Sign Up" ? "Already have an account?" : "Not registered yet?"}</p>
          <p onClick={toggleForm} className="blue">{currentState === "Sign Up" ? "Login" : "Create account"}</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
