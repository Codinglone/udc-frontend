import React from 'react'
import Services from '../components/Services'
import ServicesTab from '../components/ServicesTab'

const ServicesPage = () => {
  return (
    <> 
         <div className='grid justify-center items-center'>
        <div className="bg-gray-800 absolute z-50 opacity-50 w-full h-[40vh]"></div>
        <img
          src="src/assets/project7.jpg"
          className="max-h-[40vh] object-cover min-w-[98vw]"
        />
       
      </div>
        <Services />
        <ServicesTab />
    </>
  )
}

export default ServicesPage
