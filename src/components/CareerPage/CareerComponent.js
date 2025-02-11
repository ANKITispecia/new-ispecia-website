'use client';
import React, { useState } from "react";
import jobData from "./data.json"; // Adjust the path based on your file structure


const CareerComponent = () => {
    const [selectedJob, setSelectedJob] = useState(null); // Ensure initial state does not depend on dynamic content.
  
    const handleToggle = (jobId) => {
      setSelectedJob(selectedJob === jobId ? null : jobId);
    };
  
    return (
      <div className="faq-area pd-bottom-120">
        <div className="container d-flex flex-column align-items-center">
          <div className="row justify-content-center pd-top-60" style={{ width: '100%', maxWidth: '1200px' }}>
            <div className="col-xl-10 col-lg-10 col-md-12">
              <div className="section-title mb-10 mt-0 mt-lg-0 text-center">
                
                <h4 className="title">Explore <span>Openings</span> Available</h4>
              </div>
              <div className="accordion accordion-inner style-2 accordion-icon-left mt-3" id="accordionExample">
                {jobData.map((job) => (
                  <div className="accordion-item" key={job.id}>
                    <h2 className="accordion-header" id={`heading-${job.id}`}>
                      <button
                        className={`accordion-button ${selectedJob === job.id ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => handleToggle(job.id)}
                      >
                        {job.title}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${selectedJob === job.id ? "show" : ""}`}
                      aria-labelledby={`heading-${job.id}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>{job.description}</p>
                        {job.responsibilities && job.responsibilities.length > 0 && (
                          <>
                            <h5>Responsibilities:</h5>
                            <ul>
                              {job.responsibilities.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </>
                        )}
                        {job.requirements && (
                          <>
                            <h5>Requirements:</h5>
                            <ul>
                              {job.requirements.education && <li>Education: {job.requirements.education}</li>}
                              {job.requirements.experience && <li>Experience: {job.requirements.experience}</li>}
                              {job.requirements.language && <li>Language: {job.requirements.language}</li>}
                              {job.requirements.location && <li>Location: {job.requirements.location}</li>}
                              {job.requirements.jobType && job.requirements.jobType.length > 0 && (
                                <li>Job Type: {job.requirements.jobType.join(', ')}</li>
                              )}
                              {job.requirements.salary && <li>Salary: {job.requirements.salary}</li>}
                              {job.requirements.schedule && job.requirements.schedule.length > 0 && (
                                <li>Schedule: {job.requirements.schedule.join(', ')}</li>
                              )}
                              {job.requirements.commute && <li>Commute: {job.requirements.commute}</li>}
                            </ul>
                          </>
                        )}
                        {job.contact && (
                          <div>
                            <h5>Contact:</h5>
                            <p>Email: {job.contact.email}</p>
                            <p>Phone: {job.contact.phone}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  



export default CareerComponent;
