'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import services from './service';
import ServicepageComponent from '@/components/ServicepageComponent';
import Breadcrumb from '@/components/Breadcrumb';

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