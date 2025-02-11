import React from 'react'
import BannerOne from '../BannerOne'
import CompaniesData from '../CompaniesData/CompaniesData'
import CallToAction from '../CallToAction/CallToAction'

const Industries = () => {
  return (
    <>
    <div className='industries-main' style={{marginTop:"50px"}}>
    <BannerOne/>
    <CompaniesData />
   
    <CallToAction />
   </div>
    </>
  )
}

export default Industries