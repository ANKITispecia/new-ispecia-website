import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import PricingAreaOne from "@/components/PricingAreaOne";
import ServiceAreaGroup from "@/components/ServiceAreaGroup";





export const metadata = {
  title: "Service || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <div className="aboutBg">

      {/* Navigation Bar */}
      <Breadcrumb title={'Service'} />
      </div>

      {/* Service Area One */}
      <ServiceAreaGroup />

      {/* Pricing Area One */}
      

      {/* Footer One */}
      
    </>
  );
};

export default page;
