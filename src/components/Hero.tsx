import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="welcome">Welcome to</span>
            <span className="academy-name">SRI Academy</span>
          </h1>
          <p className="hero-subtitle">
            Under the dynamic guidance of Sridhar Reddy Thummala and Dr. J.V. Rao, 
            we transform aspirations into achievements
          </p>
          <div className="hero-badges">
            <div className="badge">NEET</div>
            <div className="badge">INTER</div>
            <div className="badge">EAPCET</div>
          </div>
          <div className="hero-cta">
            <HashLink smooth to="#contact" className="btn btn-primary">
              Apply for Admission
            </HashLink>
            <HashLink smooth to="#results" className="btn btn-secondary">
              View Results
            </HashLink>
          </div>
          <div className="hero-announcement">
            <div className="announcement-badge">
              Admissions Open for 2025-26
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L48,138.7C96,149,192,171,288,154.7C384,139,480,85,576,85.3C672,85,768,139,864,170.7C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;