
import React from 'react';


import ServicepageComponent from '@/components/ServicepageComponent';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: "Service || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};

const ServicePage = ({ params }) => {
  

  return (
    <div>
    <Breadcrumb title={`Service / ${params.id}`} />
    <ServicepageComponent params={params} />
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
  );
};

export default ServicePage;