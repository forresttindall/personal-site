import React, { useState, useEffect, useRef } from 'react';
import { CaretDown, GithubLogo, InstagramLogo, LinkedinLogo, List, At } from 'phosphor-react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBluesky } from '@fortawesome/free-brands-svg-icons';
import { faThreads } from '@fortawesome/free-brands-svg-icons';
import logo from './logo.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '';
  const dropdownRef = useRef(null);

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const targetUrl = `/#/${sectionId}`;
      window.location.href = targetUrl;
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/#/';
    }
  };

  // Add click outside listener to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener when dropdown is open
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className="header">
      <nav className="floating-nav">
        <Link to="/" className="nav-brand" onClick={scrollToTop}>
          <img src={logo} alt="Forrest Tindall Logo" className="logo" />
        </Link>
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <List size={24} />
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="nav-button"
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('blog')} 
              className="nav-button"
            >
              Blog
            </button>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          
          
          <li className="social-dropdown" ref={dropdownRef}>
            <button 
              className="dropdown-trigger"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Social
              <CaretDown 
                size={16}
                weight="bold"
                className={`dropdown-caret ${isDropdownOpen ? 'open' : ''}`}
              />
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                
                {/* Commenting out social links
                <a 
                  href="https://www.threads.net/@4est.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-item"
                >
                  <FontAwesomeIcon icon={faThreads} size="sm" />
                  Threads
                </a>
                
                <a 
                  href="https://www.instagram.com/4est.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-item"
                >
                  <InstagramLogo size={20} />
                  Instagram
                </a>
                
                <a 
                  href="https://bsky.app/profile/4est.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-item"
                >
                  <FontAwesomeIcon icon={faBluesky} style={{ color: '#909090' }} size="lg" />
                  Bluesky
                </a>
                */}

                <a 
                  href="https://www.linkedin.com/in/forrest-tindall/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-item"
                >
                  <LinkedinLogo size={20} />
                  LinkedIn
                </a>
               
                <a 
                  href="https://github.com/forresttindall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-item"
                >
                  <GithubLogo size={20} />
                  GitHub
                </a>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
