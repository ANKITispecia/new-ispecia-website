'use client';
import React, { useState } from "react";
import './PortfolioCard.css'; // Import the CSS file

const Portfoliocard = ({ card }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleClick = () => {
    setIsMinimized(!isMinimized); // Toggle minimize state
  };

  return (
    <div
      className="portfolio-card"
      style={{ backgroundImage: `url(${card.image})` }}
      onClick={handleClick}
    >
      <div className={`card-content ${isMinimized ? 'minimized' : ''}`}>
        {isMinimized ? (
          <>
            <a href={card.link} target="_blank" className="visit-button">
              Visit
            </a>
            <div className="extend-symbol" onClick={handleClick}>
              &#x25B6; {/* Right-pointing triangle symbol */}
            </div>
          </>
        ) : (
          <>
            <h3>{card.heading}</h3>
            <p>{card.description}</p>
            <a href={card.link} target="_blank" className="visit-button">
              Visit
            </a>
          </>
        )}
      </div>
      <div className="category-badge">{card.category}</div>
    </div>
  );
};

export default Portfoliocard;
