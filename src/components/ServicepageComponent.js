'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import services from '@/app/service/[id]/service.json';
import Link from 'next/link';
import Loading from '@/app/loading';

const ServicepageComponent = ({ params }) => {
  const { id } = params;
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
    return <Loading />; 
  }

  if (!service) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Service not found!</div>;
  }

  return (
    <div className="container" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          display: 'block',
        }}
      >
        {/* Banner Image */}
        <img
          src="/assets/img/servicebanner.png" // Update with actual path
          alt={`${service.name} banner`}
          style={{ width: '100%', borderRadius: '12px 12px 0 0', marginBottom: '20px' }}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          {/* Description */}
          <div style={{ gridColumn: '1 / -1' ,padding:'3%'}}>
            <h1 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '20px' }}>{service.name}</h1>
            <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>{service.description}</p>

            <h2 style={{ fontSize: '1.5rem', fontWeight: '500', color: '#333', marginBottom: '10px' }}>
              Why Choose Us?
            </h2>
            <p style={{ color: '#777', marginBottom: '20px' }}>{service.whyChooseUs}</p>
          </div>

          {/* Feature List */}
          <div style={{padding:'3%'}}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '500', color: '#333', marginBottom: '10px' }}>
              Features
            </h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#666' ,gap:'10px'}}>
              {service.features.map((feature, index) => (
                <li key={index} style={{ marginBottom: '5px' }}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '500', color: '#333', marginBottom: '10px' ,}}>
              Technologies
            </h3>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', color: '#666',display:'flex', flexDirection:'column' }}>
              {service.technologies.map((tech, index) => (
                <li
                  key={index}
                  style={{
                    backgroundColor: '#f0f0f0',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    marginBottom: '5px',
                  }}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Team */}
          <div style={{padding:'3%'}}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '500', color: '#333', marginBottom: '10px' }}>
              Team
            </h3>
            {service.team.map((member, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div>
                  <p style={{ fontWeight: '600', color: '#333' }}>{member.name}</p>
                  <p style={{ color: '#666' }}>{member.title}</p>
                  <p style={{ fontSize: '0.875rem', color: '#888' }}>{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Other Services */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '500', color: '#333', marginBottom: '10px' }}>
              Other Services
            </h3>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              {services
                .filter((s) => s.id !== service.id)
                .map((otherService) => (
                  <li key={otherService.id} style={{ marginBottom: '10px' }}>
                    <Link href={`/service/${otherService.id}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>
                      {otherService.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    
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
    </div>
  );
};

export default ServicepageComponent;
