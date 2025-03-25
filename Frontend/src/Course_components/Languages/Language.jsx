import React from 'react'
import "./Language.css"
import { useNavigate } from 'react-router-dom'

const Language = () => {

    const navigate = useNavigate();

  return (
    <div className="langCardsWidth">
        <div className='langCards'>
            <div className="langCard python">
                <h2>Python</h2>
                <p>A popular programming language</p>
                <button onClick={() => navigate("/courses/python")}>Learn Python</button>
            </div>
            <div className="langCard c">
                <h2>C</h2>
                <p>A programming language</p>
                <button onClick={() => navigate("/courses/c")}>Learn C</button>
            </div>
            <div className="langCard java">
                <h2>Java</h2>
                <p>A programming language</p>
                <button onClick={() => navigate("/courses/java")}>Learn Java</button>
            </div>
            <div className="langCard html">
                <h2>HTML</h2>
                <p>A language for building web pages</p>
                <button onClick={() => navigate("/courses/html")}>Learn HTML</button>
            </div>
            <div className="langCard css">
                <h2>CSS</h2>
                <p>A language for styling web pages</p>
                <button onClick={() => navigate("/courses/css")}>Learn CSS</button>
            </div>
            <div className="langCard js">
                <h2>JavaScript</h2>
                <p>A language for programming web pages</p>
                <button onClick={() => navigate("/courses/javascript")}>Learn JavaScript</button>
            </div>
        </div>
    </div>
  )
}

export default Language
