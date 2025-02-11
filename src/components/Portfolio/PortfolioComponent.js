'use client';
import React, { useState } from "react";
import "./portfolioSection.css";
import BannerSeven from "../BannerSeven";
import sections from "./portfolio.json";

  const serviceOptions = [
    "Mobile Development",
    "Web Development",
    "UI/UX Design",
    "Cloud Solutions",
    "DevOps",
    "Quality Assurance"
  ];
  
  const industryOptions = [
    "Healthcare",
    "Real Estate",
    "Fintech",
    "Social Media",
    "Insurance",
    "Education",
    "E-Commerce"
  ];
  
  function PortfolioSection() {
    const [showServices, setShowServices] = useState(false);
    const [showIndustries, setShowIndustries] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
      services: [],
      industries: []
    });
    const [activeFilter, setActiveFilter] = useState("ALL");
  
    const handleFilterClick = (type) => {
      if (type === "SERVICES") {
        setShowServices(!showServices);
        setShowIndustries(false);
      } else if (type === "INDUSTRIES") {
        setShowIndustries(!showIndustries);
        setShowServices(false);
      } else {
        setShowServices(false);
        setShowIndustries(false);
        setSelectedFilters({ services: [], industries: [] });
        setActiveFilter("ALL");
      }
    };
  
    const handleOptionClick = (type, option) => {
      setSelectedFilters(prev => {
        const newFilters = { ...prev };
        const filterKey = type.toLowerCase();
        
        if (newFilters[filterKey].includes(option)) {
          newFilters[filterKey] = newFilters[filterKey].filter(item => item !== option);
        } else {
          newFilters[filterKey] = [...newFilters[filterKey], option];
        }
        
        return newFilters;
      });
      setActiveFilter(type);
    };
  
    const filteredSections = sections.filter(section => {
      if (activeFilter === "ALL") return true;
      
      const matchesService = selectedFilters.services.length === 0 || 
                            selectedFilters.services.includes(section.service);
      const matchesIndustry = selectedFilters.industries.length === 0 || 
                             selectedFilters.industries.includes(section.industry);
      
      return matchesService && matchesIndustry;
    });
  
    return (
      <>
        <div className="portfolio-section">
          <BannerSeven />
          <div className="filter-section" style={{
            display: "flex",
            width: "100%",
            padding: "20px 0",
            borderBottom: "2px solid #86c445",
            marginBottom: "30px",
            position: "relative"
          }}>
            <div className="filter-container" style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",  
              maxWidth: "1200px",
              margin: "0 auto"
            }}>
              <div style={{ position: "relative" }} className="filter-button">
              <button
                onClick={() => handleFilterClick("ALL")}
                style={{
                  padding: "8px 30px",
                  border: "none",
                  background: activeFilter === "ALL" ? "#f0f0f0" : "transparent",
                  cursor: "pointer",
                  display: "flex",
                  gap: "5px",
                  borderRadius: "10px",
                  fontWeight: activeFilter === "ALL" ? "bold" : "normal"
                }}
              >
                ALL
              </button>
              </div>
              <div style={{ position: "relative" }} className="filter-button">
                <button
                  onClick={() => handleFilterClick("SERVICES")}
                  style={{
                    padding: "8px 20px",
                    border: "none",
                    background: showServices ? "#f0f0f0" : "transparent",
                    cursor: "pointer",
                    display: "flex",
                    gap: "5px",
                    borderRadius: "10px",
                    fontWeight: activeFilter === "SERVICES" ? "bold" : "normal"
                  }}
                >
                  SERVICES {selectedFilters.services.length > 0 && `(${selectedFilters.services.length})`}
                  
                </button>
                
                {showServices && (
                  <div style={{
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    background: "white",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    borderRadius: "8px",
                    padding: "10px",
                    marginTop: "15px",
                    zIndex: 1000,
                    width: "100%",
                    minWidth: "300px",
                    transition: "all 0.5s"
                  }}>
                    {serviceOptions.map(option => (
                      <div
                        key={option}
                        onClick={() => handleOptionClick("SERVICES", option)}
                        style={{
                          width: "100%",
                          padding: "8px 15px",
                          cursor: "pointer",
                          display: "flex",
                          gap: "20px",
                          transition: "all 0.5s"
                        }}
                      >
                        <div style={{
                          width: "20px",
                          height: "20px",
                          border: "2px solid #ddd",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          background: selectedFilters.services.includes(option) ? "#86c445" : "white"
                        }}>
                          {selectedFilters.services.includes(option) && "✓"}
                        </div>
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
  
              <div style={{ position: "relative",   }} className="filter-button">
                <button
                  onClick={() => handleFilterClick("INDUSTRIES")}
                  style={{
                    padding: "8px 20px",
                    border: "none",
                    background: showIndustries ? "#f0f0f0" : "transparent",
                    cursor: "pointer",
                    display: "flex",
                    
                    gap: "5px",
                    borderRadius: "10px",
                    fontWeight: activeFilter === "INDUSTRIES" ? "bold" : "normal"
                  }}
                >
                  INDUSTRIES {selectedFilters.industries.length > 0 && `(${selectedFilters.industries.length})`}
                  
                </button>
                
                {showIndustries && (
                  <div style={{
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    background: "white",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    borderRadius: "8px",
                    padding: "10px",
                    marginTop: "5px",
                    zIndex: 1000,
                    minWidth: "250px"
                  }}>
                    {industryOptions.map(option => (
                      <div
                        key={option}
                        onClick={() => handleOptionClick("INDUSTRIES", option)}
                        style={{
                          padding: "8px 15px",
                          cursor: "pointer",
                          display: "flex",
                          gap: "30px"
                        }}
                      >
                        <div style={{
                          width: "20px",
                          height: "20px",
                          border: "2px solid #ddd",
                          borderRadius: "50%",
                          display: "flex",
                          
                          justifyContent: "center",
                          background: selectedFilters.industries.includes(option) ? "#6366f1" : "white"
                        }}>
                          {selectedFilters.industries.includes(option) && "✓"}
                        </div>
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

                <div style={{ }} className="filter-button">
              {(selectedFilters.services.length >= 0 || selectedFilters.industries.length > 0) && (
                <button
                  onClick={() => {
                    setSelectedFilters({ services: [], industries: [] });
                    setActiveFilter("ALL");
                  }}
                  style={{
                    padding: "8px 20px",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    
                    gap: "5px"
                  }}
                >
                  CLEAR ALL 
                </button>
              )}
              </div>
            </div>
          </div>
  
          {/* Rest of your existing JSX */}
          <div className="headData">
            <div className="left-data">
              <h3>Our success stories</h3>
            </div>
            <div className="right-data">
              <p>At Ispecia Technologies, we partner with clients to design and develop custom mobile apps, platforms, so they can experience their idea in to a product, that are built to grow. Our expertise spans across a diverse range of clients, from global brands and media properties to startups and well-funded ventures.</p>
            </div>
          </div>
          <div className="container">
            {filteredSections.map((section, index) => (
              <div
                key={section.id}
                className={`section ${index % 2 !== 0 ? "" : ""}`}
              >
                <div style={{ margin: "1rem 0rem" }}>
                  <span className="category" style={{
                    backgroundColor: "#dadff2",
                    padding: "0.6rem",
                    width: "100%",
                    color: "black",
                    borderRadius: "1.5rem",
                    textAlign: "center",
                    fontSize: "1rem",
                    fontWeight: "800",
                  }}>{section.category}</span>
                </div>
                <div className="video-overlay">
                  <video
                    onMouseEnter={(e) => {
                      e.currentTarget.play();
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                    }}
                    loop muted>
                    <source src={section.videoUrl} type="video/mp4" />
                  </video>
                </div>
                <div className="content">
                  <h2>{section.title}</h2>
                  <p style={{ textAlign: "start" }}>{section.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  

export default PortfolioSection;