// FloatingContactButton.js
'use client';
import React, { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaPhone, FaTimes } from 'react-icons/fa';
import './FloatingContactButton.css';

const FloatingContactButton = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
    setIsFormVisible(false);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(prev => !prev);
  };

  return (
    <div className="floating-contact-button">
      {/* Contact Form */}
      {isFormVisible && (
        <div className="contact-form visible">
          <button className="close-button" onClick={toggleFormVisibility}>
            <FaTimes size={16} />
          </button>
          <h3>Leave a Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      )}

      {/* Contact Buttons */}
      <div className="contact-buttons">
        <button className="main-button" onClick={toggleFormVisibility}>
          <FaEnvelope size={20} />
        </button>
        <a
          href="https://wa.me/8650406532"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <FaWhatsapp size={20} />
        </a>
        <a href="tel:8650406532" className="phone-button">
          <FaPhone size={20} />
        </a>
      </div>
    </div>
  );
};

export default FloatingContactButton;
