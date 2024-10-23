'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import services from '@/app/service/[id]/service.json';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import Loading from '@/app/loading';

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
    return (
      <Loading/>
    ); // Handle loading state
  }

  if (!service) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>Service not found!</div>
    ); // Handle 404 state
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '20px', fontSize: '2rem' }}>{service.name}</h1>
      <p style={{ marginBottom: '20px', fontSize: '1rem', color: '#555' }}>{service.description}</p>

      {/* New Button Added Here */}
      

      <h2 style={{ marginBottom: '10px', fontSize: '1.5rem', color: '#333' }}>{service.whyChooseUs}</h2>
      <Link className="btn mt-0"
        href="/portfolio"  // Change this to the correct path for your portfolio
        style={{
          display: 'inline-block',
          marginBottom: '20px', // Margin bottom for spacing
          padding: '10px 20px',
          backgroundColor: '#87c349',
          color: 'white',
          borderRadius: '4px',
          textDecoration: 'none',
        }}
      >
        See Projects
      </Link>
      

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
        {/* Added margin-top to the image to push it down */}
        <img
          className='w-100'
          src='/assets/img/about/19.2.png'
          alt='img'
          style={{
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            marginTop: '20px', // Adjust this value as needed
          }}
        />
      </div>
      <div
        className='col-lg-6'
        data-aos='fade-left'
        data-aos-delay='100'
        data-aos-duration='1500'
        style={{ padding: '20px' }}
      >
        <div className='section-title mb-0'>
          <h6 className='sub-title' style={{ fontSize: '1.25rem', fontWeight: '600', color: '#3b82f6' }}>
          {service.contactText}
          </h6>
          <h2 className='title mb-4' style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>
            Smarter Applications For The <span style={{ color: '#3b82f6' }}>Smarter</span> Individuals
          </h2>
          <form className="mt-4" style={{ marginTop: '20px' }}>
            <div className="row" style={{ gap: '15px' }}>
              <div className="col-lg-6">
                <div className="single-input-inner style-border" style={{ marginBottom: '15px' }}>
                  <input type="text" placeholder="Name Here" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-input-inner style-border" style={{ marginBottom: '15px' }}>
                  <input type="text" placeholder="Contact Here" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-input-inner style-border" style={{ marginBottom: '15px' }}>
                  <input type="email" placeholder="Email Here" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-input-inner style-border" style={{ marginBottom: '15px' }}>
                  <textarea placeholder="Message" style={{ width: '100%', padding: '10px', height: '100px', borderRadius: '4px', border: '1px solid #ccc' }} />
                </div>
              </div>
              <div className="col-12">
                <Link
                  className="btn btn-border-gray mt-0"
                  href="#"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '10px 20px',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    borderRadius: '4px',
                    textDecoration: 'none',
                  }}
                >
                  Contact Us
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
