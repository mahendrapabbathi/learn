
// import axios from "axios";
// import React, { useState } from "react";
// import { ClipLoader } from "react-spinners";
// import { toast } from "react-toastify";
// import "./Contact.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const sendMail = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/api/user/sendmail",
//         formData,
//         { withCredentials: true, headers: { "Content-Type": "application/json" } }
//       );
//       setFormData({ name: "", email: "", message: "" });
//       toast.success(data.message);
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to send message.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//     <section id='contact' className="contact">
//     <h1>CONTACT US</h1>
//       <form onSubmit={sendMail}>
//         <div>
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
//         </div>
//         <div>
//           <label>Email</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />
//         </div>
//         <div>
//           <label>Message</label>
//           <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message"></textarea>
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading && <ClipLoader size={20} color="white" />} Send Message
//         </button>
//       </form>
//     </section>
//       <hr />
//     </>
//   );
// };

// export default Contact;




import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/user/sendmail",
        formData,
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      setFormData({ name: "", email: "", message: "" });
      toast.success(data.message || "Message sent successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id='contact' className="contact">
        <h1>CONTACT US</h1>
        <form onSubmit={sendMail}>
          <div>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message"></textarea>
          </div>
          <button type="submit" disabled={loading}>
            {loading && <ClipLoader size={20} color="white" />} Send Message
          </button>
        </form>
      </section>

      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default Contact;
