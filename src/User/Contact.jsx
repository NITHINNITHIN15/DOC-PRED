import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {

  // const notify = () => toast.success("Message sent successfully!");

  return (
    <>
    <Navbar />
<div className="contact-page">

      {/* Contact Header Section */}
      <section className="contact-header">
        <h1>
          CONTACT <span>US</span>
        </h1>
        <p>We would love to hear from you! Get in touch with us for any inquiries or support.</p>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="form-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button /*onClick={notify}*/ type="submit" className="submit-button">Send Message</button>
            {/* <ToastContainer position="top-right" /> */}
          </form>
        </div>
      </section>

      
    </div>
    <Footer/>
    </>)
};
export default ContactUs;



