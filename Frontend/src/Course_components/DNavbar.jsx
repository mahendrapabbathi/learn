
import React from "react";
import "./DNavbar.css";
import { useNavigate } from "react-router-dom";

const DNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="dNavbar">
      <ul>
        <li onClick={() => navigate("/courses/python")}>Python</li>
        <li onClick={() => navigate("/courses/java")}>Java</li>
        <li onClick={() => navigate("/courses/c")}>C</li>
        <li onClick={() => navigate("/courses/html")}>HTML</li>
        <li onClick={() => navigate("/courses/css")}>CSS</li>
        <li onClick={() => navigate("/courses/javascript")}>JavaScript</li>

      </ul>
    </div>
  );
};

export default DNavbar;
