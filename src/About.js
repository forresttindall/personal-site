import React from 'react';
import { useEffect } from 'react';
import './About.css';

const About = () => {
  
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  

  return (
    <section className="about-section">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="20%" stopColor="#e6683c" />
            <stop offset="40%" stopColor="#dc2743" />
            <stop offset="60%" stopColor="#cc2366" />
            <stop offset="80%" stopColor="#bc1888" />
            <stop offset="100%" stopColor="#7b3fff" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">About</h2>
        </div>
        
        <div className="hero-image-container">
          <img src="/images/me.jpg" alt="Forrest Tindall" className="hero-image" />
        </div>

        <div className="about-content">
          <div className="about-grid">
            <div className="about-card main-bio">
              <h3>Engineering Meets Design</h3>
              <p>
                As a frontend software engineer, I craft engaging digital experiences that seamlessly blend form and function. 
                I approach web development with both an engineer's precision and a designer's eye, believing that successful 
                websites must do more than just look good – they need to guide users through intuitive journeys and drive 
                meaningful actions.
              </p>
              <p>
                My four C's methodology (Connect, Clarify, Convince, Convert) ensures websites not only engage visitors but 
                strategically guide them toward desired outcomes. Beyond the web, I'm passionate about integrating software, 
                firmware and hardware systems, 3D printing, cybersecurity, and IoT.
              </p>
            </div>

            <div className="about-card current-focus">
              <h3>Current Focus</h3>
              <div className="focus-items">
                <div className="focus-item">
                  <span className="focus-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </span>
                  <p>Expanding into backend engineering with Go (Golang) for scalable system development</p>
                </div>
                <div className="focus-item">
                  <span className="focus-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </span>
                  <p>Mastering Three.js and Ethers.js for creating immersive web experiences</p>
                </div>
                <div className="focus-item">
                  <span className="focus-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                  </span>
                  <p>Developing Bug Finder - a crowdsourced security app for detecting credit card skimmers, two-way mirrors, and hidden cameras</p>
                </div>
                <div className="focus-item">
                  <span className="focus-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </span>
                  <p>Improving Spanish language skills for global team collaboration</p>
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
