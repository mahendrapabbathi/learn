// import React, { useState } from "react";
// import accordionData from "../../Programming_Languages/programming_languages.js";
// import "./Java.css";

// const Java = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [openSubIndex, setOpenSubIndex] = useState({});

//   // Filter only Python-related sections correctly
//   const pythonData = accordionData.filter((item) => item.language === "java");

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//     setOpenSubIndex({});
//   };

//   const handleSubToggle = (parentIndex, subIndex) => {
//     setOpenSubIndex((prev) => ({
//       ...prev,
//       [parentIndex]: prev[parentIndex] === subIndex ? null : subIndex,
//     }));
//   };

//   return (
//     <div className="language-container">
//       <p className="title">Python Programming</p>

//       {pythonData.map((item, index) => (
//         <div className="accordion" key={index}>
//           <button className="accordion-header" onClick={() => handleToggle(index)}>
//             <h2>{item.title}</h2>
//             <span>
//               {openIndex === index ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
//             </span>
//           </button>

//           {openIndex === index && (
//             <div className="accordion-content">
//               {item.submodules.map((sub, subIndex) => (
//                 <div key={subIndex} className="sub-accordion">
//                   <button className="sub-accordion-header" onClick={() => handleSubToggle(index, subIndex)}>
//                     <h2>{sub.title}</h2>
//                     <span>
//                       {openSubIndex[index] === subIndex ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
//                     </span>
//                   </button>

//                   {openSubIndex[index] === subIndex && (
//                     <div className="sub-accordion-content">
//                       <p>{sub.content}</p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Java;
