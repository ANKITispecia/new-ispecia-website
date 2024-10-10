import Bloggroup from "@/components/BlogGroup";
import BlogGroup from "@/components/BlogGroup";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Blog | Ispecia",
  description:
    "Latest blog posts from Ispecia Technologies.",
};


const page = () => {
  return (
    <>
      

      {/* Navigation Bar */}
      <Breadcrumb title={"Blog"} />

      {/* Blog Group */}
      <Bloggroup />

      
    </>
  );
};

export default page;
