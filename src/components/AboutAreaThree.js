import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaPlus } from "react-icons/fa";

const AboutAreaThree = () => {
  return (
    <>
      {/* =============== About Area Three Start =============== */}
      <div className="about-area pd-top-120" style={{justifyContent:"center", textAlign:"center", wordWrap:"break-word"}}>
        <div className="container">
          <div className="row">
            <div
              className="wow animated fadeInRight"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0" style={{justifyContent:"center"}}>
                <h6 className="sub-title" style={{justifyContent:"center"}}>JOIN OUR TEAM</h6>
                <h2 className="title" style={{justifyContent:"center"}}>
                  Why Work at <span>Ispecia Technologies</span>
                </h2>
                <p className="content mb-4">
                  At <strong>Ispecia Technologies</strong>, we are constantly pushing the boundaries of innovation and striving for excellence. Our goal is to build a team that shares our passion for <br/>technology, creativity, and solving real-world challenges. We offer an environment where you can thrive, collaborate, and make a significant impact.
                  <br />
                  <br />
                  Whether you're a seasoned professional or just starting your career journey, we believe that everyone at Ispecia has a voice and a role in shaping the future of technology. We value <strong>diversity</strong>, <strong>collaboration</strong>, and <strong>continuous growth</strong>, and we provide all the tools and support you need to succeed.
                  <br />
                  <br />
                  If you're looking for a place to grow your career, contribute to meaningful projects, and be part of a dynamic team, Ispecia Technologies is the perfect place for you.
                </p>

                <h3>Why Choose Ispecia?</h3>


                <div className="" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="col-md-6">
                      <ul className="single-list-inner style-check style-heading style-check mb-3" >
                        <li>
                          <FaCheckCircle /> Work with cutting-edge technology
                        </li>
                        <li>
                          <FaCheckCircle /> Be part of a dynamic, collaborative team
                        </li>
                        <li>
                          <FaCheckCircle /> Competitive compensation and benefits
                        </li>
                        <li>
                          <FaCheckCircle /> A culture of diversity, creativity, and innovation
                        </li>
                        <li>
                          <FaCheckCircle /> Opportunities for career growth and skill development
                        </li>
                      </ul>
                    </div>
                    
                    <div className="col-md-6">
                      <ul className="single-list-inner style-check style-heading style-check mb-3">
                        <li>
                          <FaCheckCircle /> <strong>Collaboration</strong>: Working together as a team to achieve shared goals.
                        </li>
                        <li>
                          <FaCheckCircle /> <strong>Excellence</strong>: We strive for excellence in every project we undertake.
                        </li>
                        <li>
                          <FaCheckCircle /> <strong>Integrity</strong>: We maintain transparency, honesty, and trust in everything we                   do.
                        </li>
                        <li>
                          <FaCheckCircle /> <strong>Innovation</strong>: We believe in using the latest technologies to solve                   tomorrow's problems.
                        </li>
                      </ul>
                    </div>
                  </div>

                
                <h3>How to Apply</h3>
                <p>
                  <strong>
                  Browse our current job openings, submit your resume, and become part of our growing team.
                  </strong>
                </p>

                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== About Area Three End =============== */}
    </>
  );
};

export default AboutAreaThree;
