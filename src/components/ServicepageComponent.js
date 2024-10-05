'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import services from '@/app/service/[id]/service';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

const ServicepageComponent = ({ params }) => {
  const { id } = params; // Access the dynamic route parameter directly

  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundService = services.find(service => service.id === id);
      setService(foundService);
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>; // Handle loading state
  }

  if (!service) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Service not found!</div>; // Handle 404 state
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '20px', marginleft:'25px'}}>{service.name}</h1>
      <p style={{ marginBottom: '20px', marginleft:'25px' }}>{service.description}</p>
      <h2 style={{ marginBottom: '10px', marginleft:'25px' }}>{service.whyChooseUs}</h2>
      <h3 style={{ marginBottom: '20px', marginleft:'25px' }}>{service.contactText}</h3>

      {/* Dynamic Contact Area Section */}
      <div className='price-process-area pd-top-120'>
        <div className='contact-inner-1 contact-inner-2'>
          <div className='row'>
            <div
              className='col-lg-6'
              data-aos='fade-right'
              data-aos-delay='200'
              data-aos-duration='1500'
            >
              <img className='w-100' src='/assets/img/about/19.2.png' alt='img' style={{ borderRadius: '8px' }} />
            </div>
            <div
              className='col-lg-6'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
              style={{ padding: '20px' }}
            >
              <div className='section-title mb-0'>
                <h6 className='sub-title'>GET IN TOUCH</h6>
                <h2 className='title mb-4'>
                  Smarter Applications For The <span>Smarter</span> Individuals
                </h2>
                <form className="mt-4" style={{ marginTop: '20px' }}>
                  <div className="row" style={{ gap: '15px' }}>
                    <div className="col-lg-6">
                      <div className="single-input-inner style-border" style={{ marginBottom: '15px' }}>
                        <input type="text" placeholder="Name Here" style={{ width: '100%', padding: '10px' }} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-input-inner style-border" style={{ marginBottom: '15px' }}>
                        <input type="text" placeholder="Contact Here" style={{ width: '100%', padding: '10px' }} />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-input-inner style-border" style={{ marginBottom: '15px' }}>
                        <input type="text" placeholder="Email Here" style={{ width: '100%', padding: '10px' }} />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-input-inner style-border" style={{ marginBottom: '15px' }}>
                        <textarea placeholder="Message" style={{ width: '100%', padding: '10px', height: '100px' }} />
                      </div>
                    </div>
                    <div className="col-12">
                      <Link className="btn btn-border-gray mt-0" href="#" style={{ display: 'inline-flex', alignItems: 'center', padding: '10px 20px' }}>
                        Contact Us <FaPlus style={{ marginLeft: '8px' }} />
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Contact Area Section */}
    </div>
  );
};

export default ServicepageComponent;
