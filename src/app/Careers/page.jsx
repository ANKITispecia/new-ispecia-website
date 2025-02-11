
import AboutAreaThree from '@/components/AboutAreaThree';
import Breadcrumb from '@/components/Breadcrumb';

import ContactAreaFour from '@/components/ContactAreaFour';
import './CareerPage.css';
import React from 'react'
import AboutAreaTwo from '@/components/AboutAreaTwo';
import AboutAreaFour from '@/components/AboutAreaFour';
import BannerNine from '@/components/BannerNine';

export const metadata = {
  title: "About || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};
const page = () => {
  return (
    <div>
      <div className="careerBg">
    {/* <Breadcrumb title={'Careers'} className="breadCrumb"/> */}
    <BannerNine />
    </div>
    <AboutAreaThree/>
    <ContactAreaFour/>
    </div>
  )
}

export default page;

