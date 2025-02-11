'use client';
import React, { useState } from "react";
import "./Faq.css";
import { useMediaQuery } from "react-responsive";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const isMobile = useMediaQuery({maxWidth: 767})
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1023})
  const isDesktop = useMediaQuery({maxWidth: 1365})

  const data = {
    General: [
      {
        question: "How long has Ispecia Technologies been in the business?",
        answer: "Ispecia Technologies has been in the business for over 10 years, delivering top-notch solutions to clients globally.",
      },
      {
        question: "How does Ispecia Technologies ensure project success?",
        answer: "We ensure project success by utilizing agile methodologies, thorough planning, and consistent communication with our clients.",
      },
      {
        question: "Does Ispecia Technologies provide support post-project completion?",
        answer: "Yes, we offer post-project support, including maintenance, updates, and technical assistance as required.",
      },
      {
        question: "How can I start a project with Ispecia Technologies?",
        answer: "You can start a project by contacting us via our website or scheduling a consultation with our team.",
      },
      {
        question: "What industries does Ispecia Technologies specialize in?",
        answer: "We specialize in various industries, including healthcare, logistics, education, and finance.",
      },
    ],
    Capabilities: [
      {
        question: "What technologies does Ispecia Technologies specialize in?",
        answer: "We specialize in technologies like React, Node.js, Python, Java, Flutter, and more.",
      },
      {
        question: "Can Ispecia Technologies handle enterprise-level projects?",
        answer: "Yes, our team is experienced in handling complex, enterprise-level projects with scalable solutions.",
      },
      {
        question: "Does Ispecia Technologies offer custom software solutions?",
        answer: "Absolutely! We provide tailored software solutions to meet specific client requirements.",
      },
    ],
    "Privacy and Security": [
      {
        question: "How does Ispecia Technologies ensure data security?",
        answer: "We implement advanced security protocols, including data encryption, secure servers, and regular audits.",
      },
      {
        question: "Does Ispecia Technologies comply with GDPR and other regulations?",
        answer: "Yes, we comply with GDPR, HIPAA, and other global regulations to ensure client data is protected.",
      },
      {
        question: "How does Ispecia Technologies protect client confidentiality?",
        answer: "We use NDAs and secure communication channels to safeguard client confidentiality at every stage.",
      },
    ],
  };

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <div className="faq-container">
        <div className="faq-header" style={{textAlign:"center",padding:"2rem"}}>
            <h4 style={{color:"#86c445"} }>SOME  FAQs</h4>
            <h3 style={{color:"gray"}}>Creating Digital Masterpieces</h3>
            <div style={{width:isDesktop?"50%":"100%",margin:"0 auto"}}>
            <p>Get to know more about how we at Ispecia Technologies can help you achieve your business goals with our comprehensive services.</p>
            </div>
        </div>
    <div className="faq-page">
      <div className="sidebar">
        {Object.keys(data).map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab);
              setExpandedQuestion(null); 
            }}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="faq-content">
        <h2 style={{color:"gray"}}>{activeTab}</h2>
        <ul>
          {data[activeTab].map((item, index) => (
            <li key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                {item.question}
                <span className="dropdown-icon">
                  {expandedQuestion === index ? "▲" : "▼"}
                </span>
              </div>
              {expandedQuestion === index && (
                
                <div className="faq-answer">{item.answer}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Faq;
