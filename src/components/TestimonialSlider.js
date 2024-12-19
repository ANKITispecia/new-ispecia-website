'use client';
import React, { useState } from "react";
import "./TestimonialSlider.css";


const testimonials = [
  {
    id: 1,
    name: "GianLuca Alberani",
    position: "Azura Florida Aquatics, USA",
    youtubeLink: "https://www.youtube.com/embed/rXoswaC7BlU?si=ntvZ1ZpG_S2M2wOE",
    image: "/assets/img/Testimonials/Client1.png",
    quote:
      "For over 3 years, we have partnered with Ispecia Technologies for our MVP Launch project. The project was delivered in less than a year with all the security and quality standards. Just after a few months of downloads, we garnered thousands of downloads on the different mobile app marketplaces. It has been an outstanding experience working with The NineHertz. The seamless communication and collaboration bestowed by the company have helped us manage the process and provide our contribution wherever required. The professionalism and high-quality service by The NineHertz is something that we find rarely. We would like to work with the firm again and refer their service to anyone looking for mobile app development.",
  },
  {
    id: 2,
    name: "Colin Turvill",
    position: "Director Concise Energy, UK",
    youtubeLink: "https://www.youtube.com/embed/wkMwLAAkYpg?si=vkF6aIPh8P0EyXsd", 
    image: "/assets/img/Testimonials/Client2.png",
    quote:
      "I have partnered with Ispecia Technologies for my app development project. While I had very little experience in getting software developed, their guidance and transparent advice have helped to get a mobile app exactly syncing with my vision. The communication was always seamless and the project always was on track. The app was delivered on time. The sales, development, and testing departments of the company were highly responsive and attended to every feedback that I provided. I am excited to work with them again on version 2.0 of my application.",
  },
  {
    id: 3,
    name: "Tony Cheyne",
    position: "Founder NZ Food Trailers, New Zealand",
    youtubeLink: "https://www.youtube.com/embed/L_zUCF875EY?si=LOfumWCPWBjUaWOg",
    image: "/assets/img/Testimonials/Client3.png",
    quote:
      "The commitment shown by the app development team at Ispecia Technologies was truly outstanding. The graphic designer was able to understand my thoughts on the design and bring them onto the screen. After the launch of my application, the user interface and design were highly appreciated by stakeholders. The various suggestions provided by the team even transfigured the app quality and helped me make better decisions. The key milestones were achieved on time. I would like to recommend The NineHertz to businesses looking for the best custom mobile app development services.",
  },
  {
    id: 4,
    name: "Timothee Bannerman",
    position: "Director Bannerman's Dinning Ltd. , UK",
    youtubeLink: "https://www.youtube.com/embed/pWjkGfJsjKA?si=Fq_SPnqlU-hGa1j6",
    image: "/assets/img/Testimonials/Client4.png",
    quote:
      "For over 3 years, we have partnered with Ispecia Technologies for our MVP Launch project. The project was delivered in less than a year with all the security and quality standards. Just after a few months of downloads, we garnered thousands of downloads on the different mobile app marketplaces. It has been an outstanding experience working with The NineHertz. The seamless communication and collaboration bestowed by the company have helped us manage the process and provide our contribution wherever required. The professionalism and high-quality service by The NineHertz is something that we find rarely. We would like to work with the firm again and refer their service to anyone looking for mobile app development.",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonial-container">
      <h2 className="title">Our Client <span style={{color:"#86c445"}}>Testimonials</span></h2>
      <p className="subtitle" style={{maxWidth:"50%", display:"block", margin:"0 auto"}}>
      Ispecia Technologies follows certain quality standards that help provide mobile and web apps development services meeting the client’s expectation. Our strategy has helped us achieve customer satisfaction and a great client retention rate.
      </p>
      <div className="testimonial-slide">
        <div className="left-section">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="client-image"
          />
          <a
            href={testimonials[currentIndex].youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="play-button"
          >
            ▶
          </a>
        </div>
        <div className="right-section" style={{marginTop:"1rem"}}>
          <p className="quote"><strong className="quote-icon">❝</strong>{testimonials[currentIndex].quote} </p>
          <h3 className="client-name">{testimonials[currentIndex].name}</h3>
          <p className="client-position">
            {testimonials[currentIndex].position}
          </p>
        </div>
        <button className="arrow-button left" onClick={handlePrev}>
          &lt;
        </button>
        <button className="arrow-button right" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
