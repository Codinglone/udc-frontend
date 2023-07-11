import React from 'react'
import SectionTitle from './SectionTitle'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const TeamTitle = () => {
  return (
    <div className='flex justify-center my-10 items-center p-2' id='team' data-aos="fade-up"
    data-aos-duration={1500}>
      
        <SectionTitle titleText="Meet Our Team" title="" serviceCentered={true} />
        
    </div>

  )
}

export default TeamTitle