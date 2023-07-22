import React from 'react'
import Services from '../components/Services'
import ServicesTab from '../components/ServicesTab'
import project7 from '../assets/project7.jpg'

const ServicesPage = () => {
  return (
    <> 
            <div 
          style={{
            backgroundImage: `url(${project7})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '30vh',
            width: '100%',
          }}
        >
          <h1 className='lg:text-7xl text-white text-center font-bold lg:pl-24 lg:py-16 z-20'>Services</h1>
        </div>
         <div className='grid justify-center items-center'>
      </div>
    </>
  )
}

export default ServicesPage
