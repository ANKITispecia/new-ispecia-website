'use client';
import developmentServices from "../DevelopmentServices"; // Update to the correct path
import Image from 'next/image';
import Link from "next/link";
import { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { handleFormSubmission } from '../../../actions/handleFormSubmission'; // Adjust the import path as needed

const DevelopmentService = ({ params }) => {
  const { slug } = params; // Extract slug from params
  const [isImageError, setIsImageError] = useState(false); // State for handling image load errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState(''); // State to hold submission status

  const service = developmentServices.find((service) => service.id === slug);

  if (!service) {
    return <p>Service not found</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const response = await handleFormSubmission(formData); // Call the server action
    setSubmissionStatus(response.message); // Update submission status based on response
  };

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
                  <h6>{service.name}</h6> // Display service name if image fails
                )}
              </div>

              <div className="details mt-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '40vw', margin: '0 auto' }}>
                <div className="icon mb-3">
                  <Image
                    src="/assets/img/service-icon/1.png" // Assuming service has an icon property
                    alt={`${service.name} icon`}
                    width={50}
                    height={50}
                  />
                </div>

                <h4 className="mb-3">{service.name} with us</h4>
                <p className="mb-4">{service.description}</p>
                <br/>
                <h5 className="mb-3">Why Choose Us</h5>
                <p className="mb-4">{service.whyChooseUs}</p>
                
              </div>
            </div>
          </div>
        </div>
        <div className='section-title' style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h6 className='sub-title'>{service.contactText}</h6>
          <h2 className='title mb-4'>
            Smarter Applications For The <span>Smarter</span> Individuals
          </h2>
          <form className="mt-4" onSubmit={handleSubmit} style={{ 
            marginTop: '50px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',  // Added for centering
            marginLeft: 'auto', 
            marginRight: 'auto', 
            width: '60%' // Updated width to full width
          }}>
            <div className="row" style={{ 
              width: '40vw', // Form fields are centered with reduced width
              display: 'flex', 
              flexDirection: 'column',  // Ensures fields are stacked
              gap: '15px',  // Space between the fields
              alignItems: 'center' // Centers all form elements
            }}>
              <div className="col-lg-6" style={{ width: '100%' }}>
                <div className="single-input-inner style-border" style={{ marginBottom: '15px', width: '100%' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name Here"
                    style={{ width: '100%', padding: '10px' }}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6" style={{ width: '100%' }}>
                <div className="single-input-inner style-border" style={{ marginBottom: '15px', width: '100%' }}>
                  <input
                    type="text"
                    name="contact"
                    placeholder="Contact Here"
                    style={{ width: '100%', padding: '10px' }}
                    value={formData.contact}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6" style={{ width: '100%' }}>
                <div className="single-input-inner style-border" style={{ marginBottom: '15px', width: '100%' }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Here"
                    style={{ width: '100%', padding: '10px' }}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6" style={{ width: '100%' }}>
                <div className="single-input-inner style-border" style={{ marginBottom: '15px', width: '100%' }}>
                  <textarea
                    name="message"
                    placeholder="Message"
                    style={{ width: '100%', padding: '10px', height: '100px' }}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-6" style={{ width: '100%' }}>
                <button className="btn btn-border-gray mt-0" type="submit" style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',  // Centers the button text and icon
                  padding: '10px 20px',
                  width: '100%'  // Makes the button full-width
                }}>
                  Contact Us 
                </button>
              </div>
            </div>
            {submissionStatus && <p>{submissionStatus}</p>} {/* Display submission status */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentService;
