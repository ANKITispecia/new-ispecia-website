import BootstrapInit from "@/helper/BootstrapInit";
import "react-modal-video/scss/modal-video.scss";
import "./font.css";
import "./globals.scss";
import NavBar from "@/components/NavBar";
import FooterEight from "@/components/FooterEight";
import React from "react"; // Import React for StrictMode
import FloatingContactButton from "@/components/FloatingContactButton";

export const metadata = {
  title: "Service || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body suppressHydrationWarning={true}>
      <BootstrapInit />
        {/* Enable React Strict Mode */}
        <React.StrictMode>
          <NavBar />
          <FloatingContactButton/>
          {children}
          <FooterEight />
        </React.StrictMode>
      </body>
    </html>
  );
}
