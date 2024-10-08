'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS for animations

const ContactAreaOne = () => {
  const [isClient, setIsClient] = useState(false); // Ensure component renders properly on client

  // Ensure AOS initializes only on the client side
  useEffect(() => {
    setIsClient(true); // Wait for client-side rendering
    if (typeof window !== 'undefined') {
      AOS.init({ duration: 1500 });
    }
  }, []);

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
                <img className="w-100" src="/assets/img/bg/4.jpg" alt="img" />
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
                  <form className="mt-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="email" placeholder="Your Email" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="number" placeholder="Your Phone" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Your Subject" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-input-inner style-border">
                          <textarea placeholder="Your Message" />
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
