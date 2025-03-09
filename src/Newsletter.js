import React, { useState, useRef, useEffect } from 'react';
import './Newsletter.css';
import { blastConfetti } from './confetti';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const response = await fetch('https://api.sender.net/v2/subscribers', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzMwOTQ0ZWQyN2FmNGNjM2IyOWNlODlmYzYyMDUxYTIyMDEwN2I2Y2EyMjUxZTA1NjA2ZDkyNzllZDViY2U2MDBhOGI2ZDNkMzQzZmVhNWMiLCJpYXQiOiIxNzM1NTEzODUzLjQxNTk5NiIsIm5iZiI6IjE3MzU1MTM4NTMuNDE1OTk4IiwiZXhwIjoiNDg4OTExMzg1My40MTQ0NzUiLCJzdWIiOiI4ODkyNTgiLCJzY29wZXMiOltdfQ.EQhya_nW4CZgp1JjZDPTiKKjeeFdOVivz8HeMbdRxZzGLLX1KX5zLjuC3czdjMTu4eTkIx3hc5RmK_CbkjSbgw',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          firstname: firstName,
          groups: ['Newsletter Subscribers']
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setFirstName('');
        blastConfetti();
      } else {
        const error = await response.json();
        setStatus('error');
        console.error('Subscription failed:', error);
      }
    } catch (error) {
      setStatus('error');
      console.error('Subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="newsletter-section" id="newsletter" ref={vantaRef}>
      <div className="newsletter-content">
        <h2 className="newsletter-title">
          Join My <span className="gradient-text">Newsletter</span>
        </h2>
        <p className="newsletter-description">
          Get updates and early access to my open source projects.
        </p>
        
        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="input-group">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              required
              className="newsletter-input"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="newsletter-input"
            />
            <button 
              type="submit" 
              className="subscribe-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading-spinner"></span>
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
          
          {status === 'success' && (
            <div className="status-message success">
              Thanks for subscribing, {firstName}! Check your email to confirm.
            </div>
          )}
          
          {status === 'error' && (
            <div className="status-message error">
              Oops! Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
