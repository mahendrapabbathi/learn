import React from 'react'
import './DNavbar.css'
import Python from '../Python/Python'
import { useNavigate } from 'react-router-dom'
const DNavbar = () => {

    const navigate = useNavigate();

    const handleClick=()=>{
        navigate("/courses");
        <Python/>
    }

  return (
    <div className='dNavbar'>
      <ul>
        <li onClick={handleClick}>Python</li>
        <li onClick={handleClick}>C</li>
        <li onClick={handleClick}>Java</li>
        <li onClick={handleClick}>HTML</li>
        <li onClick={handleClick}>CSS</li>
        <li onClick={handleClick}>Bootstrap</li>
        <li onClick={handleClick}>Javascript</li>
        <li onClick={handleClick}>C++</li>
        <li onClick={handleClick}>React</li>
        <li onClick={handleClick}>SQL</li>
      </ul>
    </div>
  )
}

export default DNavbar
