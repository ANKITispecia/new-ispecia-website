'use client'
import React from 'react';
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

// Custom Previous Arrow
function NextArrow(props) {
  const { className, onClick } = props;
  return <FaAngleRight className={className} onClick={onClick} />;
}
function PrevArrow(props) {
  const { className, onClick } = props;
  return <FaAngleLeft className={className} onClick={onClick} />;
}
const TestimonialNine = () => {
  const settings = {
    dots: true,  // Enable dots for better navigation on small screens
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true, // Enable swipe gestures
    initialSlide: 0,
    nextArrow: <NextArrow />, // Use custom Next arrow
    prevArrow: <PrevArrow />, // Use custom Prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,  // For small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,  // Disable arrows on small devices for cleaner UI
          swipe: true,  // Ensure swipe is enabled
        },
      },
    ],
  };

  return (
    <>
      {/* testimonial-area start */}
      <div
        className="testimonial-area testimonial-area_9 pd-top-90"
        style={{ backgroundImage: 'url("./assets/img/bg/11.png")' }}
      >
        <div className="container">
          <div className="section-title">
            <h6 className="sub-title">TESTIMONIAL</h6>
            <h2 className="title">Client Testimonials</h2>
          </div>
          <div className="testimonial-slider-1 owl-carousel slider-control-round slider-control-dots slider-control-right-top">
            <Slider {...settings}>
              {/* Embed YouTube videos with staggered positioning */}
              <div className="item staggered" style={{ transform: 'translateY(-20px)' }}>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/9s4Kye-bJcE"
                  title="YouTube video player"
                  frameBorder="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="item staggered" style={{ transform: 'translateY(20px)' }}>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/O98OiqSnzt8"
                  title="YouTube video player"
                  frameBorder="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="item staggered" style={{ transform: 'translateY(-20px)' }}>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/L_zUCF875EY"
                  title="YouTube video player"
                  frameBorder="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="item staggered" style={{ transform: 'translateY(20px)' }}>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/HP9bEm2q_rU"
                  title="YouTube video player"
                  frameBorder="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Add more items as needed */}
            </Slider>
          </div>
        </div>
      </div>
      {/* testimonial-area end */}
    </>
  );
};

export default TestimonialNine;
