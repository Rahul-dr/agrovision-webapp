import React, { useState } from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Your message has been sent successfully!');
        setErrorMessage('');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.detail || 'An error occurred. Please try again.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setErrorMessage('An error occurred while submitting the form. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Us</h1>
      <div className="contact-info">
        You can reach us directly via email at <a href="mailto:salar@gmail.com">agrivision177@gmail.com
        </a> or call us at +91-6364644056.
      </div>

      <form onSubmit={handleSubmit} aria-label="Contact Form">
        <label htmlFor="name">
          <span className="sr-only">Your Name</span>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </label>

        <label htmlFor="email">
          <span className="sr-only">Your Email</span>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </label>

        <label htmlFor="message">
          <span className="sr-only">Your Message</span>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            aria-required="true"
          ></textarea>
        </label>

        <button type="submit" aria-label="Send Message">
          Send Message
        </button>
      </form>

      {successMessage && (
        <p className="success-message" role="alert">
          {successMessage}
        </p>
      )}

      {errorMessage && (
        <p className="error-message" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default ContactUs;