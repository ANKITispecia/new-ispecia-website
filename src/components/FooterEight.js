'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const FooterEight = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent rendering until the component has mounted
  if (!isMounted) {
    return null; // Optionally return a loading spinner or placeholder
  }

  return (
    <>
      {/* footer area start */}
      <footer className="footer-area footer-area_8 bg-black-2-ico bg-cover mt-0">
        <div className="footer-subscribe">
          <div className="container">
            <div className="footer-subscribe-inner style-3 bg-cover">
              <div className="row">
                <div className="col-lg-6 mb-4 mb-lg-0 text-center text-md-start">
                  <h2 className="mb-3 text-white">Newsletters</h2>
                  <p className="mb-0 text-white">
                    Lorem Ipsum is simply dummy text of the printing
                  </p>
                </div>
                <div className="col-lg-6 align-self-center text-center text-lg-end">
                  <input type="text" placeholder="Your e-mail address" />
                  <Link className="btn btn-base bg-base-9" href="#">
                    Submit now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {/* Column 1: Contact Info */}
            <div className="col-lg-3 col-md-6 text-center text-md-start mb-4 mb-md-0">
              <div className="widget widget_about">
                <div className="thumb">
                  <Image src="/assets/img/logo.webp" alt="img" width={150} height={43}/>
                </div>
                <div className="details">
                  <p className="footer-title">About Us</p>
                  <p className="mt-3 text-sm" style={{ fontSize: '12px', lineHeight: '1.7' }}>
                    Ispecia Technologies,<br /> an Indian-based IT company,<br />
                    provides 360-degree solutions to all sizes of <br /> businesses.<br />
                    Its primary objective is to accomplish clients’ <br /> businesses
                    in the online realm with innovative solutions.
                  </p>
                  <ul className="social-media text-center text-md-start mb-4 mb-md-0">
                    <li>
                      <Link href="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaYoutube />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 2: Important Links */}
            <div className="col-lg-3 col-md-6 text-center text-md-start p-0 mb-4 mb-md-0">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Important Links</h4>
                <ul className='text-center text-md-start mb-4 mb-md-0'>
                  <li>
                    <Link href="/">
                      <FaArrowRight /> Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <FaArrowRight /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <FaArrowRight /> Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio">
                      <FaArrowRight /> Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <FaArrowRight /> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Services */}
            <div className="col-lg-3 col-md-6 sm:text-center text-md-start p-0 mb-4 mb-md-0">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title text-center text-md-start mb-4 mb-md-0">Services</h4>
                <ul className="text-center text-md-start mb-md-0 mt-4">
                  <li>
                    <Link href="/services/web-development">
                      <FaArrowRight /> Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/app-development">
                      <FaArrowRight /> App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ui-ux-design">
                      <FaArrowRight /> UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/digital-marketing">
                      <FaArrowRight /> Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cloud-solutions">
                      <FaArrowRight /> Cloud Solutions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4: Contact Us */}
            <div className="col-lg-3 col-md-6 text-center text-md-start">
              <div className="widget widget_contact">
                <h4 className="widget-title">Contact us</h4>
                <ul className="details text-white text-center text-md-start mb-4 mb-md-0">
                  <li>
                    <FaMapMarkerAlt /> Dehradun, India
                  </li>
                  <li className="mt-3">
                    <FaPhoneAlt /> (+91) 8650406532
                  </li>
                  <li className="mt-2">
                    <FaEnvelope /> info@ispecia.com
                  </li>
                  <li className="mt-2">
                    <FaPhoneAlt /> er.sudeepgupta
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start">
                <p>© Ispecia – Your Technology Partner | All Rights Reserved</p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <Link href="#">Terms &amp; Conditions</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </>
  );
};

export default FooterEight;
