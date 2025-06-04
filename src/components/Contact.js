import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="section-title">Get in Touch</h2>

      {/* Contact Form Card */}
      <div className="contact-container">
        <form
          className="contact-form"
          action="https://formspree.io/f/mkgrrkyw"
          method="POST"
        >
          {/* Hidden redirect input */}
          <input type="hidden" name="_redirect" value="https://portfoliomahadev.netlify.app/contact" />

          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="contact-info-plain">
        <div className="contact-item">
          <strong>Email:</strong>
          <a href="mailto:mahadevd3108@gmail.com" target='_blank' rel="noopener noreferrer">
            mahadevd3108@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <strong>Phone:</strong>
          <a href="tel:+918660376081">+91 8660376081</a>
        </div>
        <div className="contact-item">
          <strong>LinkedIn:</strong>
          <a href="https://www.linkedin.com/in/mahadev-mokkapati/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/mahadev-mokkapati/
          </a>
        </div>
        <div className="contact-item">
          <strong>GitHub:</strong>
          <a href="https://github.com/mahadev1411" target="_blank" rel="noopener noreferrer">
            github.com/mahadev1411
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
