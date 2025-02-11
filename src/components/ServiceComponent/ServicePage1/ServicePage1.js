import React from 'react'
import './ServicePage1.css'

const ServicePage1 = () => {
  return (
    <>
   <section className='our-process'>
    <div className='process-area'>
    <h2 style={{color:'#86c445', fontFamily:"'Montserrat' serif", fontOpticalSizing:"auto",fontWeight:"bold" }} >OUR PROCESS</h2>
    <p>Unlock your true potential, leverage the best of technology, and create applications based on a modern algorithm with our experts.</p>
    </div>
    <div className='process-img'>
   <img src='assets/img/service/ourProcess.gif' alt='img' />
    </div>
   </section>
    </>
  )
}

export default ServicePage1;