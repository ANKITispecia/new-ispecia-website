import React from "react";
import data from "./Data";
import Portfoliocard from "@/components/PortfolioCard";
import Breadcrumb from "@/components/Breadcrumb";
import "./portfolio.css";

const Portfolio = () => {
  return (
  <>
    <Breadcrumb title={'Portfolio'}/>
    <div className="portfolio-container">
      <h3 className="portfolio-title">Check out some of our projects</h3>
      <div className="portfolio-grid">
        {data.map((card) => (
          <Portfoliocard key={card.id} card={card} />
        ))}
      </div>
    </div>
  </>
  );
};

export default Portfolio;
