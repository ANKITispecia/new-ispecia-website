import Breadcrumb from "@/components/Breadcrumb";

import ServiceDetailsArea from "@/components/ServiceDetailsArea";

export const metadata = {
  title: "Service Details || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      

      {/* Navigation Bar */}
      <Breadcrumb title={"Service Details"} />

      {/* Service Details Area */}
      <ServiceDetailsArea />

      
    </>
  );
};

export default page;
