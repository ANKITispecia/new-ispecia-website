// TechnologiesPage.js
import React, { useState } from "react";
import './TechnologiesPage.css';
import { FaLongArrowAltRight } from "react-icons/fa";


const topics = [
  {
    title: "Frontend Programming Languages",
    data: [
      { name: "CSS", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
      { name: "HTML", logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
      { name: "Javascript", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
      { name: "Angular", logo: "https://cdn-icons-png.flaticon.com/512/226/226269.png" },
      { name: "React", logo: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
      { name: "Vue.js", logo: "https://cdn-icons-png.flaticon.com/512/2111/2111379.png" },
      { name: "ember", logo: "https://cdn-icons-png.flaticon.com/512/919/919847.png" },
      { name: "Meteor", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968945.png" },
      { name: "Nextjs", logo: "https://cdn-icons-png.flaticon.com/512/888/888847.png" },
    ],
  },
  {
    title: "Backend Programming Languages",
    data: [
      { name: "Node.js", logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
      { name: "Python", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
      { name: "Ruby", logo: "https://cdn-icons-png.flaticon.com/512/919/919842.png" },
    ],
  },
  // Add more categories as needed
];

function TechnologiesPage() {
  const [activeTopic, setActiveTopic] = useState(topics[0]);


 
  

  return (
    <>
    <div className="technologies-page">

    <div style={{ display: "flex", height: "70vh", fontFamily: "Arial, sans-serif",paddingRight:"40px"}}>
      <div style={{ width: "45%", backgroundColor: "#1e90ff", color: "white", overflowY: "scroll", borderRadius: "20px"}}>
        {topics.map((topic, index) => (
          <div
          className="topic-heading"
            key={index}
            onMouseOver="onmouseOver()"
            style={{
              margin:"20px",
              padding: "15px",
              cursor: "pointer",
              backgroundColor: activeTopic.title === topic.title ? "#4682b4" : "inherit",
            
              fontWeight: activeTopic.title === topic.title ? "bold" : "semibold",
              borderRadius: "20px",
              
            }}
            onClick={() => setActiveTopic(topic)}
            
          >
            {topic.title}<FaLongArrowAltRight style={{ marginLeft: "20px", fontSize:"30px"}}/>
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: "20px", backgroundColor: "white" }}>
        <h2 style={{ color: "#333", borderBottom: "2px solid #1e90ff", paddingBottom: "10px" }}>
       {activeTopic.title} 
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "15px",
          }}
        >
          {activeTopic.data.map((item, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                backgroundColor: "#fafafa",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img src={item.logo} alt={item.name} style={{ width: "50px", height: "50px", marginBottom: "10px" }} />
              <p style={{ margin: "0", fontSize: "14px" }}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    </div>
    </>
   
  );
}

export default TechnologiesPage;
