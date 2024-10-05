import AboutAreaEight from "@/components/AboutAreaEight";
import AboutAreaFive from "@/components/AboutAreaFive";
import AboutAreaFour from "@/components/AboutAreaFour";
import AboutAreaNine from "@/components/AboutAreaNine";
import AboutAreaOne from "@/components/AboutAreaOne";
import AboutAreaSeven from "@/components/AboutAreaSeven";
import AboutAreaSix from "@/components/AboutAreaSix";
import AboutAreaThree from "@/components/AboutAreaThree";
import AboutAreaTwo from "@/components/AboutAreaTwo";
import Breadcrumb from "@/components/Breadcrumb";
import ContactAreaFour from "@/components/ContactAreaFour";
import ContactAreaOne from "@/components/ContactAreaOne";
import ContactAreaThree from "@/components/ContactAreaThree";
import ContactAreaTwo from "@/components/ContactAreaTwo";
import CounterAreaFour from "@/components/CounterAreaFour";
import CounterAreaOne from "@/components/CounterAreaOne";
import CounterAreaThree from "@/components/CounterAreaThree";
import CounterAreaTwo from "@/components/CounterAreaTwo";
import FaqAreaOne from "@/components/FaqAreaOne";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import ServiceAreaGroupThree from "@/components/ServiceAreaGroupThree";
import ServiceAreaGroupTwo from "@/components/ServiceAreaGroupTwo";
import ServiceAreaOne from "@/components/ServiceAreaOne";
import TeamAreaOne from "@/components/TeamAreaOne";
import TestimonialNine from "@/components/TestimonialNine";
import WorkProcessFour from "@/components/WorkProcessFour";
import WorkProcessOne from "@/components/WorkProcessOne";
import WorkProcessThree from "@/components/WorkProcessThree";
import WorkProcessTwo from "@/components/WorkProcessTwo";


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
      <Breadcrumb title={'About Us'} />
      
      <AboutAreaTwo/>
      
      <CounterAreaFour />

      <WorkProcessOne/>

      <AboutAreaNine/>
      {/* About Area One */}
      <AboutAreaFive />
      

      

      {/* ServiceAreaOne */}

      
      <WorkProcessFour />

      
      <TestimonialNine/>
      

      {/* Contact Area One */}
      <ContactAreaFour />

      {/* Work Process One */}
      

      {/* Footer One */}
      

    </>
  );
};

export default page;
