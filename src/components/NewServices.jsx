import React from "react";
import project from "../assets/project.jpg"
import project7 from "../assets/project7.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const NewServices = ({imgDir, title,content}) => {
    
  return (
    <section className="lg:px-24 px-16 py-24" id='services' data-aos="fade-up"
    data-aos-duration={2000}>

        {imgDir === 'right' ? (
      <div className="flex lg:flex-row flex-col lg:justify-between">
        
        <div className="flex flex-col lg:w-[45%] w-full">
          <h1 className="lg:text-4xl text-2xl text-blue-700 font-bold uppercase">{title}</h1>
          <p className="text-gray-900 text-justify pt-4 text-xl">{content}</p>
        </div>
        <div className="lg:w-[45%] w-full border-4 border-blue-700 h-[23vh] h-[49vh]">
          <img src={project7} className="ml-[-40px] mt-[-40px] object-cover" />
        </div>
      </div>
      ) : 

      <div className="flex lg:flex-row flex-col lg:justify-between">
        <div className="lg:w-[45%] w-full border-4 border-blue-700 h-[23vh] lg:h-[49vh]">
          <img src={project} className="lg:ml-[-40px] ml-[-20px] mt-[-40px] object-cover" />
        </div>
        <div className="flex flex-col lg:w-[45%] w-full">
          <h1 className="lg:text-4xl text-2xl my-8 lg:mt-0 text-blue-700 font-bold uppercase">{title}</h1>
          <p className="text-gray-900 text-justify pt-4 text-xl">{content}</p>
        </div>
      </div>

}
    </section>
  );
};

export default NewServices;
