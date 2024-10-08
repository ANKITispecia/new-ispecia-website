import AboutAreaSeven from '@/components/AboutAreaSeven';
import AboutAreaSix from '@/components/AboutAreaSix';
import AboutAreaTwo from '@/components/AboutAreaTwo';
import Breadcrumb from '@/components/Breadcrumb';
import TestimonialAbout from '@/components/TestimonialAbout';
import TestimonialGrid from '@/components/Testmonialarea';
import React from 'react'

const Testimonial = () => {
  


  return (
    <>
    <Breadcrumb title={'Testimonial'} />
    <TestimonialAbout style={{ backgroundColor: 'white' }}/>
    <div className="container mt-5">
      <h1 className="text-center mb-5">Client Testimonials</h1>
      <TestimonialGrid/>
    <br/>
    <br/>
    </div>
    </>
  );
};



export default Testimonial