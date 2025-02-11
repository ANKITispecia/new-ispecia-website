import React from 'react'
import './ServicePage2.css'
import servicesData from './servicepage2.json'


const ServicePage2 = () => {
  return (
    <div className="services-container">
      <h1 className="services-heading">Our Services</h1>

      <div className="services-wrapper">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button className="explore-button">Explore</button>
            </div>

            <div className="service-newicons">
              {service.icons.map((icon, idx) => (
                <div className="newicon" key={idx}>
                  <img src={icon}></img>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage2