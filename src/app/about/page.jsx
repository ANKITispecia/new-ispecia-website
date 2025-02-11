import AboutAreaFive from "@/components/AboutAreaFive";
import AboutAreaNine from "@/components/AboutAreaNine";
import AboutAreaTwo from "@/components/AboutAreaTwo";
import Breadcrumb from "@/components/Breadcrumb";
import ContactAreaFour from "@/components/ContactAreaFour";
import TestimonialSlider from "@/components/Testimonial/TestimonialSlider";
import WorkProcessFour from "@/components/WorkProcessFour";
import WorkProcessOne from "@/components/WorkProcessOne";
import TeamAreaFour from "@/components/TeamAreaFour";
import CounterAreaSix from "@/components/CounterAreaSix";
import Vision from "@/components/Vision/Vision";
import AboutBanner from "@/components/AboutBanner/AboutBanner";
import VisionRoadmap from "@/components/VisionRoadmap/VisionRoadmap";


export const metadata = {
  title: "About || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      

      {/* Navigation Bar */}
      {/* <div className="aboutBg" style={{ backgroundImage: ' url("https://img.freepik.com/free-vector/blue-curve-frame-template-vector_53876-165851.jpg?ga=GA1.1.370775638.1732604444&semt=ais_hybrid")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed',  width: '100%', height: '50vh', borderRadius:"0px 0px 90px 0px"}}>
        <Breadcrumb title={'About Us'}/>
      </div> */}
      <AboutBanner/>
      
      
      <AboutAreaTwo/>
      
      <CounterAreaSix />

      <WorkProcessOne/>

      <TeamAreaFour/>

      <AboutAreaNine/>
      <VisionRoadmap />

      <Vision/>
      {/* About Area One */}
      <AboutAreaFive />
      

      

      {/* ServiceAreaOne */}

      
      <WorkProcessFour />

      
      <TestimonialSlider />
      

      {/* Contact Area One */}
      <ContactAreaFour />

      {/* Work Process One */}
      

      {/* Footer One */}
      

    </>
  );
};

export default page;
