'use client';
import React, { useState } from "react";
import "./TestimonialSlider.css";
import { useMediaQuery } from "react-responsive";
import testimonials from "./testimonial.json";


const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = useMediaQuery({maxWidth: 767})
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1023})
  const isDesktop = useMediaQuery({maxWidth: 1365})

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
    <div className="testimonial-container">
      <h2 className="title">Our Client <span style={{color:"#86c445"}}>Testimonials</span></h2>
      <p className="subtitle" style={{maxWidth:isDesktop?"50%":"100%", display:"block", margin:"0 auto"}}>
      Ispecia Technologies follows certain quality standards that help provide mobile and web apps development services meeting the client’s expectation. Our strategy has helped us achieve customer satisfaction and a great client retention rate.
      </p>
      <div className="testimonial-slide">
        <div className="left-section">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="client-image"
          />
          <a
            href={testimonials[currentIndex].youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="play-button"
          >
            ▶
          </a>
        </div>
        <div className="right-side" style={{marginTop:"1rem"}}>
          <p className="quote"><strong className="quote-icon">❝</strong>{testimonials[currentIndex].quote} </p>
          <h3 className="client-name">{testimonials[currentIndex].name}</h3>
          <p className="client-position">
            {testimonials[currentIndex].position}
          </p>
        </div>
        <button className="arrow-button left" onClick={handlePrev}>
          &lt;
        </button>
        <button className="arrow-button right" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
    </>
  );
};

export default TestimonialSlider;
