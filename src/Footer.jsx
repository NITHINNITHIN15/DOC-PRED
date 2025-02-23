import React from 'react';
import "./Footer.css";

const Footer = () => {  
  
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img
              src="https://t4.ftcdn.net/jpg/04/75/28/15/360_F_475281584_SYyvgPEeRwjS08YunQVFCWVLtSY54xox.jpg"
              alt="Logo"
              className="footer-logo"
            />
            <p>
              MediPredict is dedicated to transforming healthcare with cutting-edge AI solutions that enhance predictive capabilities and decision-making.
              Our platform empowers healthcare professionals and organizations by providing accurate, data-driven insights to improve patient outcomes,
              streamline operations, and drive innovation. Explore our advanced tools and resources to stay ahead in a rapidly evolving healthcare landscape.
            </p>
          </div>
          <div className="footer-links">
            <h3>COMPANY</h3>
            <ul>
              <li><a href="/user/about">About Us</a></li>
              <li><a href="/user/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>GET IN TOUCH</h3>
            <p>+1-456-7890</p>
            <p>abc@gmail.com</p>
          </div>
        </div>
        
      </footer>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} MediPredict. All rights reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer
