import React from 'react';
import './ServicePage.css';

const ServicePage = () => {
  return (
    <>
    <div className='service-main'>
    <div className="service-container">
    <div className="service-text-section">
      <h1>
        Transforming Your Online Vision into Reality with Website Development
        Services
      </h1>
      <p>
        With a focus on the client and a customer-centric approach, Quokka Labs,
        a website development company, creates solutions that produce measurable
        business outcomes, assisting brands in navigating the constantly evolving
        digital terrain.
      </p>
      <button>Schedule a free consultation</button>
    </div>

    <div className="service-image-section">
      <div className="background-circle">
        <div className="image-circle html"><img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="img" style={{height:"60px"}}/></div>
        <div className="image-circle css"><img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="img" style={{height:"60px"}}/></div>
        <div className="image-circle javascript"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="img" style={{height:"50px"}}/></div>
        <div className="image-circle angular"><img src="https://cdn-icons-png.flaticon.com/128/15484/15484402.png" alt="img" style={{height:"60px"}}/></div>
        <div className="image-circle react"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="img" style={{height:"70px"}}/></div>
      </div>
    </div>
  </div>
  </div>
  </>
  );
};

export default ServicePage;