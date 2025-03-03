import Breadcrumb from "@/components/Breadcrumb";
import ContactAreaOne from "@/components/ContactAreaOne";
import CounterAreaOne from "@/components/CounterAreaOne";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import ProjectAreaGroup from "@/components/ProjectAreaGroup";
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
      <Breadcrumb title={'Project 01'} />

      {/* ProjectAreaGroup */}
      <ProjectAreaGroup />

      {/* TeamAreaOne */}
      

      {/* Counter Area One */}
      <CounterAreaOne />

      {/* Contact Area One */}
      <div className="pd-bottom-120">
        <ContactAreaOne />
      </div>

      

    </>
  );
};

export default page;
