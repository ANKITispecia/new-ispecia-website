import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
const AboutAreaThree = () => {
  return (
    <>
      {/* =============== About Area Three End ===============*/}
      <div className='about-area pd-top-120'>
        <div className='container'>
          <div className='row'>
            
            <div
              className='wow animated fadeInRight'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mb-0'>
                <h6 className='sub-title'>ABOUT US</h6>
                <h2 className='title'>
                  Advancing <span>Beyond</span> Your Expectations
                </h2>
                <p className='content mb-4'>
                  You can access SaaS applications through a web browser or
                  mobile app, as long as you have an internet connection.
                </p>
                <div className='row'>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> Mistakes To Avoid to the dum
                      </li>
                      <li>
                        <FaCheckCircle /> Your Startup industry stan
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> Mistakes To Avoid to the dum
                      </li>
                      <li>
                        <FaCheckCircle /> Your Startup industry stan
                      </li>
                    </ul>
                  </div>
                </div>
                <p className='content'>
                  SaaS providers typically invest heavily in security measures
                  to protect customer data, such as encryption and multi-factor
                  authentication. However, it is important to research and
                  choose a reputable provider and also to ensure that
                </p>
                <Link className='btn btn-border-base' href='/about' style={{marginBottom: '20px'}}>
                  Discover More <FaPlus />
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* =============== About Area Three End ===============*/}
    </>
  );
};

export default AboutAreaThree;
