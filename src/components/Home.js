import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            Transform Your Business with
            <span className="highlight"> Digital Excellence</span>
          </h1>
          <p className="home-description">
            We help businesses grow through innovative digital marketing strategies, 
            creative campaigns, and data-driven solutions that deliver real results.
          </p>
          <div className="home-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Get Started
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </button>
          </div>
        </div>
        <div className="home-image">
          <div className="hero-image-placeholder">
            <img className="img" src={require('../assets/banner.jpg')}  alt="Hero" />
            <div className="floating-elements">
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
              <div className="floating-element element-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Home;
