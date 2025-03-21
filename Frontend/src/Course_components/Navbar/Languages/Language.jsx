import React from 'react'
import "./Language.css"

const Language = () => {
  return (
    <div className="langCardsWidth">
        <div className='langCards'>
            <div className="langCard python">
                <h2>Python</h2>
                <p>A popular programming language</p>
                <button>Learn Python</button>
            </div>
            <div className="langCard c">
                <h2>C</h2>
                <p>A programming language</p>
                <button>Learn C</button>
            </div>
            <div className="langCard java">
                <h2>Java</h2>
                <p>A programming language</p>
                <button>Learn Java</button>
            </div>
            <div className="langCard html">
                <h2>HTML</h2>
                <p>A language for building web pages</p>
                <button>Learn Python</button>
            </div>
            <div className="langCard css">
                <h2>CSS</h2>
                <p>A language for styling web pages</p>
                <button>Learn CSS</button>
            </div>
            <div className="langCard js">
                <h2>JavaScript</h2>
                <p>A language for programming web pages</p>
                <button>Learn JavaScript</button>
            </div>
        </div>
    </div>
  )
}

export default Language
