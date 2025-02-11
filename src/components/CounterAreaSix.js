'use client'
import React from 'react';
import TrackVisibility from 'react-on-screen';
import CountUp from 'react-countup';
const CounterAreaSix = () => {
  return (
    <>
      {/* counter area start */}
      <div className="counter-area bg-black-ico bg-relative pd-top-60" style={{ backgroundImage: 'url("https://www.shutterstock.com/shutterstock/photos/2274412231/display_1500/stock-vector-many-rainbow-gradient-random-bright-soft-balls-background-colorful-balls-background-for-kids-zone-2274412231.jpg")' }}>
        <div className="container">
          <div className="bg-base-9 border-radius-5 pt-xl-5 pt-4 position-relative z-index-2 mg-bottom---120">
            <div className="row">
              <div
                className="col-lg-3 col-md-6 wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                <div className="single-counter-inner text-center">
                  <div className="thumb">
                    <img src="assets/img/home-9/9.png" alt="img" />
                  </div>
                  <h2 className="text-white mt-4 mb-2">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter">
                            <CountUp delay={0} start={0} end={850} /> +
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="text-white">Projects Done</p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                <div className="single-counter-inner text-center">
                  <div className="thumb">
                    <img src="assets/img/home-9/10.png" alt="img" />
                  </div>
                  <h2 className="text-white mt-4 mb-2">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter">
                            <CountUp delay={0} start={0} end={25} /> +
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="text-white">Team member</p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <div className="single-counter-inner text-center">
                  <div className="thumb">
                    <img src="assets/img/home-9/11.png" alt="img" />
                  </div>
                  <h2 className="text-white mt-4 mb-2">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter">
                            <CountUp delay={0} start={0} end={330} /> +
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="text-white">Active Clients</p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <div className="single-counter-inner text-center">
                  <div className="thumb">
                    <img src="assets/img/home-9/12.png" alt="img" />
                  </div>
                  <h2 className="text-white mt-4 mb-2">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter">
                            <CountUp delay={0} start={0} end={10} /> +
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="text-white">Glorious Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* counter area end */}
    </>
  );
};

export default CounterAreaSix;
