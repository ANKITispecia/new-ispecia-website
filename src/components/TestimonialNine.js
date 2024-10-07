'use client';
import React, { useEffect, useState } from 'react';
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2, // Display 2 slides
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
          slidesToScroll: 1,
          arrows: false,
          swipe: true,
        },
      },
    ],
  };

  // Prevent rendering until the component has mounted
  if (!isMounted) {
    return null; // Or you can return a loading spinner
  }

  return (
    <>
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
                  width="90%"
                  height="450"
                  src="https://www.youtube.com/embed/9s4Kye-bJcE"
                  title="YouTube video player"
                  frameBorder="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: '2px solid #ccc', borderRadius: '15px' }} // Add border and border-radius here
                />
              </div>
              <div className="item staggered" style={{ transform: 'translateY(20px)' }}>
                <iframe
                  width="90%"
                  height="450"
                  src="https://www.youtube.com/embed/O98OiqSnzt8"
                  title="YouTube video player"
                  frameBorder="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: '2px solid #ccc', borderRadius: '15px' }} // Add border and border-radius here
                />
              </div>
              <div className="item staggered" style={{ transform: 'translateY(-20px)' }}>
                <iframe
                  width="90%"
                  height="450"
                  src="https://www.youtube.com/embed/L_zUCF875EY"
                  title="YouTube video player"
                  frameBorder="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: '2px solid #ccc', borderRadius: '15px' }} // Add border and border-radius here
                />
              </div>
              <div className="item staggered" style={{ transform: 'translateY(20px)' }}>
                <iframe
                  width="90%"
                  height="450"
                  src="https://www.youtube.com/embed/HP9bEm2q_rU"
                  title="YouTube video player"
                  frameBorder="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: '2px solid #ccc', borderRadius: '15px' }} // Add border and border-radius here
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialNine;
