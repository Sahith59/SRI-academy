import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { GraduationCap, Menu, X } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <HashLink smooth to="#top">
              <div className="logo-icon">
                <GraduationCap size={28} />
              </div>
              <div className="logo-text">
                <span className="logo-name">SRI</span>
                <span className="logo-suffix">Academy</span>
              </div>
            </HashLink>
          </div>

          <nav className={`nav ${isOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li><HashLink smooth to="#top" onClick={closeMenu}>Home</HashLink></li>
              <li><HashLink smooth to="#about" onClick={closeMenu}>About</HashLink></li>
              <li><HashLink smooth to="#faculty" onClick={closeMenu}>Faculty</HashLink></li>
              <li><HashLink smooth to="#results" onClick={closeMenu}>Results</HashLink></li>
              <li><HashLink smooth to="#video" onClick={closeMenu}>Featured Lecture</HashLink></li>
              <li><HashLink smooth to="#facilities" onClick={closeMenu}>Facilities</HashLink></li>
              <li><HashLink smooth to="#contact" onClick={closeMenu}>Contact</HashLink></li>
            </ul>
          </nav>

          <div className="admission-btn-container">
            <HashLink smooth to="#contact" className="admission-btn">
              Apply Now
            </HashLink>
          </div>

          <div className="mobile-toggle" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;