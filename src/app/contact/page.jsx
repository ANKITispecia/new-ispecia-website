import Breadcrumb from "@/components/Breadcrumb";
import ContactBanner from "@/components/ContactForm/ContactBanner/ContactBanner";
import ContactMain from "@/components/ContactMain";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";





export const metadata = {
  title: "Contact || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      

      {/* Navigation Bar */}
      {/* <Breadcrumb title={"Contact"} /> */}
      <ContactBanner/>

      {/* Contact Main */}
      <ContactMain />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* Footer One */}
      

    </>
  );
};

export default page;
