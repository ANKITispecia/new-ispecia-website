'use client';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  width: 80vw;
  height: 60vh;
  overflow-y: scroll;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: row;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 1%;
  

  scrollbar-width: thin;
  scrollbar-color: #80ce2d transparent;

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #80ce2d; /* Scrollbar color */
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60vh;
  box-sizing: border-box;
  padding-top: 0;
  width: 100%;
  
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    height: auto;
  }

  /* Add extra space after the last image */
  &:last-child {
    margin-bottom: 100px; /* Space after the last section */
  }
`;

const TextBlock = styled.div`
  width: 35%;
  background: transparent;
  color: white;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 10px;
  opacity: 0; /* Start with hidden text */
  transition: opacity 0.5s ease; /* Smooth transition for opacity */

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const ImageWrapper = styled.div`
  width: 60%;
  overflow: hidden;
  position: relative;
  margin-left: 1rem;
  border-radius: 10px;
  overflow: hidden;

  /* Removed border from images */
  border-left: none;
  border-right: none;

  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Button = styled.a`
  background-color: #0070f3;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px;
  &:hover {
    background-color: #005bb5;
  }
`;

const ScrollAnimation = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const textBlocksRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;

    sectionsRef.current.forEach((section, index) => {
      const imageWrapper = section.querySelector('.image-wrapper img');
      const textBlock = textBlocksRef.current[index];

      if (section && textBlock) {
        // GSAP parallax effect for the image
        gsap.fromTo(
          imageWrapper,
          { y: 50 },
          {
            y: -50,
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              scroller: container, // Track the scroll of the container, not the window
            },
          }
        );

        // Create a GSAP timeline for the fade-in/fade-out effect of the text block
        const fadeTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            scroller: container, // Track the scroll of the container
            onEnter: () => gsap.to(textBlock, { opacity: 1, duration: 0.5 }),  // Fade in when entering
            onLeaveBack: () => gsap.to(textBlock, { opacity: 0, duration: 0.5 }),  // Fade out when leaving
            onLeave: () => gsap.to(textBlock, { opacity: 0, duration: 0.5 }),  // Fade out when leaving
            onEnterBack: () => gsap.to(textBlock, { opacity: 1, duration: 0.5 }),  // Fade in when re-entering
          },
        });

        // Attach timeline to the ScrollTrigger
        ScrollTrigger.create({
          animation: fadeTimeline,
          trigger: section,
          scroller: container, // Ensure ScrollTrigger is using the container's scroll
        });
      }
    });

    // Refresh ScrollTrigger on resize
    window.addEventListener('resize', ScrollTrigger.refresh);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener('resize', ScrollTrigger.refresh);
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <SectionWrapper>
        {[0, 1, 2, 3, 4].map((i) => (
          <Section ref={(el) => (sectionsRef.current[i] = el)} key={i}>
            <TextBlock ref={(el) => (textBlocksRef.current[i] = el)} className="text-block">
              <h4 style={{ color: '#0070f3' }}>{`Heading ${i + 1}`}</h4>
              <p style={{ color: 'white' }}>{`This is the description for section ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum.`}</p>
              <Button href="#">Learn More</Button>
            </TextBlock>
            <ImageWrapper className="image-wrapper">
              <Image
                src={`/assets/img/p${i + 1}.webp`}
                alt={`Image ${i + 1}`}
                objectFit="cover"
                width={920}
                height={493.6}
                objectPosition="top"
              />
            </ImageWrapper>
          </Section>
        ))}
      </SectionWrapper>
      
    </Container>
  );
};

export default ScrollAnimation;
