import AboutAreaEight from '@/components/AboutAreaEight';
import AboutAreaFour from '@/components/AboutAreaFour';
import AboutAreaOne from '@/components/AboutAreaOne';
import AboutAreaSeven from '@/components/AboutAreaSeven';
import AboutAreaThree from '@/components/AboutAreaThree';
import AboutAreaTwo from '@/components/AboutAreaTwo';
import Breadcrumb from '@/components/Breadcrumb';
import CareerComponent from '@/components/CareerComponent';
import ContactAreaFour from '@/components/ContactAreaFour';
import FaqAreaOne from '@/components/FaqAreaOne';
import FaqAreaThree from '@/components/FaqAreaThree';
import FaqAreaTwo from '@/components/FaqAreaTwo';
import React from 'react'

export const metadata = {
  title: "About || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};
const page = () => {
  return (
    <div>
    <Breadcrumb title='Career'/>
    <AboutAreaThree/>
    <CareerComponent/>
    
    <ContactAreaFour/>
    </div>
  )
}

export default page;