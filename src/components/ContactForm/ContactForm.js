import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ContactForm.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const formRef = useRef(null);

  useEffect(() => {
    // Store all form groups (which contain both label and input)
    const formGroups = formRef.current.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
      // Set initial state for both label and input container
      gsap.set(group.querySelector('label'), {
        y: -50,
        opacity: 0
      });
      
      gsap.set(group.querySelector('.input-container'), {
        y: -100,
        opacity: 0
      });
    });

    // Create timeline for coordinated animation
    formGroups.forEach(group => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: formRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(group.querySelector('label'), {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)"
      })
      .to(group.querySelector('.input-container'), {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "bounce.out"
      }, "-=0.3"); // Slight overlap with label animation
    });

    // Stagger the animations between groups
    gsap.to(formGroups, {
      stagger: 0.15
    });
    
  }, []);

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        {/* Decorative Elements */}
        <div className="leaf-decoration left"></div>
        <div className="leaf-decoration right"></div>

        {/* Form Content */}
        <div className="form-header">
          <h3 className="subheading">GET IN TOUCH WITH US</h3>
          <h2 className="heading">How we can help you?</h2>
        </div>

        <form className="contact-form-new" ref={formRef}>
          <div className="form-row">
            <div className="form-group">
              <label>YOUR NAME*</label>
              <div className="input-container">
                <input type="text" placeholder="What's your good name?" required />
                <span className="input-icon">😊</span>
              </div>
            </div>

            <div className="form-group">
              <label>YOUR EMAIL ADDRESS*</label>
              <div className="input-container">
                <input type="email" placeholder="Enter your email address" required />
                <span className="input-icon">✉️</span>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>YOUR PHONE NUMBER*</label>
              <div className="input-container">
                <input type="tel" placeholder="Enter your phone number" required />
                <span className="input-icon">📞</span>
              </div>
            </div>

            <div className="form-group">
              <label>YOUR SUBJECT</label>
              <div className="input-container">
                <input type="text" placeholder="How can we help you?" />
                <span className="input-icon">📝</span>
              </div>
            </div>
          </div>

          <div className="form-group full-width">
            <label>YOUR MESSAGE</label>
            <div className="input-container">
              <textarea placeholder="Describe about your message" rows="4"></textarea>
              <span className="input-icon">💭</span>
            </div>
          </div>

          <p className="privacy-notice">
            We are committed to protecting your privacy. We will never collect information about you without your explicit consent.
          </p>

          <button type="submit" className="submit-button">
            <span>SEND MESSAGE</span>
            <span className="button-icon">→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;