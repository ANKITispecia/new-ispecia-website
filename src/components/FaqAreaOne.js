import React from "react";

const FaqAreaOne = () => {
  return (
    <>
      {/*==================== Faq area start ====================*/}
      <div
        className='faq-area faq-area-margin-top bg-cover pd-top-90 pd-bottom-110'
        style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
      >
        <div className='container'>
          <div className='row pd-top-120'>
            <div
              className='col-xl-5 col-lg-6 col-md-8 order-lg-last'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='about-thumb-inner pt-lg-3'>
                <img
                  className='main-img'
                  src='assets/img/about/4.webp'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-xl-7 col-lg-6'
              data-aos='fade-right'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mb-0 mt-4 mt-lg-0'>
                <h6 className='sub-title'>SOME FAQ'S</h6>
                <h2 className='title'>
                  Creating <span>Digital</span> Masterpieces
                </h2>
                <p className='content'>
                  Get to know more about how we at Ispecia Technologies can help
                  you achieve your business goals with our comprehensive services.
                </p>
              </div>
              <div
                className='accordion accordion-inner style-2 accordion-icon-left mt-3'
                id='accordionExample'
              >
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingOne'>
                    <button
                      className='accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      What services does Ispecia Technologies offer?
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      We provide a range of technology solutions, including software development, IT consulting, digital transformation, cloud computing, cybersecurity, and custom application development. Each service is tailored to meet specific business needs.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingTwo'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      What industries does Ispecia Technologies serve?
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingTwo'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      Our team works across diverse industries, such as finance, healthcare, retail, manufacturing, and logistics. We tailor solutions for each industry’s unique requirements.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      How can Ispecia Technologies assist with digital transformation?
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingThree'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      We help businesses enhance processes to be more efficient, scalable, and adaptive. Through strategy and technology integration, we make sure your business adapts seamlessly to a digital-first approach.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingFour'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFour'
                      aria-expanded='false'
                      aria-controls='collapseFour'
                    >
                      Does Ispecia Technologies offer customized software solutions?
                    </button>
                  </h2>
                  <div
                    id='collapseFour'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingFour'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      Yes, we specialize in customized software solutions to align with your unique needs. From planning to deployment, we ensure each step is tailored to your business goals.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingFive'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFive'
                      aria-expanded='false'
                      aria-controls='collapseFive'
                    >
                      How does Ispecia Technologies ensure security in its solutions?
                    </button>
                  </h2>
                  <div
                    id='collapseFive'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingFive'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      Security is a priority in every project. We apply best practices, such as encryption and secure coding, to ensure your data remains protected.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingSix'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseSix'
                      aria-expanded='false'
                      aria-controls='collapseSix'
                    >
                      What is the average timeline for a project?
                    </button>
                  </h2>
                  <div
                    id='collapseSix'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingSix'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      Project timelines vary based on complexity but generally range from a few weeks to several months. We provide an upfront, transparent estimate for each project.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Faq area end ====================*/}
    </>
  );
};

export default FaqAreaOne;
