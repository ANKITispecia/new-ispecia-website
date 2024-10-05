import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaPlus } from "react-icons/fa";

const AboutAreaTwo = () => {
  return (
    <>
      {/* =============== About Area Two Start =============== */}
      <div className='about-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
            {/* Left Side: Image */}
            <div
              className='col-lg-6 align-self-center'
              data-aos='fade-right'
              data-aos-delay='200'
              data-aos-duration='1500'
            >
              <div className='about-thumb-inner'>
                
                <img
                  className='main-img mt-4'
                  src='/assets/img/about/image.png'
                  alt='Secondary image'
                  style={{ width: '70%', height: '90%' }}
                />
              </div>
            </div>

            {/* Right Side: Text */}
            <div
              className='col-lg-6'
              data-aos='fade-left'
              data-aos-delay='200'
              data-aos-duration='1500'
            >
              <div className='section-title mb-0'>
                <h6 className='sub-title'>Our Recognition</h6>
                <h2 className='title'>Ispecia Your Technology Partner</h2>
                <p className='content mb-4'>
                  Ispecia Technologies, an Indian-based IT company, focuses on providing 360-degree solutions to businesses of all sizes. Its primary objective is to help clients establish their online presence with innovative and result-driven solutions.
                  <br /><br />
                  We offer unparalleled solutions for various industries, clients worldwide, and startups. Our team is committed to delivering cost-effective solutions that enhance your online presence and drive high ROI.
                </p>
                
                <Link className='btn btn-border-base' href='/about'>
                  Discover More <FaPlus />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== About Area Two End =============== */}
    </>
  );
};

export default AboutAreaTwo;
