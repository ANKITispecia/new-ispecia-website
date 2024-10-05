
import AboutAreaOne from "@/components/AboutAreaOne";
import BannerOne from "@/components/BannerOne";
import BlogAreaOne from "@/components/BlogAreaOne";
import CaseStudyAreaGroupOne from "@/components/CaseStudyAreaGroupOne";
import CaseStudyAreaOne from "@/components/CaseStudyAreaOne";
import CaseStudyAreaThree from "@/components/CaseStudyAreaThree";
import CaseStudyAreaTwo from "@/components/CaseStudyAreaTwo";
import ContactAreaOne from "@/components/ContactAreaOne";
import CounterAreaOne from "@/components/CounterAreaOne";
import FaqAreaOne from "@/components/FaqAreaOne";
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
import ServiceAreaOne from "@/components/ServiceAreaOne";
import ServiceAreaThree from "@/components/ServiceAreaThree";
import ServiceAreaTwo from "@/components/ServiceAreaTwo";
import TeamAreaOne from "@/components/TeamAreaOne";
import TestimonialEight from "@/components/TestimonialEight";
import TestimonialFive from "@/components/TestimonialFive";
import TestimonialNine from "@/components/TestimonialNine";
import TestimonialOne from "@/components/TestimonialOne";
import TestimonialSeven from "@/components/TestimonialSeven";
import TestimonialSix from "@/components/TestimonialSix";
import TestimonialTen from "@/components/TestimonialTen";
import TestimonialThree from "@/components/TestimonialThree";
import TestimonialTwo from "@/components/TestimonialTwo";
import WorkProcessOne from "@/components/WorkProcessOne";


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
      <BannerOne />

      {/* About Area One */}
      <AboutAreaOne />

      {/* Service Area One */}

      {/* <ServiceAreaOne /> */}
      {/* <ServiceAreaTwo/> */}
      <ServiceAreaThree/>

      

      {/* FAQ Area One */}
      <CaseStudyAreaThree/>
      {/* <ParallaxProviderWrapper>
      <ScrollAnimation/>
      
      </ParallaxProviderWrapper> */}
      
      {/* Case Study Area One */}
      <TestimonialTen/>

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

      {/* Footer One */}
      {/* 5 8  */}
      {/* <FooterEight /> */}


    </>
  );
};

export default page;
