import React from 'react'
import Services from '../components/Services'
import ServicesTab from '../components/ServicesTab'

const ServicesPage = () => {
  return (
    <> 
         <div className='grid justify-center items-center'>
        <div className="bg-gray-800 absolute z-50 opacity-30 w-full h-[35vh]"></div>
        <img
          src="src/assets/project7.jpg"
          className="max-h-[35vh] object-cover min-w-[98vw]"
        />
       
      </div>
        <Services />
        <ServicesTab />
    </>
  )
}

export default ServicesPage
