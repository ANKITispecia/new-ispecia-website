'use client';
import React from "react";
import { gsap } from "gsap";

const Portfoliocard = ({ card }) => {
  const handleScroll = () => {
    gsap.to(window, {
      scrollTo: 0,
      duration: 1,
      ease: "power2.out",
    });
  };

  const imageWidth = `calc(7.5 * (100vw / 11.53))`; // Maintain aspect ratio
  const imageHeight = `calc(4.03 * (100vw / 11.53))`; // Maintain height relative to width
  const descriptionWidth = `calc(100vw - ${imageWidth})`; // Remaining width for description
  const descriptionHeight = imageHeight; // Same height as the image block

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100vw',
        height: 'auto',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          backgroundImage: `url(${card.image})`,
          width: imageWidth,
          height: imageHeight,
          borderTopLeftRadius: '3%',
          borderBottomLeftRadius: '3%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRight:'3px solid white',
        }}
      />
      <div
        style={{
          
          width: descriptionWidth,
          height: descriptionHeight,
          borderTopRightRadius: '3%',
          borderBottomRightRadius: '3%',
          backgroundColor: '#1f2937', // Background color for the description
          color: '#fff', // Text color
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginRight: '3rem',
          width:'30vw'
        }}
      >
        <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{card.heading}</h3>
        <p style={{ margin: '0.5rem 0' }}>{card.description}</p>
        <button
          style={{
            backgroundColor: '#3b82f6',
            color: '#fff',
            padding: '8px 16px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onClick={handleScroll}
        >
          Visit
        </button>
      </div>
    </div>
  );
};

export default Portfoliocard;
