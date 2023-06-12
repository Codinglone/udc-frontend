import React from 'react'

const SectionTitle = ({ title, titleText, serviceCentered }) => {
  return (
    <div className="section-title">
        {serviceCentered ? <h3 className="text-blue-900 font-bold text-xl mb-2 text-center">
            {title}
          </h3> : <h3 className="text-blue-900 font-bold text-xl mb-2">
            {title}
          </h3>}
          
          <h1 className="text-5xl font-bold text-blue-700">
            {titleText}
          </h1>
        </div>
  )
}

export default SectionTitle