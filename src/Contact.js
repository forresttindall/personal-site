import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { blastConfetti } from './confetti';

const Contact = () => {
  const form = useRef();
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [status, setStatus] = useState({
    message: '',
    isError: false,
    isSubmitting: false
  });

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

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ ...status, isSubmitting: true });

    emailjs.sendForm(
      'service_qlqfr28',
      'template_cc2wh4f',
      form.current,
      'pZtlnSO7NHel0tpbW'
    )
      .then((result) => {
        setStatus({
          message: 'Message sent successfully!',
          isError: false,
          isSubmitting: false
        });
        form.current.reset();
        blastConfetti();
      }, (error) => {
        setStatus({
          message: 'Failed to send message. Please try again.',
          isError: true,
          isSubmitting: false
        });
      });
  };

  return (
    <section className="contact-section" ref={vantaRef}>
      <div className="contact-content">
        <div className="contact-header">
          <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
          <p className="contact-description">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="from_name"
            required
            placeholder="Your Name"
            className="contact-input"
          />
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="contact-input"
          />
          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="contact-input"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            className="contact-input"
            rows="6"
          ></textarea>

          <button 
            type="submit" 
            className="submit-button"
            disabled={status.isSubmitting}
          >
            {status.isSubmitting ? (
              <span className="loading-spinner"></span>
            ) : (
              'Send Message'
            )}
          </button>

          {status.message && (
            <div className={`status-message ${status.isError ? 'error' : 'success'}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
