import dynamic from 'next/dynamic';

// Dynamically imported components
const BannerThree = dynamic(() => import('@/components/BannerThree'));
const AboutAreaOne = dynamic(() => import('@/components/AboutAreaOne'));
const ServiceAreaOne = dynamic(() => import('@/components/ServiceAreaOne'));
const CaseStudyAreaThree = dynamic(() => import('@/components/CaseStudyAreaThree'));
const TestimonialNine = dynamic(() => import('@/components/TestimonialNine'));
const FaqAreaOne = dynamic(() => import('@/components/FaqAreaOne'));
const CounterAreaOne = dynamic(() => import('@/components/CounterAreaOne'));
const ContactAreaOne = dynamic(() => import('@/components/ContactAreaOne'));
const WorkProcessOne = dynamic(() => import('@/components/WorkProcessOne'));
const BlogAreaOne = dynamic(() => import('@/components/BlogAreaOne'));

// Unused imports (kept as-is)
import BannerFour from "@/components/BannerFour";
import BannerOne from "@/components/BannerOne";
import CaseStudyAreaGroupOne from "@/components/CaseStudyAreaGroupOne";
import CaseStudyAreaOne from "@/components/CaseStudyAreaOne";
import CaseStudyAreaTwo from "@/components/CaseStudyAreaTwo";
import FaqAreaThree from "@/components/FaqAreaThree";
import FaqAreaTwo from "@/components/FaqAreaTwo";
import FooterEight from "@/components/FooterEight";
import FooterFive from "@/components/FooterFive";
import FooterFour from "@/components/FooterFour";
import FooterNine from "@/components/FooterNine";
import FooterOne from "@/components/FooterOne";
import FooterSeven from "@/components/FooterSeven";
import FooterSix from "@/components/FooterSix";
import FooterThree from "@/components/FooterThree";
import FooterTwo from "@/components/FooterTwo";
import NavBar from "@/components/NavBar";
import NavbarEight from "@/components/NavbarEight";
import NavbarFive from "@/components/NavbarFive";
import NavbarFour from "@/components/NavbarFour";
import NavbarSeven from "@/components/NavbarSeven";
import NavbarSix from "@/components/NavbarSix";
import NavbarThree from "@/components/NavbarThree";
import NavbarTwo from "@/components/NavbarTwo";
import ParallaxProviderWrapper from "@/components/ParallaxProviderWrapper";
import ScrollAnimation from "@/components/Parralaxx";
import Parralaxx from "@/components/Parralaxx";
import PricingAreaOne from "@/components/PricingAreaOne";
import ServiceAreaTwo from "@/components/ServiceAreaTwo";
import ServiceAreaThree from "@/components/ServiceAreaThree";
import TeamAreaOne from "@/components/TeamAreaOne";
import TestimonialEight from "@/components/TestimonialEight";
import TestimonialFive from "@/components/TestimonialFive";
import TestimonialSeven from "@/components/TestimonialSeven";
import TestimonialSix from "@/components/TestimonialSix";
import TestimonialTen from "@/components/TestimonialTen";
import TestimonialThree from "@/components/TestimonialThree";
import TestimonialTwo from "@/components/TestimonialTwo";

export const metadata = {
  title: "Home || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};

const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      {/* <NavBar/> */}

      {/* Banner One */}
      <br/>
      <br/>
      <br/>
      <br/>
      
      {/* <BannerOne /> */}
      <BannerThree/>

      {/* About Area One */}
      <AboutAreaOne />

      {/* Service Area One */}
      <ServiceAreaOne />
      {/* <ServiceAreaTwo/> */}
      {/* <ServiceAreaThree/> */}

      {/* FAQ Area One */}
      <CaseStudyAreaThree/>

      {/* <ParallaxProviderWrapper>
      <ScrollAnimation/>
      </ParallaxProviderWrapper> */}

      {/* Case Study Area One */}
      {/* <TestimonialTen/> */}
      <TestimonialNine/>
      
      <FaqAreaOne/>

      {/* Case Study Area Two */}
      {/* Team Area One */}
      {/* <TeamAreaOne /> */}

      {/* Counter Area One */}
      <CounterAreaOne />

      {/* Contact Area One */}
      <ContactAreaOne />

      {/* Work Process One */}
      <WorkProcessOne />

      {/* Pricing Area One */}

      {/* Blog Area One */}
      <BlogAreaOne />
    </>
  );
};

export default page;
