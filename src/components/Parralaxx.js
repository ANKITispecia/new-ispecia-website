'use client';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap'; // Import gsap for better tree-shaking
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import only ScrollTrigger
import Image from 'next/image';
import data from './Parralax.json'

gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
  @media (max-width: 750px) {
    flex-direction: column-reverse;
  }
`;

const Container = styled.div`
  width: 80vw;
  height: 60vh;
  overflow-y: scroll;
  position: relative;
  display: flex;
  flex-direction: row;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 1%;

  scrollbar-width: thin;
  scrollbar-color: #80ce2d transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #80ce2d;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  @media (max-width: 750px) {
    height: 37vh;
    width: 90vw;
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
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    height: auto; /* Fix height to auto for proper responsiveness */
  }

  &:last-child {
    margin-bottom: 100px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  overflow: visible;
  position: relative;
  border-radius: 3%;
  margin:2%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3%;
  }

  @media (max-width: 1024px) {
    margin-left: 0;
  }
  &:first-child {
    margin-top: 50px;
  }
`;

const FloatingTextBlock = styled.div`
  position: relative;
  margin-left: 1rem;
  background: #000;
  color: white;
  padding: 2rem;
  border-radius: 10px;
  width: 30%;
  z-index: 0;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease;

  h4 {
    color: #80ce2d;
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
    margin-top: 2rem;
  }
`;

const ScrollAnimation = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const container = containerRef.current;

    sectionsRef.current.forEach((section, index) => {
      const imageWrapper = section.querySelector('.image-wrapper img');

      if (section) {
        gsap.fromTo(
          imageWrapper,
          { y: 0 },
          {
            y: 0,
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 5,
              scroller: container,
            },
          }
        );

        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          scroller: container,
          onEnter: () => setActiveIndex(index),
          onLeaveBack: () => setActiveIndex(index - 1),
          snap: 1 / (sectionsRef.current.length - 1),
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Wrapper>
      <Container ref={containerRef}>
        <SectionWrapper>
          {[0, 1, 2, 3, 4].map((i) => (
            <Section ref={(el) => (sectionsRef.current[i] = el)} key={i}>
              <ImageWrapper className="image-wrapper">
                <Image
                  src={`/assets/img/p${i + 1}.webp`}
                  alt={`Image ${i + 1}`}
                  // Use layout responsive for better performance
                  width={890}
                  height={480}
                  style={{
                    objectFit: 'cover',  // Use CSS styles instead of 'objectFit'
                    borderRadius:'1%'
                  }}
                   // Prioritize loading for critical images
                  className='img-fluid pt-4 mt-4 mb-4 pb-4'
                />
              </ImageWrapper>
              <br/>
            </Section>
            
          ))}
          <br/>
        </SectionWrapper>
      </Container>

      {activeIndex !== null && (
        <FloatingTextBlock active={activeIndex !== null}>
          <h4>{data[activeIndex].heading}</h4>
          <p>{data[activeIndex].description}</p>
          <button href="#" className="btn btn-primary">Learn More</button>
        </FloatingTextBlock>
      )}
    </Wrapper>
  );
};

export default ScrollAnimation;
