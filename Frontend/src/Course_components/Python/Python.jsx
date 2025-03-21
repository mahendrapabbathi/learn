import React, { useState } from "react";
import "./Python.css";

const Python = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Data for multiple accordion items
  const accordionData = [
    {
      title: "Chapter-1 : Introduction to Python",
      content:
        "Python is a popular, high-level programming language known for its simplicity and readability. It is widely used in web development, data science, artificial intelligence, and automation.",
    },
    {
      title: "Chapter-2 : Variables, Data Types & Operators",
      content:
        "Python supports various data types including integers, floats, strings, lists, tuples, and dictionaries. Variables in Python do not need explicit declaration.",
    },
    {
      title: "Chapter-3 : Control Flow & Functions",
      content:
        "Python supports various data types including integers, floats, strings, lists, tuples, and dictionaries. Variables in Python do not need explicit declaration.",
    },
    {
      title: "Chapter-4 : Data Structures & File Handling",
      content:
        "Python supports various data types including integers, floats, strings, lists, tuples, and dictionaries. Variables in Python do not need explicit declaration.",
    },
    {
      title: "Chapter-5 : Object-Oriented Programming (OOP) in Python",
      content:
        "Python supports various data types including integers, floats, strings, lists, tuples, and dictionaries. Variables in Python do not need explicit declaration.",
    },
    {
      title: "Chapter-6 :  Advanced Topics & Libraries",
      content:
        "Python supports various data types including integers, floats, strings, lists, tuples, and dictionaries. Variables in Python do not need explicit declaration.",
    },
  ];

  // Toggle function
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="python-container">
      <p className="title">Python Programming</p>

      {accordionData.map((item, index) => (
        <div className="accordion" key={index}>
          <button
            className="accordion-header"
            onClick={() => handleToggle(index)}
          >
            <h2>{item.title}</h2>
            <span>
              {openIndex === index ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-solid fa-chevron-down"></i>
              )}
            </span>
          </button>

          {openIndex === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Python;
