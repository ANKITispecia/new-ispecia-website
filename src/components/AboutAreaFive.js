import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const AboutAreaFive = () => {
  return (
    <>
      {/* =============== About Area Five End ===============*/}
      <div className="about-area about-area_5 pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner">
                
                <img
                  className="main-img"
                  src="assets/img/about/20.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0 ps-xl-5">
                <h6 className="sub-title-sky-blue">Why Ispecia Technologies</h6>
                <h2 className="title">
                How does Ispecia Technologies bring value to the table and pave the path for your success?
                </h2>
                <p className="content mb-4">
                At Ispecia Technologies, we don’t just offer IT solutions—we create strategic partnerships that drive your business forward. We understand that every business is unique, and we tailor our approach to meet your specific needs. With our team of experienced professionals, we prioritize delivering innovative, high-quality, and scalable solutions that guarantee results.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li>
                        <FaCheckCircle className="sky" /> Client-Centric Approach
                      </li>
                      <li>
                        <FaCheckCircle className="sky" /> Innovative Solutions
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li>
                        <FaCheckCircle className="sky" /> Global Expertise
                      </li>
                      <li>
                        <FaCheckCircle className="sky" /> 360-Degree Services
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  className="btn btn-base-color border-radius-5"
                  href="/testimonials"
                >
                  Proven Track Record <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============== About Area Five End ===============*/}
    </>
  );
};

export default AboutAreaFive;
