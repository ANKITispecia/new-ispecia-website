import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const TeamAreaFour = () => {
  return (
    <>
      {/*====================== team area start ======================*/}
      <div
        className='team-area bg-relative pd-top-60 pd-bottom-100'
        style={{ backgroundColor: '#1e1e1e' }}
      >
        <div className='container'>
          <div className='section-title text-center style-white'>
            <h6 className='text-white mb-3 bg-none'>Dedicated team</h6>
            <h2 className='title'>Data Security is Our Top Priority</h2>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner style-3 text-center'>
                <div className='thumb'>
                <img src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="img"  style={{width:"350px", height:"340px", backgroundSize:"cover"}} />
                  <ul className='team-social-inner'>
                    <li>
                      <Link href='#'>
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                    <Link href='/team-details'>Kathryn Murphy</Link>
                  </h5>
                  <p>Merketing Department</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner style-3 text-center'>
                <div className='thumb'>
                <img src="https://img.freepik.com/free-photo/young-adult-man-wearing-hoodie-beanie_23-2149393636.jpg" alt="img" style={{width:"350px", height:"340px", backgroundSize:"cover"}}/>
                  <ul className='team-social-inner'>
                    <li>
                      <Link href='#'>
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                    <Link href='/team-details'>Kathryn Murphy</Link>
                  </h5>
                  <p>Merketing Department</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner style-3 text-center'>
                <div className='thumb'>
                  <img  src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
                    alt="img"
                    style={{width:"350px", height:"340px"}} />
                  <ul className='team-social-inner'>
                    <li>
                      <Link href='#'>
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                    <Link href='/team-details'>Kathryn Murphy</Link>
                  </h5>
                  <p>Merketing Department</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================== team area end ======================*/}
    </>
  );
};

export default TeamAreaFour;
