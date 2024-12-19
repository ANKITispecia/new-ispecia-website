import React from 'react';

const WorkProcessFour = () => {
  return (
    <>
      {/*==================== Work Process Three start ====================*/}
      <div
        className="work-process-area bg-position-right pd-top-30 pd-bottom-90"
        style={{ backgroundImage: 'url("./assets/img/bg/16.png")' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center pb-5">
                <h6 className="sub-title-sky-blue">WORK PROCESS</h6>
                <h2 className="title">
                  Empowering Your Business Through Innovative Solutions
                </h2>
              </div>
            </div>
          </div>
          <div className="work-process-area-inner-2">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-work-process-inner style-2 text-center">
                  <div className="thumb mb-3">
                    <img src="assets/img/icon/36.svg" alt="Assessment" />
                  </div>
                  <div className="details">
                    <h5 className="mb-3">Comprehensive Assessment</h5>
                    <p className="content">
                      We conduct a thorough analysis of your business needs and goals, identifying key areas where technology can enhance performance and drive growth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-work-process-inner style-2 text-center">
                  <div className="thumb mb-3">
                    <img src="assets/img/icon/37.svg" alt="Implementation Planning" />
                  </div>
                  <div className="details">
                    <h5 className="mb-3">Strategic Implementation Planning</h5>
                    <p className="content">
                      Based on the assessment, we develop a clear, actionable implementation plan tailored to your unique business objectives.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-work-process-inner style-2 text-center">
                  <div className="thumb mb-3">
                    <img src="assets/img/icon/38.svg" alt="Capabilities" />
                  </div>
                  <div className="details">
                    <h5 className="mb-3">Building Capabilities</h5>
                    <p className="content">
                      Our team works on enhancing your technical capabilities, whether through software development, systems integration, or digital transformation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-work-process-inner style-2 text-center">
                  <div className="thumb mb-3">
                    <img src="assets/img/icon/39.svg" alt="Innovation" />
                  </div>
                  <div className="details">
                    <h5 className="mb-3">Continuous Innovation</h5>
                    <p className="content">
                      We stay ahead of the curve by continuously innovating, ensuring your business leverages the latest technological advancements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== Work Process Three end ====================*/}
    </>
  );
};

export default WorkProcessFour;
