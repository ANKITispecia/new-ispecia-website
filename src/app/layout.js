import BootstrapInit from "@/helper/BootstrapInit";
import "react-modal-video/scss/modal-video.scss";
import "./font.css";
import "./globals.scss";
import dynamic from "next/dynamic";
import React, { Suspense } from "react"; // Import Suspense from React
import Loading from "./loading";

// Lazy load Footer and FloatingContactButton
const NavBar = dynamic(() => import('@/components/NavBar'), { ssr: false });
const FooterEight = dynamic(() => import('@/components/FooterEight'), { ssr: false });
const FloatingContactButton = dynamic(() => import('@/components/FloatingContactButton'), {
  ssr: false,
  loading: () => <Loading />,
});

export const metadata = {
  title: "Service || Ispecia technologies - IT Solutions & Technology",
  description:
    "Ispecia provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
  icons: {
    icons:"/assets/img/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    
    </head>


      <body suppressHydrationWarning={true}>
        <BootstrapInit />
        {/* Use Strict Mode only in development */}
        {process.env.NODE_ENV === "development" ? (
          <React.StrictMode>
            <Suspense fallback={<Loading />}> {/* Add Suspense here */}
              <NavBar />
              <FloatingContactButton />
              {children}
              <FooterEight />
            </Suspense>
          </React.StrictMode>
        ) : (
          <Suspense fallback={<Loading />}> {/* Add Suspense here */}
            <NavBar />
            <FloatingContactButton />
            {children}
            <FooterEight />
          </Suspense>
        )}
      </body>
    </html>
  );
}
