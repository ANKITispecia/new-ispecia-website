'use client';
import React, { useState } from "react";
import data from "./Data.json";
import PortfolioCard from "@/components/PortfolioCard";
import Breadcrumb from "@/components/Breadcrumb";
import "./portfolio.css";

const Portfolio = () => {
  const [visibleCards, setVisibleCards] = useState(4); // Start with 4 cards

  const loadMoreCards = () => setVisibleCards((prevCount) => prevCount + 4); // Add 4 more cards on each click

  return (
    <>
      <Breadcrumb title={"Portfolio"} />
      <div className="portfolio-container">
        <h3 className="portfolio-title">Check out some of our projects</h3>
        <div className="portfolio-grid">
          {data.slice(0, visibleCards).map((card, index) => (
            <PortfolioCard key={index} card={card} />
          ))}
        </div>
        {visibleCards < data.length && (
          <button className="btn btn-border-base" onClick={loadMoreCards}>
            Load More
          </button>
        )}
        
      </div>
    </>
  );
};

export default Portfolio;




