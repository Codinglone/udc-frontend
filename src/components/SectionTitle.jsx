import React from 'react'

const SectionTitle = ({ title, titleText, serviceCentered }) => {
  return (
    <div className="section-title">
        {serviceCentered ? <h3 className="text-blue-900 font-medium lg:text-[45.1521px] text-lg mb-2 text-center">
            {title}
          </h3> : <h3 className="text-blue-900 font-medium lg:text-[45.1521px] text-lg mb-2">
            {title}
          </h3>}
          
        <h1 className="lg:text-[45.1521px] text-xl mt-8 lg:mt-0 font-medium text-blue-700">
            {titleText}
          </h1>
        </div>
  )
}

export default SectionTitle