'use client';
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

const TestimonialTen = () => {
  const settings = {
    dots: true, // Enable dots for better navigation on small screens
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
        breakpoint: 768, // For small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Disable arrows on small devices for cleaner UI
          swipe: true, // Ensure swipe is enabled
        },
      },
    ],
  };

  return (
    <>
      {/* Testimonial area start */}
      <div
        className="testimonial-area_9 bg-cover bg-center pt-24 pb-24" // Tailwind for padding and background
        style={{ backgroundImage: 'url("./assets/img/bg/11.png")' }}
      >
        <div className="container mx-auto">
          <div className="section-title text-center mb-8">
            <h6 className="sub-title">TESTIMONIAL</h6>
            <h2 className="title">Client Testimonials</h2>
          </div>
          <div className="testimonial-slider-1 owl-carousel slider-control-round slider-control-dots slider-control-right-top">
            <Slider {...settings}>
              {/* Embed videos from the public folder */}
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  className="item flex justify-center items-center mx-10 w-3/4" // Tailwind for centering
                  key={index}

                  style={{
                    transform: `translateY(${index % 2 === 0 ? '-20px' : '20px'})`,
                     // Adjust the width as needed
                  }}
                >
                  <video width="65%" height="415" controls>
                    <source src={`/videos/video${index + 1}.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* Testimonial area end */}
    </>
  );
};

export default TestimonialTen;
