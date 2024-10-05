'use client';
import React, { useState, useEffect } from "react";
import './PortfolioCard.css'; // Import the CSS file

const Portfoliocard = ({ card }) => {
  const [showText, setShowText] = useState(true);
  const [timer, setTimer] = useState(null);

  const handleClick = () => {
    if (timer) {
      // If clicked within 2 seconds, clear the timeout and show instantly
      clearTimeout(timer);
      setTimer(null);
      setShowText(true);
    } else {
      setShowText(false);
      const newTimer = setTimeout(() => {
        setShowText(true);
        setTimer(null);
      }, 3500);
      setTimer(newTimer);
    }
  };

  return (
    <div
      className="portfolio-card"
      style={{ backgroundImage: `url(${card.image})` }}
      onClick={handleClick}
    >
      {showText && (
        <div className="card-content">
          <h3>{card.heading}</h3>
          <p>{card.description}</p>
          <a href={card.link} target="_blank" className="visit-button">
            Visit
          </a>
        </div>
      )}
      <div className="category-badge">{card.category}</div>
    </div>
  );
};

export default Portfoliocard;
