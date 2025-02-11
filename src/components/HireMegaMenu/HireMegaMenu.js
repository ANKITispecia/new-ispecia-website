'use client';
import React, { useState } from "react";
import "./HireMegaMenu.css";

const HireMegaMenu = () => {
  const [activeOption, setActiveOption] = useState("Data & AI");

  const data = {
    "Data & AI": {
      desc: "Explore AI and Machine Learning services.",
      solutions: [
        "AI Developer",
        "ML Developer",
        "Data Anakyst",
        "LLM Engineer",
        "Chatbot Engineers",
      ],
      icon: "https://www.shutterstock.com/image-vector/artificial-intelligence-circuit-line-style-260nw-2316452929.jpg", 
    },
    "Mobile App": {
      desc: "Enhance both speed and security in your software delivery with our DevSecOps.",
      solutions: [
        "Flutter Developer",
        "IOS Developer",
        "Android Developer",
        "React Native Developer",
        "Ionic Developer",
        "Kotlin Developer",
        "Swift Developer",
      ],
      icon: "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/08/Fotolia_128673803_Subscription_Monthly_M.jpg", 
    },
    "Frontend": {
      desc: "IoT solutions and tailored software development for your business needs.",
      solutions: [
        "Angular Developer",
        "HTML CSS Developer",
        "React Developer",
        "Vue.js Developer",
        "JavaScript Developer",
        "TypeScript Developer",
      ],
      icon: "https://media.istockphoto.com/id/1058712430/vector/simple-icon-to-represent-the-internet-of-things-concept-gear-settings-and-network-iot.jpg?s=612x612&w=0&k=20&c=FHm6JFVDYBAx62wBOP60EQUVhepsBjzpaRARLAxvsOM=", 
    },
    "Backend": {
      desc: "Scalable web and backend development services.",
      solutions: [
        ".NET Developer",
         "Java Developer",
         "Python Developer",
            "Node.js Developer",
            "PHP Developer"
        ],
      icon: "https://c8.alamy.com/comp/2DB193X/back-end-icon-simple-element-from-website-development-collection-filled-back-end-icon-for-templates-infographics-and-more-2DB193X.jpg", 
    },
    "Skilled Developer": {
      desc: "UI/UX design and expert consulting services.",
      solutions: [
        "QA Engineer",
         "DevOps Engineer",
         "SRE Engineer",
         "Cloud Engineer",
         "SaaS Engineer",
         "Full Stack Developer",
         "Blockchain Developer",
         "MVP Developer",
         "WordPress Developer",

        ],
      icon: "https://img.freepik.com/premium-photo/logo-web-design-is-shown-white-background_939033-77599.jpg", 
    },
  };


  const rightSectionData = {
    title: "Engagement Mode",
    subtitle: "Your Success is Our Code",
    options: [
      {
        logo:"https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-878bc3b/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/05/31070905/Group-17431.svg",
        title: "Staff Augmentation",
        desc: "Top IT talent on your terms: Dedicated, Hourly, or Flexible",
      },
      {
        logo: "https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-878bc3b/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/05/31070906/Group-17433.svg",
        title: "Project Based",
        desc: "Project Success, Simplified",
      },
    ],
  };

  return (
    <>
    <div className="mega-menu-main">
    <div mega-menu-header>
     <h3>Our Services</h3>
     <p>Incubating a culture of innovation & creativity</p>
     </div>
     <hr style={{width:"100%", height:"2px", backgroundColor:"#5ba70b", color:"#5ba70b"}} />
    <div className="mega-menu-container">
     
      <div className="mega-menu-sidebar">
       
        <ul>
          {Object.keys(data).map((option) => (
            <li
              key={option}
              className={activeOption === option ? "active" : ""}
              onClick={() => setActiveOption(option)}
            >
                 <img
                src={data[option].icon}
                alt={'img'}
                className="sidebar-icon"
              />
              {option}
            </li>
          ))}
        </ul>
      </div>

      
      <div className="mega-menu-content">
        <div className="mega-content-header">
        <h4>{activeOption}</h4>
        <p>{data[activeOption].desc}</p>
        </div>
        <div className="mega-menu-solutions">
          {data[activeOption].solutions.map((solution, index) => (
            <div key={index} className="mega-menu-solution-item">
              {solution}
            </div>
          ))}
        </div>
      </div>

     
      <div className="right-section">
        <h4>{rightSectionData.title}</h4>
        <p>{rightSectionData.subtitle}</p>
        {rightSectionData.options.map((option, index) => (
          <div key={index} className="engagement-option">
            <div style={{width:"80px", height:"60px"}}>
            <img src={option.logo} alt="img" />
            </div>
            <div>
            <h5>{option.title}</h5>
            <p>{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default HireMegaMenu;
