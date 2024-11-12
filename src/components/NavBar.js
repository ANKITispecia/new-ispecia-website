// NavBar.js
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [isImageError, setIsImageError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const menuActive = () => {
    setActive(!active);
  };

  const router = useRouter();

  // Control sidebar navigation
  useEffect(() => {
    const items = document.querySelectorAll('.menu-item-has-children > a');
    const handleClick = (event) => {
      const subMenu = event.currentTarget.parentElement.querySelector('.sub-menu');
      if (subMenu) {
        subMenu.classList.toggle('active');
        event.currentTarget.classList.toggle('open');
      }
    };
    items.forEach(item => item.addEventListener('click', handleClick));
    return () => items.forEach(item => item.removeEventListener('click', handleClick));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(false);
  };

  return (
    <>
      {/* Fullscreen Popup for Schedule Call */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            {/* Close Button */}
            <button onClick={() => setShowPopup(false)} className="close-btn" aria-label="Close popup">
              ×
            </button>

            {/* Form Header */}
            <h2>Schedule a Call</h2>
            <p>Fill out the form below and we'll get back to you soon.</p>

            {/* Popup Form */}
            <form onSubmit={handleSubmit} className="popup-form">
              <label>Full Name</label>
              <input type="text" required placeholder="John Doe" />

              <label>Email Address</label>
              <input type="email" required placeholder="john@example.com" />

              <label>Phone Number</label>
              <input type="tel" required placeholder="+1 (555) 000-0000" />

              <label>Preferred Date</label>
              <input type="date" required />

              <label>Message</label>
              <textarea placeholder="Tell us about your project..." rows="4"></textarea>

              {/* Submit Button */}
              <button type="submit" className="submit-btn">Schedule Call</button>
            </form>
          </div>
        </div>
      )}

      {/* NavBar */}
      <nav className="navbar navbar-area navbar-area_1 navbar-expand-lg sticky-active">
        <div className="container nav-container navbar-bg">
          <div className="responsive-mobile-menu" style={{ backgroundColor: 'white', height: '50px' }}>
            <span className="logo" style={{ marginRight: '60px', marginLeft: '0px' }}>  
              <Link href="/">
                {isImageError ? (
                  <span>Ispeica Technologies</span>
                ) : (
                  <Image
                    src="/assets/img/logo.webp"
                    alt="Ispeica Technologies"
                    onError={() => setIsImageError(true)}
                    width={150}
                    height={43}
                  />
                )}
              </Link>
            </span>
            <button
              onClick={menuActive}
              className={active ? 'menu toggle-btn d-block d-lg-none open' : 'menu toggle-btn d-block d-lg-none'}
              style={{ position: 'absolute', right: 0, marginLeft: '40px' }}
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          
          <div className={active ? 'collapse navbar-collapse sopen' : 'collapse navbar-collapse'} id="itech_main_menu">
            <ul className="navbar-nav menu-open text-lg-end">
              {/* Nav Links */}
              <li className="menu-item-has-children mega-menu">
                <Link href="/service" onClick={() => router.push('/service')}>Services</Link>
                <div className="sub-menu hidden">
                  <div className="row">
                    {/* Columns for Mega Menu */}
                    <div className="col-lg-3 col-xl-3 ">
                      <ul>
                        <li style={{ marginLeft: '50px' }}>
                          <span className="menu-title">Our Services</span>
                        </li>
                        <li><Link href="/service/web-development">Web Development</Link></li>
                        <li><Link href="/service/mobile-development">Mobile App Development</Link></li>
                        <li><Link href="/service/crm">CRM</Link></li>
                        <li><Link href="/service/ui-ux">UI/UX Design</Link></li>
                        <li><Link href="/service/marketing">Marketing</Link></li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-xl-3">
                      <ul>
                        <li><span className="menu-title">Who We Offer Services To</span></li>
                        <li>Startups</li>
                        <li>Enterprises</li>
                        <li>Non-Profits</li>
                        <li>Agencies</li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-xl-3">
                      <ul>
                        <li><Link href="/service/website-development">Website Development</Link></li>
                        <li><Link href="/service/web-app-development">Web App Development</Link></li>
                        <li><Link href="/service/progressive-web-apps">Progressive Web App (PWA)</Link></li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-xl-3">
                      <ul>
                        <li><Link href="/service/graphic-design">Graphic Design</Link></li>
                        <li><Link href="/service/software-development">Software Development</Link></li>
                        <li><Link href="/service/seo-services">SEO Services</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu-item-has-children">
                <Link href="/about" onClick={() => router.push('/about')}>About</Link>
              </li>
              <li className="menu-item-has-children mega-menu">
                <Link href="#">Development</Link>
                <div className="sub-menu">
                  <div className="row">
                    {/* Additional Mega Menu Columns */}
                    <div className="col-lg-3 col-xl-3">
                      <ul>
                        <li><span className="menu-title">Technologies</span></li>
                        <li><Link href="/development/ai">AI</Link></li>
                        <li><Link href="/development/blockchain">Blockchain</Link></li>
                        <li><Link href="/development/iot">IoT</Link></li>
                        <li><Link href="/development/data-science">Data Science</Link></li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-xl-3">
                      <ul>
                        <li><span className="menu-title">Industries</span></li>
                        <li>E-Governance</li>
                        <li>Finance</li>
                        <li>Healthcare</li>
                        <li>E-Commerce</li>
                        <li>Electric Vehicle</li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-xl-3">
                      <ul>
                        <li><span className="menu-title">Languages</span></li>
                        <li><Link href="/development/javascript">JavaScript</Link></li>
                        <li><Link href="/development/python">Python</Link></li>
                        <li><Link href="/development/kotlin">Kotlin</Link></li>
                        <li><Link href="/development/swift">Swift</Link></li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-xl-3">
                      <ul>
                        <li><span className="menu-title">Platforms</span></li>
                        <li><Link href="/development/web">Web</Link></li>
                        <li><Link href="/development/ios">iOS</Link></li>
                        <li><Link href="/development/android">Android</Link></li>
                        <li><Link href="/development/cross-platform">Cross-platform</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Other Nav Links */}
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/testimonial">Testimonial</Link></li>
              <li className="menu-item-has-children">
                <a href="/Careers" onClick={() => router.push('/Careers')}>Career</a>
              </li>
              <li><Link href="/blog">Blogs</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li>
                <button onClick={() => setShowPopup(true)} className="btn btn-primary" style={{backgroundColor:"#86c445"}}>
                  Schedule a Call
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        /* Fullscreen Overlay */
        .popup-overlay {
          position: fixed;
          
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9000;
        }

        /* Centered Popup Content */
        .popup-content {
          background: #fff;
          padding: 2rem;
          border-radius: 8px;
          width: 100%;
          height:80vh;
          max-width: 500px;
          text-align: center;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          overflow-y: scroll;
        }

        /* Close Button */
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: transparent;
          border: none;
          font-size: 1.5rem;
          color: #333;
          cursor: pointer;
        }

        /* Form Styles */
        .popup-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        label {
          font-size: 0.9rem;
          font-weight: 500;
          color: #333;
          text-align: left;
        }

        input, textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.2s ease;
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: #80ce2d;
        }

        /* Submit Button */
        .submit-btn {
          padding: 0.75rem;
          background-color: #80ce2d;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .submit-btn:hover {
          background-color: #6bb526;
        }

        /* Schedule Button */
        .schedule-btn {
          background-color: #80ce2d;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
        }

        .schedule-btn:hover {
          background-color: #6bb526;
        }
      `}</style>
    </>
  );
};

export default NavBar;
