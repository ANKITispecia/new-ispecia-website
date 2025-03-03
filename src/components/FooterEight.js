'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { FaX, FaXTwitter } from 'react-icons/fa6';

const FooterEight = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent rendering until the component has mounted to avoid hydration errors
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* footer area start */}
      <footer className="footer-area footer-area_8 bg-[#4a4645]-ico bg-cover mt-0 p-5">
        {/* <div className="footer-subscribe">
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
        </div> */}

        <div className="container">
          <div className="row">
            {/* Column 1: Contact Info */}
            <div className="col-lg-3 col-md-6 text-center text-md-start mb-4 mb-md-0">
              <div className="widget widget_about">
                <div className="thumb">
                  <Image
                    src="/assets/img/logofooter.png"
                    alt="img"
                    width={70}
                    height={60}
                    priority={true} // Optimize critical image loading
                  />
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
                      <Link href="https://www.facebook.com/ispeciatech">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com/IspeciaTech">
                        <FaXTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/ispeciatech/">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/company/ispecia">
                        <FaLinkedin />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.youtube.com/@ispeciatechnologies">
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
                    <Link href="/service">
                      <FaArrowRight /> Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio">
                      <FaArrowRight /> Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonial">
                      <FaArrowRight /> Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <FaArrowRight /> Blogs
                    </Link>
                  </li>
                  <li>
                    <Link href="/Careers">
                      <FaArrowRight /> Career
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
                    <Link href="/service/web-development">
                      <FaArrowRight /> Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/mobile-development">
                      <FaArrowRight /> App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/ui-ux">
                      <FaArrowRight /> UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/marketing">
                      <FaArrowRight /> Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/progressive-web-apps">
                      <FaArrowRight /> PWA Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/crm">
                      <FaArrowRight /> CRM Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/seo-services">
                      <FaArrowRight /> SEO Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/graphic-design">
                      <FaArrowRight /> Graphic Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/software-development">
                      <FaArrowRight /> Software Development
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
                    <FaMapMarkerAlt /> <Link href="https://maps.google.com/?q=30.283,78.00018">Dehradun, India</Link>
                  </li>
                  <li className="mt-3">
                    <FaPhoneAlt /> <Link href="tel:+91 8650406532">(+91) 8650406532</Link>
                  </li>
                  <li className="mt-2">
                    <FaEnvelope /> <Link href="mailto:info@ispecia.com">info@ispecia.com</Link>
                  </li>
                  <li className="mt-2">
                    <FaPhoneAlt /> <Link href={'skype:er.sudeepgupta'}>er.sudeepgupta</Link>
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
