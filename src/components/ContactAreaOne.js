'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS for animations
import { handleFormSubmission } from '../actions/handleFormSubmission'; // Adjust the path accordingly
import Image from 'next/image';

const ContactAreaOne = () => {
  const [isClient, setIsClient] = useState(false); // Ensure component renders properly on client
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  // Ensure AOS initializes only on the client side
  useEffect(() => {
    setIsClient(true); // Wait for client-side rendering
    if (typeof window !== 'undefined') {
      AOS.init({ duration: 1500 });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setResponseMessage(''); // Reset response message

    try {
      const response = await handleFormSubmission(formData);
      if (response.success) {
        setResponseMessage('Email sent successfully!');
      } else {
        setResponseMessage(`Error: ${response.message}`);
      }
    } catch (error) {
      setResponseMessage(`Unexpected error: ${error.message}`);
    }
  };

  if (!isClient) return null; // Prevent rendering on the server to avoid mismatches

  return (
    <>
      {/* ========================= contact Area One start =========================*/}
      <div className="contact-area">
        <div className="container">
          <div className="contact-inner-1">
            <img
              className="top_image_bounce animate-img-1"
              src="/assets/img/banner/2.png"
              alt="img"
            />
            <img
              className="top_image_bounce animate-img-2"
              src="/assets/img/about/6.png"
              alt="img"
            />
            <div className="row">
              <div
                className="col-lg-8"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <Image width={800} height={800} objectFit='cover' className="w-100" src="/assets/img/bg/5.jpg" alt="img" />
              </div>
              <div
                className="col-lg-4 wow animated fadeInRight"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <div className="section-title mb-0">
                  <h6 className="sub-title">GET IN TOUCH</h6>
                  <h2 className="title">
                    Bringing Your <span>Vision</span> To Life
                  </h2>
                  <p className="content">
                    For your car we will do everything advice design in us
                    repairs and maintenance. We are the some preferred.
                  </p>
                  <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input
                            type="number"
                            name="phone"
                            placeholder="Your Phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Your Subject"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-input-inner style-border">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-black mt-0 w-100 border-radius-5"
                          type="submit"
                        >
                          Submit now
                        </button>
                      </div>
                    </div>
                  </form>
                  {responseMessage && <p>{responseMessage}</p>} {/* Display response message */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*========================= contact-inner One end =========================*/}
    </>
  );
};

export default ContactAreaOne;
