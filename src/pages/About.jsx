import React from 'react'
import Description from '../components/Description'
import SectionTitle from '../components/SectionTitle'

const About = () => {
  return (
    <div>
       {/* <div
      className="my-16 mx-6 w-full flex justify-between"
      data-aos="fade-up"
      data-aos-duration={1500}
    >
      <div className="w-1/2">
        <img src="src/assets/aboutuspage.jpg" alt="Photo" className="rounded-sm" />
      </div>
      <div className="w-[44%] ml-8" id="about">
        <SectionTitle title="" titleText="OUR MISSION" />
        <p className="my-2 font-bold text-blue-900">
        Our mission is to create exceptional spaces that embody
         our clients' dreams through modern design, luxury, and 
         sustainable practices. We prioritize collaboration, 
         innovation, and quality to deliver outstanding residential,
         commercial, and hospitality projects that exceed expectations.
        </p>
        <SectionTitle title="" titleText="OUR VISION" />
        <p className="my-2 font-bold text-blue-900">
        To be the leading provider of luxury design and construction 
        services, integrating client aspirations, innovative architectural
        concepts, and sustainable practices to create exceptional spaces 
        that inspire and exceed expectations.
        </p>
      </div>
    </div> */}
        {/* <SectionTitle title="" titleText="OUR VALUES" />
        <p className="my-2 font-bold text-blue-900">
          At Universal Design and Construction Ltd, we specialize in creating
          innovative and transformative spaces that meet the unique needs of our
          clients.
        </p> */}
        <Description />
    </div>
    
  )
}

export default About