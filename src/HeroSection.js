import React, { useEffect, useRef } from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // Load Three.js and Vanta scripts dynamically
    const loadScripts = async () => {
      // Load Three.js first
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
      document.head.appendChild(threeScript);

      // Load Vanta after Three.js
      threeScript.onload = () => {
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js';
        document.head.appendChild(vantaScript);

        vantaScript.onload = () => {
          if (!vantaEffect.current && window.VANTA) {
            vantaEffect.current = window.VANTA.WAVES({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x0,
              shininess: 24.00,
              waveHeight: 16.50,
              zoom: 0.71
            });
          }
        };
      };
    };

    loadScripts();

    // Cleanup
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    if (window.location.hash === '#/' || window.location.hash === '') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#/';
      
      const checkForElement = setInterval(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          clearInterval(checkForElement);
        }
      }, 100);

      setTimeout(() => clearInterval(checkForElement), 3000);
    }
  };

  return (
    <section className="hero-section" ref={vantaRef}>
      <div className="hero-content">
        <div className="hero-main">
          <span className="hero-eyebrow">Software Engineer</span>
          <div className="hero-title">
            <h1 className="gradient-name">Forrest Tindall</h1>
            <div className="hero-subtitle">
              Leading Software Innovations
            </div>
          </div>
          <p className="hero-description">
            Frontend engineer focused on clean architecture and exceptional user experiences.
          </p>
          <div className="cta-group">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="primary-button"
            >
              View Projects
              <span className="button-arrow">→</span>
            </button>
            <Link to="/contact" className="secondary-button">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
