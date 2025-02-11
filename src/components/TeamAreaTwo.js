import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const TeamAreaTwo = () => {
  return (
    <>
      {/*====================== team area start ======================*/}
      <div
        className="team-area bg-relative pd-top-120 pd-bottom-90"
        style={{ backgroundImage: 'url("./assets/img/bg/12.png")' }}
      >
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">MEET OUR EXPERTS</h6>
            <h2 className="title text-white">
              Your Partner In <span>Digital</span> Success
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner style-2 text-center">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
                    alt="img"
                    style={{width:"410px", height:"450px"}}
                  />
                </div>
                <div className="details">
                  <div className="details-inner">
                    <h5>
                      <Link href="/team-details">Devon Lane</Link>
                    </h5>
                    <p>Merketing Department</p>
                    <ul className="team-social-inner mt-3 mb-1">
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner style-2 text-center">
                <div className="thumb">
                  <img src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="img"  style={{width:"410px", height:"450px", backgroundSize:"cover"}} />
                </div>
                <div className="details">
                  <div className="details-inner">
                    <h5>
                      <Link href="/team-details">Falcon Lane</Link>
                    </h5>
                    <p>Merketing Department</p>
                    <ul className="team-social-inner mt-3 mb-1">
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner style-2 text-center">
                <div className="thumb">
                  <img src="https://img.freepik.com/free-photo/young-adult-man-wearing-hoodie-beanie_23-2149393636.jpg" alt="img" style={{width:"410px", height:"450px", backgroundSize:"cover"}}/>
                </div>
                <div className="details">
                  <div className="details-inner">
                    <h5>
                      <Link href="/team-details">Wilson Jac</Link>
                    </h5>
                    <p>Merketing Department</p>
                    <ul className="team-social-inner mt-3 mb-1">
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
                    </ul>
                  </div>
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

export default TeamAreaTwo;
