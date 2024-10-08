'use client';
import React, { useState, useRef, useEffect } from "react";
import './PortfolioCard.css';

const Portfoliocard = ({ card }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sidebarRef = useRef(null);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0); // State for scroll position

  const toggleSidebar = (cardData, e) => {
    e.preventDefault();  // Prevent default anchor behavior, even though it's a button, good practice
    
    setPreviousScrollPosition(window.scrollY);  // Save the current scroll position
    setIsSidebarOpen(true);  // Open sidebar
    setActiveCard(cardData);  // Set the active card
  };
  
  const closeSidebar = () => {
    setIsSidebarOpen(false);  // Close sidebar
    // Restore scroll position without delay or with minimal delay
    setTimeout(() => {
      window.scrollTo({ top: previousScrollPosition, behavior: 'smooth' });
    }, 10);  // Reduced delay to 10ms
  };
  

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      closeSidebar();
    }
  };

  // Disable scrolling when the sidebar is open
  useEffect(() => {
    const body = document.body;
    if (isSidebarOpen) {
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.width = '100%';
    } else {
      body.style.overflow = 'auto';
      body.style.position = '';
      body.style.width = '';
    }
  }, [isSidebarOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: "auto", width: '100vw' }}>
      <div className={`portfolio-wrapper ${isSidebarOpen ? 'blur-content' : ''}`}>
        {/* Heading and category above the image */}
        <div className="portfolio-heading">
          <h3>{card.heading}</h3>
          <span className="category-badge">{card.category}</span>
        </div>

        {/* Image container */}
        <div className="portfolio-card-image" style={{ backgroundImage: `url(${card.image})` }}></div>

        {/* Details button next to the image */}
        <button 
        type="button"
        className="details-button" onClick={(e) => {
          toggleSidebar(card, e);
          
          
        }}>Details</button>
      </div>

      {/* Sidebar content */}
      <div ref={sidebarRef} className={`sidebar-content ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={closeSidebar}>X</button>
        <div className="sidebar-text">
          {activeCard && (
            <>
              <h3>{activeCard.heading}</h3>
              <p>{activeCard.description}</p>
              <button className="visit-button">Visit</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfoliocard;
