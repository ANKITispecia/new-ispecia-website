'use client';
import React, { useState } from "react";
import "./MegaMenu.css";

const MegaMenu = () => {
  const [activeOption, setActiveOption] = useState("Cloud & DevSecOps");

  const data = {
    "AI & ML": {
      description: "Explore AI and Machine Learning services.",
      solutions: [
        "AI Consulting",
        "Machine Learning Development",
        "Deep Learning Solutions",
        "Natural Language Processing",
      ],
      icon: "https://www.shutterstock.com/image-vector/artificial-intelligence-circuit-line-style-260nw-2316452929.jpg", 
    },
    "Cloud & DevSecOps": {
      description: "Enhance both speed and security in your software delivery with our DevSecOps.",
      solutions: [
        "AWS Consulting",
        "Azure Consulting",
        "DevOps Consulting",
        "MLOps",
        "Cloud App Development",
        "Cloud Engineering",
        "Cloud Migration",
        "Microservices Development",
        "Serverless Application Development",
      ],
      icon: "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/08/Fotolia_128673803_Subscription_Monthly_M.jpg", 
    },
    "IoT & Custom Software": {
      description: "IoT solutions and tailored software development for your business needs.",
      solutions: [
        "IoT Device Integration",
        "Custom Software Development",
        "Smart Systems Design",
      ],
      icon: "https://media.istockphoto.com/id/1058712430/vector/simple-icon-to-represent-the-internet-of-things-concept-gear-settings-and-network-iot.jpg?s=612x612&w=0&k=20&c=FHm6JFVDYBAx62wBOP60EQUVhepsBjzpaRARLAxvsOM=", 
    },
    "Mobile App": {
      description: "Building mobile applications for iOS and Android platforms.",
      solutions: ["Native Apps", "Cross-Platform Apps", "UI/UX Optimization"],
      icon: "https://cdn.dribbble.com/users/939023/screenshots/3786130/dribbble_logo_-_creative_mobile_apps.png",
    },
    "Web & Backend": {
      description: "Scalable web and backend development services.",
      solutions: ["Web Development", "API Development", "Backend Optimization"],
      icon: "https://c8.alamy.com/comp/2DB193X/back-end-icon-simple-element-from-website-development-collection-filled-back-end-icon-for-templates-infographics-and-more-2DB193X.jpg", 
    },
    "Design & Consulting": {
      description: "UI/UX design and expert consulting services.",
      solutions: ["UI/UX Design", "Digital Strategy Consulting"],
      icon: "https://img.freepik.com/premium-photo/logo-web-design-is-shown-white-background_939033-77599.jpg", 
    },
    "Enterprise Solution": {
      description: "Comprehensive enterprise solutions for your business growth.",
      solutions: ["ERP Development", "CRM Solutions", "Enterprise Analytics"],
      icon: "https://img.freepik.com/free-vector/business-solution-logo-template-design_460848-11102.jpg", 
    },
  };


  const rightSectionData = {
    title: "Engagement Mode",
    subtitle: "Your Success is Our Code",
    options: [
      {
        logo:"https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-878bc3b/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/05/31070905/Group-17431.svg",
        title: "Staff Augmentation",
        description: "Top IT talent on your terms: Dedicated, Hourly, or Flexible",
      },
      {
        logo: "https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-878bc3b/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/05/31070906/Group-17433.svg",
        title: "Project Based",
        description: "Project Success, Simplified",
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
     
      <div className="mega-menu-side">
       
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
        <p>{data[activeOption].description}</p>
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

export default MegaMenu;
