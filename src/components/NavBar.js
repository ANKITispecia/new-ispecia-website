'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const NavBar = () => {
  const [active, setActive] = useState(false);
  
  const [isImageError, setIsImageError] = useState(false);

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

    items.forEach(item => {
      item.addEventListener('click', handleClick);
    });

    // Cleanup function to remove event listeners
    return () => {
      items.forEach(item => {
        item.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <>
      
     
      {/* navbar start */}
      <nav className="navbar navbar-area navbar-area_1 navbar-expand-lg sticky-active">
        <div className="container nav-container navbar-bg">
          <div className="responsive-mobile-menu">
            <button
              onClick={menuActive}
              className={
                active
                  ? 'menu toggle-btn d-block d-lg-none open'
                  : 'menu toggle-btn d-block d-lg-none'
              }
              data-target="#itech_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="logo">
            <Link href="/">
              {isImageError ? (
                <span>Ispeica Technologies</span> // Changed from <p> to <span> for consistency
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
          </div>
          
          <div
            className={
              active
                ? 'collapse navbar-collapse sopen'
                : 'collapse navbar-collapse'
            }
            id="itech_main_menu"
          >
            <ul className="navbar-nav menu-open text-lg-end">
              {/* <li className="menu-item-has-children">
                <Link href="/">Home</Link>
              </li> */}

              {/* Services Mega Menu */}
              <li className="menu-item-has-children mega-menu">
                <Link href="/service" onClick={()=>router.push('/service')}>Services</Link>
                <div className="sub-menu hidden">
                  <div className="row">
                    <div className="col-lg-3 col-xl-3 ">
                      <ul>
                        <li>
                          <span className="menu-title">Our Services</span>
                        </li>
                        <li>
                          <Link href="/service/web-development">Web Development</Link>
                        </li>
                        <li>
                          <Link href="/service/mobile-development">Mobile App Development</Link>
                        </li>
                        <li>
                          <Link href="/service/crm">CRM</Link>
                        </li>
                        <li>
                          <Link href="/service/ui-ux">UI/UX Design</Link>
                        </li>
                        <li>
                          <Link href="/service/marketing">Marketing</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-xl-3">
                      <ul>
                        <li>
                          <span className="menu-title">Who We Offer Services To</span>
                        </li>
                        <li>Startups</li>
                        <li>Enterprises</li>
                        <li>Non-Profits</li>
                        <li>Agencies</li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-xl-3">
                      <ul>
                        <li>
                          <Link href="/service/website-development">Website Development</Link>
                        </li>
                        <li>
                          <Link href="/service/web-app-development">Web App Development</Link>
                        </li>
                        <li>
                          <Link href="/service/progressive-web-apps">Progressive Web App (PWA)</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-xl-3">
                      <ul>
                        <li>
                          <Link href="/service/graphic-design">Graphic Design</Link>
                        </li>
                        <li>
                          <Link href="/service/software-development">Software Development</Link>
                        </li>
                        <li>
                          <Link href="/service/seo-services">SEO Services</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu-item-has-children">
                <Link href="/about" onClick={()=>router.push('/about')}>About</Link>
              </li>

              {/* Development Mega Menu */}
              <li className="menu-item-has-children mega-menu">
                <Link href="#">Development</Link>
                <div className="sub-menu">
                  <div className="row">
                    <div className="col-lg-3 col-xl-3">
                      <ul>
                        <li>
                          <span className="menu-title">Technologies</span>
                        </li>
                        <li><Link href="/development/ai">AI</Link></li>
                        <li><Link href="/development/blockchain">Blockchain</Link></li>
                        <li><Link href="/development/iot">IoT</Link></li>
                        <li><Link href="/development/data-science">Data Science</Link></li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-xl-3">
                      <ul>
                        <li>
                          <span className="menu-title" style={{ fontWeight:"bold" }}>Industries</span>
                        </li>
                        <li>E-Governance</li>
                        <li>Finance</li>
                        <li>Healthcare</li>
                        <li>E-Commerce</li>
                        <li>Electric Vehicle</li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-xl-3">
                      <ul>
                        <li>
                          <span className="menu-title" style={{ fontWeight:"bold" }}>Languages</span>
                        </li>
                        <li><Link href="/development/javascript">JavaScript</Link></li>
                        <li><Link href="/development/python">Python</Link></li>
                        <li><Link href="/development/kotlin">Kotlin</Link></li>
                        <li><Link href="/development/swift">Swift</Link></li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-xl-3">
                      <ul>
                        <li>
                          <span className="menu-title">Platforms</span>
                        </li>
                        <li><Link href="/development/web">Web</Link></li>
                        <li><Link href="/development/ios">IOS</Link></li>
                        <li><Link href="/development/android">Android</Link></li>
                        <li><Link href="/development/cross-platform">Cross-platform</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/testimonial">Testimonial</Link>
              </li>
              <li className="menu-item-has-children">
                <a href="/Career" onClick={()=>router.push('/Career')}>Career</a>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <a href="tel:+18085550111" className="btn" style={{ backgroundColor: '#80ce2d' }}>
                  Schedule a Call
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* navbar end */}
    </>
  );
};

export default NavBar;
