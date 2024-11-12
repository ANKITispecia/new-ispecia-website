'use client';
import React, { useState } from 'react';
import './FloatingContactButton.css';
import { FaMessage } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message });
    // Optionally, reset the form fields
    setName('');
    setEmail('');
    setMessage('');
    setIsOpen(false); // Close the form after submission
  };

  return (
    <div className="floating-contact-button">
      {/* WhatsApp Chat Redirection Button */}
      <a
        href="https://wa.me/8650406532" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Main Floating Button */}
      <button className="main-button" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} /> : <FaMessage size={30} />}
      </button>

      {/* Contact Form */}
      {isOpen && (
        <div className="contact-form">
          <h3>Leave a Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit" className="submit-button btn btn-border-base mt-0 pt-0">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FloatingContactButton;
