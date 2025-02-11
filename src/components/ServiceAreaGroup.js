import React from "react";
import { FaPlus } from "react-icons/fa";
import serviceList from "../scripts/serviceList";
import Link from "next/link";
import './ServiceAreaGroup.css'
import ContactButton from "./ContactButton";
// import "./ServiceAreaGroup.css";
const ServiceAreaGroup = () => {
  return (
    <>
      {/*=================== service area start ===================*/}
      <div style={{ position: "relative", paddingTop: "100px" }} className="service-area">
        <img
          style={{ position: "absolute", bottom: 0, left: 0 }} 
          className="top_image_bounce"
          src="assets/img/icon/4.png"
          alt="img"
        />
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center" }} className="section-title">
            <h6 style={{ marginBottom: "1rem", fontSize: "1.25rem" }} className="sub-title">
              CREATIVE SERVICES
            </h6>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold" }} className="title">
              Your Partner In <span>Digital</span> Success
            </h2>
          </div>
          <div className="service-area-row">
            {serviceList.map((data, index) => (
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "1rem", minHeight: "300px" }} className="col-lg-3 col-md-6" key={index}>
                <div style={{ textAlign: "center", padding: "1.5rem", borderRadius: "0.5rem", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }} className="single-service-inner">
                  <div className="thumb">
                    <img src={data.img} alt="img" />
                  </div>
                  <div className="details">
                    <h5>
                      <Link href={`/service/${data.title}`}>{data.title}</Link>
                    </h5>
                    <p>{data.des}</p>
                    <Link 
                      style={{
                        fontWeight: "600",
                        transition: "background-color 0.3s ease"
                      }} 
                      href={`/service/${data.title}`} 
                      className="btn btn-border-base mt-0"
                    >
                      Touch More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5rem" }}>
        <button className="btn btn-border-base">Contact Us</button>
      </div>

      <br />
      <br />
    

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaGroup;