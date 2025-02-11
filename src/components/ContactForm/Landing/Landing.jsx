import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Landing.css';

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const changingWordRef = useRef(null);
  const numberRefs = useRef([]);
  const containerRef = useRef(null);
  
  const words = [ 'Namaste', 'Hello', 'Salve'];

  useEffect(() => {
    // Word changing animation
    const wordsTl = gsap.timeline({ repeat: -1 });

    words.forEach(word => {
      wordsTl.to(changingWordRef.current, {
        duration: 0.5,
        opacity: 0,
        y: -20,
        onComplete: () => {
          changingWordRef.current.textContent = word;
        }
      })
      .to(changingWordRef.current, {
        duration: 0.5,
        opacity: 1,
        y: 0
      })
      .to(changingWordRef.current, {
        duration: 2,
        opacity: 1
      }); 
    });

   
    const numbers = [
      { ref: numberRefs.current[0], end: 9.98, decimals: 2 },
      { ref: numberRefs.current[1], end: 30, suffix: 'k', decimals: 0 },
      { ref: numberRefs.current[2], end: 96, suffix: '%', decimals: 0 },
      { ref: numberRefs.current[3], end: 10, suffix: '+', decimals: 0 }
    ];

    numbers.forEach((number) => {
      if (!number.ref) return; 
      gsap.fromTo(
        number.ref,
        { innerText: 0 }, 
        {
          duration: 2,
          innerText: number.end, 
          ease: "power1.out",
          snap: { innerText: 1 }, 
          onUpdate: function () {
            const value = parseFloat(this.targets()[0].innerText);
            number.ref.textContent = value.toFixed(number.decimals) + (number.suffix || '');
          },
          scrollTrigger: {
            trigger: number.ref,
            start: "top center",
            once: true 
          }
        }
      );
    });

    return () => {
      wordsTl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="spa-container" ref={containerRef}>
      <div className="content-wrapper">
        <div className="header-section">
          <h1 className="main-title">
            Say <span ref={changingWordRef} className="changing-word">salve</span> <span className="emoji">☺</span>
          </h1>
          <p className="description">
            Lorem ipsum is simply dummy text the printing and typesetting 
            industry. Lorem ipsum has been the standard dummy text ever 
            since the when an unknown printer took galley.
          </p>
        </div>

        <div className="stats-section">
          <div className="stat-item">
            <span className="stat-number" ref={el => numberRefs.current[0] = el}>0</span>
            <span className="stat-label">Google reviews</span>
          </div>
          <div className="stat-item">
            <span className="stat-number" ref={el => numberRefs.current[1] = el}>0</span>
            <span className="stat-label">Instagram followers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number" ref={el => numberRefs.current[2] = el}>0</span>
            <span className="stat-label">Repeat customers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number" ref={el => numberRefs.current[3] = el}>0</span>
            <span className="stat-label">Years of experience</span>
          </div>
        </div>

        <div className="bottom-section">
          <h2 className="secondary-title">Crafting innovative, high-performance websites that drive success!</h2>
          <button className="book-button">
            <span className="default-text">BOOK AN APPOINTMENT →</span>
            <span className="hover-text">CLICK PLEASE →</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
