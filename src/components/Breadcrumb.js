'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname to get the current route

const Breadcrumb = ({ title }) => {
  const pathname = usePathname(); // Get the current route

  // List of paths where the breadcrumb should be hidden
  const hideBreadcrumb = pathname === '/' || pathname === '/other-page-to-hide'; 

  // If the path matches, don't render anything
  if (hideBreadcrumb) {
    return null;
  }

  return (
    <>
      {/* ================ Breadcrumb Start ================ */}
      <div className="breadcrumb-area">
        <div className="container justify-center">
          <div className="breadcrumb-inner justify-center">
            <div className="row justify-content-center justify-center">
              <div className="col-lg-6 justify-center">
                {/* Page title */}
                <h2 className="page-title">{title}</h2>
                {/* Breadcrumb list directly under title */}
                <ul className="page-list text-white">
                  <li className="text-white">
                    <Link href="/">Home</Link>
                  </li>
                  {" / "}
                  <li className="text-white">{title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================ Styles and Animation ================ */}
      <style jsx>{`
        .breadcrumb-area {
          position: relative;
          height: 20vh;
          overflow: hidden;
          background-color: black; /* Initial black background */
          background-image: url('/assets/img/bcmb.jpg'); /* Add your image path here */
          background-size: cover;
          background-position: center;
          animation: fadeToImage 3.5s ease forwards;
        }

        /* Animation to fade from black to the image */
        @keyframes fadeToImage {
          0% {
            background-color: black;
            background-size: 100%; /* Start fully zoomed in */
          }
          50% {
            background-color: black;
            opacity: 0.7;
            background-size: 110%; /* Slight zoom effect */
          }
          100% {
            background-color: transparent;
            opacity: 1;
            background-size: 100%; /* Normal size for the image */
          }
        }

        .page-title {
          position: relative;
          z-index: 1; /* To make sure the title is above the animation */
          color: #fff;
        }

        .page-list {
          position: relative;
          z-index: 1;
          color: #fff;
        }
      `}</style>
      {/* ================ Breadcrumb End ================ */}
    </>
  );
};

export default Breadcrumb;
