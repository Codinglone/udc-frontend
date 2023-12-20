import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from '../components/SectionTitle';
import project from "../assets/carousel5.jpg"
import project1 from "../assets/project7.jpg"
AOS.init();

const About = () => {
  return (
    <div className='overflow-hidden'>
           <div className='grid justify-center items-center'>
        <div className="absolute z-50 w-full pt-24 text-2xl lg:pt-0 font-bold text-white lg:h-[45vh]">
        <h1 className="my-14 lg:text-7xl text-white text-center font-medium lg:pl-24 lg:py-40 z-20">
          About Us
        </h1>
        </div>
        <img
          src={project}
          className="max-h-[60vh] object-cover min-w-[100vw]"
        />
      </div>
      <div className='mx-6 flex flex-col lg:flex-row' id='2aboutus' data-aos="fade-up"
    data-aos-duration={2000}>
      <div className='lg:w-1/2 w-full my-6 lg:my-10 border-4 bg-blue-600'>
        <img src={project1} alt="project" className='max-h-[100vh] object-cover m-10'/>
      </div>
      <div className="lg:w-[44%] w-full lg:ml-20 lg:my-28 border-green-100" id="about">
      <SectionTitle titleText="Who We Are?" serviceCentered={true} />
        <p className="lg:my-10 leading-loose  text-[18px]  text-[#777777]">
        We are dynamic Architectural design and Construction firm with a team of professionals,
brings together a wealth expertise and Experience to Create stunning, functional Structures. We
prioritize your collaboration and aim to create spaces that truly reflect your vision And Dreams.
        </p>
      </div>
      </div>
      <div className='flex justify-center gap-4'>
       <div className='rounded-xl lg:mx-auto lg:p-8 bg-blue-800 w-1/3 lg:h-60'id='1aboutus' data-aos="fade-up"
    data-aos-duration={1500}>
      <h1 className='font-extrabold text-white text-xl mb-4'>MOTIVATION</h1>
        <p className='font-medium text-white text-[16px] mb-4'>Dedicated to creating exceptional spaces that inspire and exceed expectations. With a focus on collaboration, innovation,
           and sustainability, we turn dreams into reality, delivering outstanding residential, commercial, and hospitality projects.
           Join us on this exciting journey where luxury design meets sustainability.</p>
       </div>
       <div className='my-20 rounded-xl lg:mx-auto lg:p-8 bg-yellow-300 w-1/3 lg:h-60'id='1aboutus' data-aos="fade-up"
    data-aos-duration={1500}>
      <h1 className='font-extrabold text-white text-xl mb-4'>MISSION</h1>
        <p className='font-medium text-white text-[16px] mb-4'>Our mission is to create exceptional spaces that embody our clients' dreams through
       modern design, luxury, and sustainable practices. We prioritize collaboration, innovation,
       and quality to deliver outstanding residential, commercial, and hospitality projects that 
       exceed expectations.</p>
       </div>
       <div className='my-36 rounded-xl lg:mx-auto lg:p-8 bg-blue-800 w-1/3 lg:h-60'id='1aboutus' data-aos="fade-up"
    data-aos-duration={1500}>
      <h1 className='font-extrabold text-white text-xl mb-4'>VISION</h1>
        <p className='font-medium text-white text-[16px] mb-4'> To be the leading provider of luxury design and construction services, integrating client
        aspirations, innovative architectural concepts, and sustainable practices to create exceptional
         spaces that inspire and exceed expectations.</p>
       </div>
       </div>
    </div>
    
  )
}

export default About
