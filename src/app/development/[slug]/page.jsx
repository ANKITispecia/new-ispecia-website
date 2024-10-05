'use client';
import developmentServices from "../DevelopmentServices"; // Update to the correct path
import Image from 'next/image';
import Link from "next/link";
import { useState } from 'react';
import { FaPlus } from "react-icons/fa";

const DevelopmentService = ({ params }) => {
  const { slug } = params; // Extract slug from params
  const [isImageError, setIsImageError] = useState(false); // State for handling image load errors

  const service = developmentServices.find((service) => service.id === slug);

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <div className="service-area bg-relative pd-top-120 pd-bottom-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="single-service-inner-2 text-center">
              
              {/* Image Section with Conditional Rendering */}
              <div className="thumb">
                {!isImageError ? (
                  <Image
                    src={service.image} // Assuming service has an image property
                    alt={service.name}
                    width={500}
                    height={300}
                    className="service-img" // Custom styling for the image
                    onError={() => setIsImageError(true)} // Set error state if image fails to load
                  />
                ) : (
                  <h5>{service.name}</h5> // Display service name if image fails
                )}
              </div>

              <div className="details mt-4">
                <div className="icon mb-3">
                  <Image
                    src="/assets/img/service-icon/1.png" // Assuming service has an icon property
                    alt={`${service.name} icon`}
                    width={50}
                    height={50}
                  />
                </div>

                <h1 className="mb-3">{service.name}</h1>
                <p className="mb-4">{service.description}</p>
                <p className="mb-4">{service.whyChooseUs}</p>
                
              </div>
            </div>
          </div>
        </div>
          <div className='section-title' style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems:        'center' }}>
          <h6 className='sub-title'>{service.contactText}</h6>
          <h2 className='title mb-4'>
            Smarter Applications For The <span>Smarter</span> Individuals
          </h2>
          <form className="mt-4" style={{ 
            marginTop: '50px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',  // Added for centering
            marginLeft: 'auto', 
            marginRight: 'auto', 
            width: '100%' // Updated width to full width
          }}>
            <div className="row" style={{ 
              width: '80%', // Form fields are centered with reduced width
              display: 'flex', 
              flexDirection: 'column',  // Ensures fields are stacked
              gap: '15px',  // Space between the fields
              alignItems: 'center' // Centers all form elements
            }}>
              <div className="col-lg-6" style={{ width: '100%' }}>
                <div className="single-input-inner style-border" style={{ marginBottom: '15px', width: '100%' }}>
                  <input type="text" placeholder="Name Here" style={{ width: '100%', padding: '10px' }} />
                </div>
              </div>
              <div className="col-lg-6" style={{ width: '100%' }}>
                <div className="single-input-inner style-border" style={{ marginBottom: '15px', width: '100%' }}>
                  <input type="text" placeholder="Contact Here" style={{ width: '100%', padding: '10px' }} />
                </div>
              </div>
              <div className="col-lg-6" style={{ width: '100%' }}>
                <div className="single-input-inner style-border" style={{ marginBottom: '15px', width: '100%' }}>
                  <input type="text" placeholder="Email Here" style={{ width: '100%', padding: '10px' }} />
                </div>
              </div>
              <div className="col-lg-6" style={{ width: '100%' }}>
                <div className="single-input-inner style-border" style={{ marginBottom: '15px', width: '100%' }}>
                  <textarea placeholder="Message" style={{ width: '100%', padding: '10px', height: '100px' }} />
                </div>
              </div>
              <div className="col-6" style={{ width: '100%' }}>
                <Link className="btn btn-border-gray mt-0" href="#" style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',  // Centers the button text and icon
                  padding: '10px 20px',
                  width: '100%'  // Makes the button full-width
                }}>
                  Contact Us <FaPlus style={{ marginLeft: '8px' }} />
                </Link>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default DevelopmentService;
