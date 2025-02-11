'use client';
import React, { useState } from "react";
import './TechnologiesPage.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import topics from "./technologies.json"; 

function TechnologiesPage() {
  const [activeTopic, setActiveTopic] = useState(topics[0]);

  return (
  <>
  <div className="technologies-main">
    <h1 className="technologies-title"><span style={{color:"#86c445"}}>Technologies</span> We Specialize In</h1>
    <div className="technologies-page">
      <div className="tech-container">
        <div className="sidebar">
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`topic-heading ${activeTopic.title === topic.title ? 'active' : ''}`}
              onClick={() => setActiveTopic(topic)}
            >
              {topic.title}
              <FaLongArrowAltRight className="arrow-icon" />
            </div>
          ))}
        </div>
        
        <div className="content-area">
          <h3 className="content-title">{activeTopic.title}</h3>
          <div className="grid-container">
            {activeTopic.data.map((item, index) => (
              <div key={index} className="tech-card">
                <img src={item.logo} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default TechnologiesPage;