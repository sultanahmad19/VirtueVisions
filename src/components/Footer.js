import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>VirtueVisions</h3>
            <p>Transforming businesses through innovative digital marketing strategies and creative solutions.</p>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">SEO Optimization</a></li>
              <li><a href="#services">Social Media Marketing</a></li>
              <li><a href="#services">Content Marketing</a></li>
              <li><a href="#services">PPC Advertising</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#projects">Our Work</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>123 Business Street<br />City, State 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@virtuevisions.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 VirtueVisions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
