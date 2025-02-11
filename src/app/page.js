import CaseStudyAreaTwo from '@/components/CaseStudyAreaTwo';
import CompaniesData from '@/components/CompaniesData/CompaniesData';
import Faq from '@/components/FAQ-Section/Faq';
import TestimonialSlider from '@/components/Testimonial/TestimonialSlider';
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
const BlogAreaOne = dynamic(() => import('@/components/Blog/BlogAreaOne'));


// Unused imports (kept as-is)


export const metadata = {
  title: "Home || Ispecia technologies - IT Solutions & Technology",
  description:
    "Ispecia provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
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
      {/* <BannerThreeChange /> */}

     

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
      {/* <TestimonialNine/> */}
      <TestimonialSlider />
      <CompaniesData/>
      
      {/* <FaqAreaOne/> */}
      <Faq />

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
