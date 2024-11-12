import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaPlus } from "react-icons/fa";

const TestimonialAbout = () => {
  return (
    <>
      {/* =============== About Area Two Start =============== */}
      <div className="about-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            {/* Left Side: Image */}
            <div
              className="col-lg-6 align-self-center"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner">
                <img
                  className="main-img mt-4"
                  src="/assets/img/about/image.png"
                  alt="Secondary image"
                  style={{ width: "70%", height: "90%" }}
                />
              </div>
            </div>

            {/* Right Side: Text */}
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0">
                <h6 className="sub-title">What Our Clients Say</h6>
                <h2 className="title">Ispecia Your Technology Partner</h2>
                <p className="content mb-4">
                  At <strong>Ispecia Technologies</strong>, we believe that the
                  best testament to our work comes from the people who experience
                  it firsthand. Our clients' success stories are a reflection of
                  our dedication to delivering innovative solutions and
                  unparalleled customer service. From custom software development
                  to seamless integrations, we’re committed to helping businesses
                  grow and achieve their goals.
                  <br />
                  <br />
                  Our clients trust us not just for our expertise, but for our
                  collaborative approach and commitment to quality. Here are just
                  a few of the testimonials that speak to the impact we've made
                  across various industries.
                  <br />
                  <br />
                  We pride ourselves on building long-term relationships and
                  becoming true partners in our clients’ journeys. With every
                  project, we aim to elevate their business through technology,
                  creativity, and innovation.
                </p>

                <Link className="btn btn-border-base" href="/about">
                  Discover More <FaPlus />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== About Area Two End =============== */}
    </>
  );
};

export default TestimonialAbout;
