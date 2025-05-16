import React from 'react';
import { BookOpen, Users, Award, Clock } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
          <div className="underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Medical Students" 
              />
            </div>
          </div>
          
          <div className="about-text">
            <h3>Excellence in Medical Education</h3>
            <p className="founder-note">
              One of the former Director and Senior Chemistry Faculty, <span className="highlight">Sridhar Reddy Thummala</span>
            </p>
            <p>
              SRI Academy was established with a vision to transform medical education and create a nurturing environment 
              for aspiring medical professionals. Our academy is committed to providing exceptional coaching for 
              NEET, INTER, and EAPCET examinations.
            </p>
            <p>
              With a team of dedicated educators and a proven teaching methodology, we have consistently produced
              outstanding results. Our students are guided to achieve their dreams of securing seats in prestigious
              medical colleges across the country.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <BookOpen />
                </div>
                <div className="feature-text">
                  <h4>Expert Faculty</h4>
                  <p>Experienced educators dedicated to student success</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <Users />
                </div>
                <div className="feature-text">
                  <h4>Small Batch Sizes</h4>
                  <p>Personalized attention for each student</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <Award />
                </div>
                <div className="feature-text">
                  <h4>Proven Results</h4>
                  <p>Consistent track record of success</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <Clock />
                </div>
                <div className="feature-text">
                  <h4>Structured Programs</h4>
                  <p>Comprehensive approach to preparation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;