import React from 'react'
import Description from '../components/Description'
import SectionTitle from '../components/SectionTitle'
import TeamTitle from '../components/TeamTitle'
import Team from '../components/Team'

const About = () => {
  return (
    <div>
           <div className='grid justify-center items-center'>
        <div className="bg-gray-800 absolute z-50 opacity-50 w-full h-[40vh]"></div>
        <img
          src="src/assets/project.jpg"
          className="max-h-[40vh] object-cover min-w-[98vw]"
        />
       
      </div>
      <div className='my-8 mx-6 flex'>
      <div className='w-1/2 my-14 border-8 border-indigo-600'>
        <img src="src/assets/project.jpg" alt="" className='max-h-[120vh] object-cover m-14'/>
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
       <div className='bg-blue-900 w-full h-96'>
       <h1>Mission</h1>
        <p></p>
       </div>
        <div>
        <TeamTitle />
        <Team />
        </div>
    </div>
    
  )
}

export default About