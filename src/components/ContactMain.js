'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
const ContactMain = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        '**********', //YOUR_SERVICE_ID
        '**********', //YOUR_TEMPLATE_ID
        form.current,
        '**********', //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            toast.success('Massage Sent Successfully!');
            form.current[0].value = '';
            form.current[1].value = '';
            form.current[2].value = '';
            form.current[3].value = '';
          }
        },
        (error) => {
          if (error.text !== 'OK') {
            toast.success('Massage Not Sent!');
          }
        },
      );
  };
  return (
    <>
      {/* ================= Contact Main start =================*/}
      <Toaster position="bottom-center" reverseOrder={false} />
      <>
        {/* contact area start */}
        <div className="contact-area pd-top-120 pd-bottom-120 ">
          <div className="container">
            <div className="contact-page-inner bg-gray">
              <div className="section-title mb-4 pb-2">
                <h2 className="title">Direct contact us? </h2>
                <p className="content mb-0">
                  Always available for you.
                </p>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="single-input-inner">
                      <input
                        id="name"
                        name="user_name"
                        type="text"
                        placeholder="Enter Your Name."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-input-inner">
                      <input
                        id="email"
                        name="user_email"
                        type="email"
                        placeholder="Enter Your Email."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-input-inner">
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Enter Your Subject."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="single-input-inner">
                      <textarea
                        name="message"
                        id="massage"
                        cols="1"
                        rows="5"
                        placeholder="Enter Your Massage ..."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-base border-radius-5"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* contact area end */}
        {/* contact list start */}
        <div className="contact-page-list">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="media single-contact-list">
                  <div className="media-left">
                    <img src="assets/img/icon/13.svg" alt="img" />
                  </div>
                  <div className="media-body">
                    <h5>Call us</h5>
                    <h6>
                      +91 8650406532
                  </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="media single-contact-list">
                  <div className="media-left">
                    <img src="assets/img/icon/14.svg" alt="img" />
                  </div>
                  <div className="media-body">
                    <h5>Email us</h5>
                    <h6>
                      info@ispecia.com
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="media single-contact-list">
                  <div className="media-left">
                    <img src="assets/img/icon/15.svg" alt="img" />
                  </div>
                  <div className="media-body">
                    <h5>Location</h5>
                    <h6>Dehradun Uttrakhand</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact list start */}
        {/* map start */}
        <br/>
        <br/>
        
        <div className="contact-g-map mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d861.3476315835059!2d77.99986326959402!3d30.282942156530776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDE2JzU4LjYiTiA3OMKwMDAnMDEuOCJF!5e0!3m2!1sen!2sin!4v1727689884355!5m2!1sen!2sin"
            title="new title"
          />
        </div>
        {/* map end */}
      </>

      {/* ================= Contact Main End =================*/}
    </>
  );
};

export default ContactMain;
