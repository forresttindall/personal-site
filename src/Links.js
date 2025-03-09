import React, { useEffect, useRef } from 'react';
import './Links.css';

const Links = () => {
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

  const links = [
    {
      title: "Creationbase (My Company)",
      url: "https://creationbase.io",
    },
    {
      title: "QuantumKeep (Quantum Encryption)",
      url: "https://quantumkeep.io",
    },
    {
      title: "Paradox Labs (Web3 Project Marketplace)",
      url: "https://paradoxlabs.tech",
    },
    {
      title: "Newsletter",
      url: "https://forresttindall.com/#newsletter",
    },
    {
      title: "Github",
      url: "https://github.com/forresttindall",
    }
  ];

  return (
    <section className="links-section" ref={vantaRef}>
      <div className="links-content">
        <div className="profile-section">
          <div className="profile-image">
            <img src="/images/mearizona3.jpg" alt="Forrest Tindall" />
          </div>
          <h1 className="profile-name gradient-name">Forrest Tindall</h1>
          <p className="profile-bio">Software engineer leading innovation with modern technologies.</p>
        </div>
        
        <div className="links-grid">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              className="link-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;
