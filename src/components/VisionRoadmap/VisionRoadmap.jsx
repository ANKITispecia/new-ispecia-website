'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './VisionRoadmap.css';

const VisionRoadmap = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Existing header timeline animation
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.content-header',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    headerTl
      .fromTo('.vision-title', {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
      })
      .fromTo('.vision-subtitle', {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.4');

    // Existing roadmap items timeline
    const roadmapTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.roadmap-container',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });

    roadmapTl
      .fromTo('.roadmap-item', {
        x: -50,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power2.out'
      })
      .fromTo('.year-circle', {
        scale: 0,
        opacity: 0
      }, {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.8');

    // Wave animations
    const waves = document.querySelectorAll('.wave-circle');
    waves.forEach(wave => {
      gsap.to(wave, {
        scale: 1.5,
        opacity: 0,
        duration: 1,
        repeat: -1,
        ease: 'power1.inOut',
        repeatDelay: 0
      });
    });

    // Existing timeline line animation
    gsap.fromTo('.timeline-line', 
      {
        scaleY: 0,
        transformOrigin: 'top'
      },
      {
        scaleY: 1,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-line',
          start: 'top 70%',
          end: 'bottom 70%',
          scrub: 0.5
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="vision-container">
      <div className="content-wrapper">
        <div className="content-header">
          <h1 className="vision-title">Our Vision</h1>
          <p className="vision-subtitle">
            In the continuation of the<br />
            path of Bitix
          </p>
        </div>
        
        <div className="roadmap-container">
          <div className="timeline-line"></div>
          <div className="roadmap-items">
            <div className="roadmap-item">
              <div className="item-content">
                <div className="item-card">
                  <div>• Blockchain Lab</div>
                  <div>• Unholy token market</div>
                </div>
                <div className="year-container">
                  <div className="year-circle">
                    <div className="wave-circle"></div>
                    <div className="wave-circle" style={{ animationDelay: '0.5s' }}></div>
                    <div className="year">2022</div>
                  </div>
                  <div className="connector"></div>
                </div>
              </div>
            </div>
            
            <div className="roadmap-item">
              <div className="item-content">
                <div className="item-card">
                  <div>• Dedicated wallet</div>
                  <div>• Blockchain smart network</div>
                </div>
                <div className="year-container">
                  <div className="year-circle">
                    <div className="wave-circle"></div>
                    <div className="wave-circle" style={{ animationDelay: '0.5s' }}></div>
                    <div className="year">2023</div>
                  </div>
                  <div className="connector"></div>
                </div>
              </div>
            </div>
            
            <div className="roadmap-item">
              <div className="item-content">
                <div className="item-card">
                  <div>• Dedicated coin</div>
                  <div>• Decentralized exchange</div>
                </div>
                <div className="year-container">
                  <div className="year-circle">
                    <div className="wave-circle"></div>
                    <div className="wave-circle" style={{ animationDelay: '0.5s' }}></div>
                    <div className="year">2024</div>
                  </div>
                  <div className="connector"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionRoadmap;