import React from 'react'
import "./Python.css"
import Python_home from '../Python_components/Python_Home/Python_home'

const Python = () => {

  const handleClick = () =>{
    
  }

  return (
    <div className='python'>
      <div className="left">
        <h1>Python</h1>
        <ul>
            <li onClick={handleClick?"active":""}>Python Home</li>
            <li>Python Intro</li>
            <li>Python Get Started</li>
            <li>Python Syntax</li>

        </ul>
      </div>
      <div className="rightt">
        <Python_home/>
      </div>
    </div>
  )
}

export default Python
