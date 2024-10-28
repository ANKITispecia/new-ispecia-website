'use client';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const NextArrow = (props) => <FaAngleRight className={props.className} onClick={props.onClick} />;
const PrevArrow = (props) => <FaAngleLeft className={props.className} onClick={props.onClick} />;

const TestimonialNine = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          swipe: true,
        },
      },
    ],
  };

  return (
    <div className="testimonial-area testimonial-area_9 pd-top-90" style={{ backgroundImage: 'url("./assets/img/bg/11.png")' }}>
      <div className="container">
        <div className="section-title">
          <h6 className="sub-title">TESTIMONIAL</h6>
          <h2 className="title">Client Testimonials</h2>
        </div>
        <div className="testimonial-slider-1 owl-carousel slider-control-round slider-control-dots slider-control-right-top">
          <Slider {...settings}>
            {[
              "https://www.youtube.com/embed/rXoswaC7BlU?si=ntvZ1ZpG_S2M2wOE",
              "https://www.youtube.com/embed/wkMwLAAkYpg?si=vkF6aIPh8P0EyXsd",
              "https://www.youtube.com/embed/L_zUCF875EY?si=LOfumWCPWBjUaWOg",
              "https://www.youtube.com/embed/pWjkGfJsjKA?si=Fq_SPnqlU-hGa1j6"
            ].map((src, index) => (
              <div className="item staggered" key={index} style={{ transform: index % 2 === 0 ? 'translateY(-20px)' : 'translateY(20px)' }}>
                <iframe
                  width="90%"
                  height="450"
                  src={src}
                  title="YouTube video player"
                  frameBorder="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: '2px solid #ccc', borderRadius: '15px' }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialNine;
