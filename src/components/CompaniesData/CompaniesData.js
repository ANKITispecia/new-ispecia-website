'use client';
import React from "react";
import "./CompaniesData.css";
import { useMediaQuery } from "react-responsive";
import companies from "./companies.json";


const CompaniesData = () => {
  const isMobile = useMediaQuery({maxWidth: 767})
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1023})
  const isDesktop = useMediaQuery({maxWidth: 1365})

  
  return (
   <>
   
   
    <div className="page-container">
    <div className="companies-header" style={{textAlign:'center', padding:'20px',width:'100%'}} >
    <h2 style={{color:'#86c445', fontSize:'2rem', fontFamily:`'Plus Jakarta Sans', sans-serif`}}>Industries We Serve</h2>
    <div style={{width:isMobile ? '100%' : '50%', margin:'auto'}}>
    <p className="companies-sub-title">Unlock your true potential, leverage the best of technology, and create applications based on a modern algorithm with our experts.
    </p>
    </div>
   </div>
      {companies.map((company) => (
        <div key={company.id} className="card">
          <div className="image-container">
            <img src={company.image} alt={company.name} />
            <div className="number">{company.id.toString().padStart(2, "0")}</div>
          </div>
          <div className="content" >
            <div className="icon" style={{display: "flex", gap:"30px", alignItems:"center"}}>
                {company.icon}
            <h2 style={{color:'black'}}>{company.name}</h2>
            </div>
            <p>{company.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default CompaniesData;
