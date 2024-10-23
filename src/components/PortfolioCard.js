'use client';
import React, { useState } from "react";
import "./PortfolioCard.css";

const PortfolioCard = ({ card }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => setShowFullDescription(!showFullDescription);

  // Show full description if it's less than 200 characters, else truncate
  const description = card.description.length <= 200
    ? card.description
    : showFullDescription 
      ? card.description 
      : `${card.description.slice(0, 2000)}...`;

  return (
    <div className="portfolio-card">
      <img src={card.image} alt={card.heading} className="portfolio-card-img" />
      <div className="portfolio-card-content">
        <h3>{card.heading}</h3>
        <p>{description}</p>
        {card.description.length > 200 && (
          <button onClick={toggleDescription} className="read-more-btn">
            {showFullDescription ? "Read Less" : "Read More"}
          </button>
        )}
        <a href={card.link} target="_blank" rel="noopener noreferrer" className="visit-btn">
          Visit
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
