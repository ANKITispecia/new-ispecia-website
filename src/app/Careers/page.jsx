
import AboutAreaThree from '@/components/AboutAreaThree';
import Breadcrumb from '@/components/Breadcrumb';
import CareerComponent from '@/components/CareerComponent';
import ContactAreaFour from '@/components/ContactAreaFour';
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