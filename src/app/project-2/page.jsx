import Breadcrumb from "@/components/Breadcrumb";

import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import ProjectAreaOne from "@/components/ProjectAreaOne";
import TeamAreaOne from "@/components/TeamAreaOne";



export const metadata = {
  title: "Project || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      

      {/* Breadcrumb */}
      <Breadcrumb title={'Project 02'} />

      {/* ProjectAreaOne */}
      <ProjectAreaOne />

      {/* TeamAreaOne */}
      <TeamAreaOne />

      {/* Counter Area One */}
     

      {/* Contact Area One */}
      

      

    </>
  );
};

export default page;
