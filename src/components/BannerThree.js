'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';

const BannerThree = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ================== BannerThree Start ==================*/}
      <div
        className="banner-area bg-relative banner-area-2 bg-cover"
        style={{ backgroundImage: 'url("./assets/img/banner-3/5.png")' }}
      >
        <img className="bg-img-2" src="assets/img/banner-3/4.png" alt="img" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center"  style={{width:'50vw'}}>
              <div className="banner-inner pe-xl-5">
                <h6
                  className="subtitle "
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1500"
                >
                  DESIGNING FOR THE FUTURE
                </h6>
                <h2
                  className="title"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                   <span>Ispecia </span> Your No1 Technology Partner
                </h2>
                <p
                  className="content pe-xl-5"
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-duration="1500"
                >
                  We assist in improving your website traffic with proven SEO techniques.
                  <br/>
                  Retain Your Digital Presence With Our SEO Agency.
                  <br/>
                  We Will Get Your Business Soar To Height.
                </p>
                <Link
                  className="btn btn-border-base "
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                  href="/about"
                >
                  Discover More <FaPlus />
                </Link>
                <div
                  className="d-inline-block align-self-center wow animated fadeInLeft mt-4 mt-md-0"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                >
                  

                
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10" style={{width:'40vw'}}>
              <div
                className="banner-thumb-3"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="1500"
              >
                <div className="main-img-wrap">
                  
                  <Image
                    className="banner-animate-img banner-animate-img-1 left_image_bounce"
                    src="/assets/img/reat.png"
                    alt="img"
                    width={120}
                    height={120}
                    style={{ position: 'absolute', left: '-40px', zIndex: 1 }}
                  />

                  
                  <Image
                    className="banner-animate-img banner-animate-img-2 left_image_bounce"
                    src="/assets/img/seo.png"
                    alt="img"
                    width={150}
                    height={150}
                    style={{ position: 'absolute', right: '30px', top: '150px', zIndex: 1 }}
                  />

                  
                  <Image
                    className="main-img"
                    src="/assets/img/unnamed2.png"
                    alt="Main banner image"
                    width={500}  
                    height={500}  
                    style={{ position: 'relative', zIndex: 0 }} 
                  />
                </div>


                {/* <div className="main-img-wrap">
                  <img
                    className="banner-animate-img banner-animate-img-1 left_image_bounce"
                    src="assets/img/banner-3/2.svg"
                    alt="img"
                  />
                  <img
                    className="banner-animate-img banner-animate-img-2 left_image_bounce"
                    src="assets/img/banner-3/3.svg"
                    alt="img"
                  />
                  <img
                    className="main-img"
                    src="assets/img/banner/3.png"
                    alt="img"
                    
                  />
                </div> */}
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerThree End ==================*/}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="XM6kTQPzzpQ"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default BannerThree;
