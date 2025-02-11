'use client';
import Image from 'next/image';
import React from "react";
import "./aboutimage.css";
import { useMediaQuery } from 'react-responsive';

const AboutAreaOne = () => {
  const isMobile = useMediaQuery({maxWidth: 767})
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1023})
  const isDesktop = useMediaQuery({maxWidth: 1365})

  return (
    <>
      {/* ================== AboutAreaOne start  ==================*/}

      <div className='about-area pd-top-60'>
        <div className='container'>
        <div style={{ textAlign: 'center'}}>
                <h6 className='sub-title' style={{marginBottom: '2rem', marginTop: '2rem', color: '#86c445', fontSize: '2rem' }}>Our Recognition</h6>
        </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div
                className='about-thumb-inner pe-xl-5 me-xl-5'
                data-aos='fade-right'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <Image
                  className='animate-img-1 top_image_bounce image'
                  src='/assets/img/about/2.png'
                  alt='image 1'
                  width={100}
                  height={100}
                  style={{ position: 'absolute', left: '100px', bottom: '7px', zIndex: 2 }}
                />
                <Image
                  className='animate-img-2 left_image_bounce image'
                  src='/assets/img/about/3.png'
                  alt='image 2'
                  width={100}
                  height={100}
                  style={{ position: 'absolute', right: '50px', top: '180px', zIndex: 2 }}
                />
                <Image
                  className='animate-img-3 top_image_bounce image'
                  src='/assets/img/banner/5.svg'
                  alt='image 3'
                  width={100}
                  height={100}
                  style={{ position: 'absolute', left: '80px', top: '-20px' }}
                />
                <Image
                  className='main-img image'
                  src='/assets/img/about/1.jpg'
                  alt='main image'
                  width={525}
                  height={425}
                  style={{ position: 'relative', zIndex: 1, borderRadius: '10px', marginTop:'20%'}}
                  priority
                />
              </div>
            </div>
            <div
              className='col-lg-6 '
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              
              <div className='section-title mt-120 mt-lg-10 w-[65%]'>
               <div>
                <h2 className='title' style={{textAlign: isMobile ? 'center' : 'start'}}>
                <span>Ispecia</span> Your Technology partner
                </h2>
                <p className='content mb-4 mb-xl-5'>
                Ispecia Technologies, an Indian-based IT company, emphases providing 360-degree solutions to all sizes of businesses. Its primary objective is to accomplish clients’ businesses in the online realm with innovative and result-oriented solutions. 
                <br/>
                <br/>
                Mobile and website development has become a key player in the modern marketing game. Making this our main motto, we strive to deliver our clients innovative and cost-effective solutions to boost their online presence, achieve business objectives and drive high ROI. We offer unparalleled solutions for all types of industries and clients all across the globe. In addition, we offer cutting-edge digital solutions to technology startups and established brands. Our clients are our priority for us, and we put our best efforts into fulfilling our commitments.
                </p>
                </div>
                </div>
                </div>
                <div className='row' style={{ marginTop: '4rem', textAlign:'center'}}>
                  <div className='col-md-4'>
                    <div className='single-about-inner'>
                      <div className='thumb mb-3'>
                        <Image
                          src='/assets/img/icon/2.png'
                          alt='icon 1'
                          width={40}
                          height={40}
                          style={{ transition: '0.4s' }}
                        />
                      </div>
                      <div className='details'>
                        <h5>Experienced team</h5>
                        <p>
                        Our team comprises an innovative
                        and committed workforce to design
                        websites and effectively develop
                        mobile apps and digital marketers.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className='col-md-4'>
                    <div className='single-about-inner'>
                      <div className='thumb mb-3'>
                        <Image
                          src='/assets/img/icon/3.png'
                          alt='icon 2'
                          width={40}
                          height={40}
                          style={{ transition: '0.4s' }}
                         
                        />
                      </div>
                      <div className='details'>
                        <h5>Proven results</h5>
                        <p>
                        We combine traditional with current marketing methods to enhance your business, providing flawless execution.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-4'>
                    <div className='single-about-inner'>
                      <div className='thumb mb-3'>
                        <Image
                          src='/assets/img/icon/4.png'
                          alt='icon 2'
                          width={40}
                          height={40}
                          style={{ transition: '0.4s'}}
                          
                        />
                      </div>
                      <div className='details'>
                        <h5>24X7 Support</h5>
                        <p>
                        Our clients are a part of our team. So, we strive to resolve issues at any time of the day.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  
                </div>
              
            
          </div>
        </div>
      </div>

      {/* ================== AboutAreaOne End  ==================*/}

    </>
  );
};

export default AboutAreaOne;
