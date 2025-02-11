import Breadcrumb from "@/components/Breadcrumb";
import CallToAction from "@/components/CallToAction/CallToAction";
import CompaniesData from "@/components/CompaniesData/CompaniesData";
import NavBar from "@/components/NavBar";
import PricingAreaOne from "@/components/PricingAreaOne";
import ServiceAreaGroup from "@/components/ServiceAreaGroup";
import ServicePage from "@/components/ServiceComponent/ServicePage/ServicePage";
import ServicePage1 from "@/components/ServiceComponent/ServicePage1/ServicePage1";
import ServicePage2 from "@/components/ServiceComponent/ServicePage2/ServicePage2";
import TechnologiesPage from "@/components/Technologies/TechnologiesPage";

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
      {/* <Breadcrumb title={'Service'} /> */}
     <ServicePage />
      </div>
      <ServicePage1 />
      <ServicePage2 />
      <CompaniesData />
      <CallToAction />

      <TechnologiesPage />


      {/* Service Area One */}
      <ServiceAreaGroup />

      {/* Pricing Area One */}
      

      {/* Footer One */}
      
    </>
  );
};

export default page;
