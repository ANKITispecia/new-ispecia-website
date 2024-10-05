'use client';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  width: 80vw;
  height: 70vh;
  overflow-y: scroll;
  position: relative;
  margin: auto;
  border: 5px solid #80ce2d;
  display: flex;
  flex-direction: row;
  gap-0;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 1%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  scrollbar-width: thin;
  scrollbar-color: #80ce2d transparent;
  scrollbar-border-radius: 2px;

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
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60vh;
  box-sizing: border-box;
  padding-top: 0;

  /* Make section responsive */
  @media (max-width: 1024px) {
    flex-direction: column-reverse; /* Text below image on small screens */
    height: auto;
  }
`;

const TextBlock = styled.div`
  width: 35%;
  background:transparent;
  color: white;
  padding: 2rem;
  border-radius: 10px;
  margin-right: 0;
  margin-top: 10px;

  /* Full width on smaller screens */
  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const ImageWrapper = styled.div`
  width: 60%;
  overflow: hidden;
  display: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-right: 0px;
  margin-left: 1rem;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 10px;
  border-top: none;
  border-bottom: none;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  overflow: hidden;

  /* Full width on smaller screens */
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
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      const imageWrapper = section.querySelector('.image-wrapper img');

      if (section) {
        // GSAP animation for image parallax effect
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
            },
          }
        );
      }
    });

    window.addEventListener('resize', ScrollTrigger.refresh);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener('resize', ScrollTrigger.refresh);
    };
  }, []);

  return (
    <Container>
      <SectionWrapper>
        {[0, 1, 2, 3, 4].map((i) => (
          <Section ref={(el) => (sectionsRef.current[i] = el)} key={i}>
            <TextBlock className="text-block">
              <h4 className='text-white'>{`Heading ${i + 1}`}</h4>
              <p className='text-white'>{`This is the description for section ${i + 1}.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
                  adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  
              `}</p>
              <Button href="#">Learn More</Button>
            </TextBlock>
            <ImageWrapper className="image-wrapper">
              <Image
                src={`/assets/img/p${i + 1}.webp`}
                alt={`Image ${i + 1}`}
                objectFit="cover"
                width={750}
                height={403}
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
