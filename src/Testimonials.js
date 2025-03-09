import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lori Tindall",
      title: "FIVE STARS!!!",
      text: "Working with Forrest was easy and fun! He drew out my ideas to create a design that reflects my values. He also built SEO-friendly elements into my website, boosting its visibility. Choosing to work with him was a smart decision—I love my new branding!",
      rating: 5,
      image: "/images/mom.jpg"
    },
    {
      name: "Jackie Beauchaine",
      title: "I couldn't be happier!",
      text: "Forrest did a fantastic job on my rebrand and website. My website is now ranking higher on google and is bringing in more business. He really gave my business the look I always wanted!",
      rating: 5,
      image: "/images/grammie.jpg"
    },
    {
      name: "Douglas Herlocker",
      title: "Very pleased with the results!",
      text: "His quality and attention to detail is among the best and his creative solutions exceeded expectations. He helped my business partner with a branding and website package.",
      rating: 5,
      image: "/images/doug.webp"
    },
    {
      name: "Patrick Abrams",
      title: "5 out of 5 stars!",
      text: "I couldn't be happier with the logos and website Forrest provided. Our SEO ranking shot up two pages on google and we are getting significantly more website traffic and more customers. He guided me through the process very well and he had data and statistics to back up his recommendations. 5 out of 5 stars!",
      rating: 5,
      image: "/images/patrick.jpeg"
    }
  ];

  return (
    <section className="testimonials-section">
      <h2 className="section-title" id="testimonials-title">Client Stories</h2>
      
      <div className="bento-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`bento-item item-${index + 1}`}>
            <div className="testimonial-content">
              <div className="testimonial-header">
                <div className="profile">
                  <div className="profile-image">
                    {testimonial.image ? (
                      <img src={testimonial.image} alt={testimonial.name} />
                    ) : (
                      <div className="profile-placeholder">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="profile-info">
                    <h3 className="profile-name">{testimonial.name}</h3>
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <blockquote className="quote">
                <p>{testimonial.text}</p>
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
