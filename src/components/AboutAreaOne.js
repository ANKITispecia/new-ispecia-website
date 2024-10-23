import Image from 'next/image';
import React from "react";
import "./aboutimage.css";

const AboutAreaOne = () => {
  return (
    <>
      {/* ================== AboutAreaOne start  ==================*/}

      <div className='about-area pd-top-120'>
        <div className='container'>
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
                  width={640}
                  height={425}
                  style={{ position: 'relative', zIndex: 1, borderRadius: '10px' }}
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
              <div className='section-title mt-5 mt-lg-0'>
                <h6 className='sub-title'>ABOUT US</h6>
                <h2 className='title'>
                  It Is A Critical Component Of <span>Modern</span> Businesses
                </h2>
                <p className='content mb-4 mb-xl-5'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Loreaim Ipsum has been the industry's
                  standard dummy
                </p>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='single-about-inner'>
                      <div className='thumb mb-3'>
                        <Image
                          src='/assets/img/icon/2.png'
                          alt='icon 1'
                          width={50}
                          height={50}
                          style={{ transition: '0.4s' }}
                        />
                      </div>
                      <div className='details'>
                        <h5>Our Ambition</h5>
                        <p>
                          Lorem is Ipsum is simply is design iomyi is text Lorem
                          Ipsum is simply is our busi designer is our country.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-about-inner'>
                      <div className='thumb mb-3'>
                        <Image
                          src='/assets/img/icon/3.png'
                          alt='icon 2'
                          width={50}
                          height={50}
                          style={{ transition: '0.4s' }}
                        />
                      </div>
                      <div className='details'>
                        <h5>Our Ambition</h5>
                        <p>
                          Lorem is Ipsum is simply is design iomyi is text Lorem
                          Ipsum is simply is our busi designer is our country.
                        </p>
                      </div>
                    </div>
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
