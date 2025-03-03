'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { handleFormSubmission } from '../actions/handleFormSubmission'; // Adjust the import path as needed
import './Ca4.css'
const ContactAreaFour = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
    resume: null
  });
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const response = await handleFormSubmission(formData); // Call the server action
    setSubmissionStatus(response.message); // Update submission status based on response
  };

  return (
    <>
      {/*================= counter area start =================*/}
      <div className="contact-area pd-top-90 pd-bottom-90">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 order-lg-end"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner ms-xl-5 p-xl-5 pt-4">
                <img
                  className="animate-main-img"
                  src="assets/img/about/18.png"
                  alt="img"
                />
                <img
                  className="main-img m-4"
                  src="/assets/img/about/calling.png"
                  alt="img"
                  style={{background:"transparent"}}
                />
              </div>
            </div>
            <div
              className="col-lg-6 order-lg-first"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0 mt-5 mt-lg-0">
                <h6 className="sub-title">GET IN TOUCH</h6>
                <h2 className="title">
                Ready to <span>Grow</span> Your Career?
                </h2>
                <p className="content">
                Get in touch with us to learn more about open roles and career development.
                </p>
                <form className="mt-4" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="single-input-inner style-border">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name Here"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-input-inner style-border">
                        <input
                          type="text"
                          name="contact"
                          placeholder="Contact Here"
                          value={formData.contact}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-input-inner style-border">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Here"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="col-lg-12">
                      <div className="single-input-inner style-border">
                        <textarea
                          name="message"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-input-inner style-border">
                        <div className="file-input-wrapper">
                          <input
                            type="file"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleChange}
                            className="file-input"
                          />
                          <span className="file-input-text">
                            {formData.resume ? formData.resume.name : 'Upload Resume (PDF, DOC, DOCX)'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-border-gray mt-0" type="submit">
                        Contact Us <FaPlus />
                      </button>
                    </div>
                  </div>
                </form>
                {submissionStatus && <p>{submissionStatus}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================= counter area end =================*/}
    </>
  );
};

export default ContactAreaFour;