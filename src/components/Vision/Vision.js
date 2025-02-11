'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Vision.css";

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
  const quotesRef = useRef([]);

  useEffect(() => {
    // Animate quotes on scroll
    quotesRef.current.forEach((quote, index) => {
      gsap.fromTo(
        quote,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: quote,
            start: "top 85%",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <div className="landing-container">
      {/* Left Section */}
      <div className="left-section">
        <span className="badge">FOCUSED AREA</span>
        <h1>We want to bring business and the digital world.</h1>
        <p>
          We are excited for our work and how it positively impacts clients.
          With over 12 years of experience, we have been constantly providing
          excellence.
        </p>
        <button className="cta-button">
          <span className="button-text">SEE WHAT WE DO</span>
          <div className="button-circle"></div>
        </button>
      </div>

      {/* Right Section */}
      <div className="vision-right-section">
        <div className="quotes-container">
          <div className="quote-item left" ref={(el) => (quotesRef.current[0] = el)}>
            <span className="quote-number">01</span>
            <h3>Creative strategy</h3>
            <p>We create compelling web designs, which are the right for your target groups.</p>
            <div className="underline"></div>
          </div>

          <div className="quote-item right" ref={(el) => (quotesRef.current[1] = el)}>
            <span className="quote-number">02</span>
            <h3>Unique design</h3>
            <p>We create compelling web designs, which are the right for your target groups.</p>
            <div className="underline"></div>
          </div>

          <div className="quote-item left" ref={(el) => (quotesRef.current[2] = el)}>
            <span className="quote-number">03</span>
            <h3>Great development</h3>
            <p>We create compelling web designs, which are the right for your target groups.</p>
            <div className="underline"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
