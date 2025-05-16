import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { GraduationCap, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo">
              <HashLink smooth to="#top">
                <div className="logo-icon">
                  <GraduationCap size={24} />
                </div>
                <div className="logo-text">
                  <span className="logo-name">SRI</span>
                  <span className="logo-suffix">Academy</span>
                </div>
              </HashLink>
            </div>
            <p className="footer-about">
              Shaping medical careers with excellence through dedicated teaching and comprehensive guidance.
            </p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><HashLink smooth to="#top">Home</HashLink></li>
              <li><HashLink smooth to="#about">About Us</HashLink></li>
              <li><HashLink smooth to="#faculty">Our Faculty</HashLink></li>
              <li><HashLink smooth to="#results">Results</HashLink></li>
              <li><HashLink smooth to="#video">Featured Lecture</HashLink></li>
              <li><HashLink smooth to="#facilities">Facilities</HashLink></li>
              <li><HashLink smooth to="#contact">Contact Us</HashLink></li>
            </ul>
          </div>
          
          <div className="footer-courses">
            <h3>Programs</h3>
            <ul>
              <li><HashLink smooth to="#contact">NEET Coaching</HashLink></li>
              <li><HashLink smooth to="#contact">INTER+NEET Coaching</HashLink></li>
              <li><HashLink smooth to="#contact">EAPCET Preparation</HashLink></li>
              <li><HashLink smooth to="#contact">Foundation Courses</HashLink></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <p>
              <MapPin size={16} style={{ marginRight: '8px' }} />
              Beside Chaithanya Junior College, Near Bustand, Ansari Colony, Nalgonda.
            </p>
            <p>
              <Phone size={16} style={{ marginRight: '8px' }} />
              <a href="tel:+919948854533">+91 9948854533</a>, <a href="tel:+919951190513">+91 9951190513</a>
            </p>
            <p>
              <Mail size={16} style={{ marginRight: '8px' }} />
              <a href="mailto:tsridhar73@gmail.com">tsridhar73@gmail.com</a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} SRI Academy. All Rights Reserved.</p>
          <p>
            <HashLink smooth to="#top">Privacy Policy</HashLink> | 
            <HashLink smooth to="#top">Terms of Service</HashLink>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;