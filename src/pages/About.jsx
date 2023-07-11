import React from 'react'
import Description from '../components/Description'
import SectionTitle from '../components/SectionTitle'
import TeamTitle from '../components/TeamTitle'
import Team from '../components/Team'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <div>
           <div className='grid justify-center items-center'>
        <div className="bg-gray-800 absolute z-50 opacity-30 w-full h-[35vh]"></div>
        <img
          src="src/assets/project.jpg"
          className="max-h-[35vh] object-cover min-w-[98vw]"
        />
       
      </div>
      <div className='my-8 mx-6 flex' id='2aboutus' data-aos="fade-up"
    data-aos-duration={2000}>
      <div className='w-1/2 my-14 border-4 border-blue-600'>
        <img src="src/assets/project.jpg" alt="" className='max-h-[120vh] object-cover m-10 pt-6'/>
      </div>
      <div className="w-[44%] ml-24 my-16 border-indigo-500" id="about">
        <SectionTitle title="" titleText="Our Story"/>
        <p className="my-6 leading-loose font-bold text-xl">
        With a team of highly skilled architects, engineers, and construction 
        professionals, Universal Design And Construction, Ltd. brings together a
         wealth of expertise and experience to create stunning, functional, and
          sustainable structures. Our team possesses a deep understanding of modern
         architectural trends, incorporating luxurious aesthetics and green design principles into every project.<br /><br />
            
         At Universal Design And Construction, Ltd., we understand that each client is
          unique and has distinct dreams and aspirations. We prioritize client collaboration
           and aim to create spaces that truly reflect their vision. By engaging in open and
            transparent communication, we ensure that our clients' needs are at the forefront of every decision. <br />
        </p>
      </div>
      </div>
      <div className='my-8 mx-6 flex' id='3aboutus' data-aos="fade-up"
    data-aos-duration={2000}>
        <div className="w-[42%] ml-5 my-18 border-indigo-500" id="about">
        <SectionTitle title="" titleText="Our Story"/>
        <p className="my-6 leading-loose font-bold text-xl">
        With a team of highly skilled architects, engineers, and construction 
        professionals, Universal Design And Construction, Ltd. brings together a
         wealth of expertise and experience to create stunning, functional, and
          sustainable structures. Our team possesses a deep understanding of modern
         architectural trends, incorporating luxurious aesthetics and green design principles into every project.<br /><br />
            
         At Universal Design And Construction, Ltd., we understand that each client is
          unique and has distinct dreams and aspirations. We prioritize client collaboration
           and aim to create spaces that truly reflect their vision. By engaging in open and
            transparent communication, we ensure that our clients' needs are at the forefront of every decision. <br />
        </p>
      </div>
      <div className='w-1/2 ml-24 border-4 border-[gold]'>
        <img src="src/assets/project.jpg" alt="" className='max-h-[120vh] object-cover m-10 pt-4'/>
      </div>
      </div>
       <div className='bg-blue-900 w-full h-96'id='1aboutus' data-aos="fade-up"
    data-aos-duration={1500}>
       <h1>Mission</h1>
        <p></p>
       </div>
        <div>
        <TeamTitle />
        <p className="ml-40 text-gray-700 font-bold text-xl pb-12" id='aboutus' data-aos="fade-up"
    data-aos-duration={1500}>Lorem ipsum dolor sit, amet
       consectetur adipisicing elit. Nisi unde
        ullam consequatur sunt consectetur quae 
        exercitationem expedita, ipsa iste 
        voluptatum impedit est eum esse labore
         nihil cupiditate maiores adipisci 
         deleniti!</p>
        <Team />
        </div>
    </div>
    
  )
}

export default About