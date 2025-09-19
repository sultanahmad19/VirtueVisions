import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About VirtueVisions</h2>
          <p className="section-subtitle">Your trusted partner in digital transformation</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>We're passionate about helping businesses thrive in the digital age</h3>
            <p>
              Founded in 2020, VirtueVisions has been at the forefront of digital marketing innovation. 
              Our team of experts combines creativity with cutting-edge technology to deliver 
              exceptional results for our clients.
            </p>
            <p>
              We believe in building long-term partnerships and creating strategies that not only 
              meet your current goals but also position you for future success in an ever-evolving 
              digital landscape.
            </p>
            
            <div className="stats">
              <div className="stat-item">
                <h4>150+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h4>100%</h4>
                <p>Client Satisfaction</p>
              </div>
              <div className="stat-item">
                <h4>5+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h4>24/7</h4>
                <p>Support Available</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="about-image-placeholder">
                <img className="img" src={require('../assets/s.jpeg')} alt="About Us" />
              <div className="image-overlay">
                <h4>Our Team</h4>
                <p>Creative minds working together</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="values">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🎯</div>
              <h4>Results-Driven</h4>
              <p>We focus on delivering measurable results that impact your bottom line.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">💡</div>
              <h4>Innovation</h4>
              <p>We stay ahead of trends and leverage the latest technologies.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h4>Partnership</h4>
              <p>We work as an extension of your team, not just a vendor.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">📈</div>
              <h4>Growth</h4>
              <p>We're committed to your long-term success and growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
