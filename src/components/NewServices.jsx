import React from "react";
import project from "../assets/project.jpg"
import project7 from "../assets/project7.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const NewServices = ({imgDir, title,content}) => {
    
  return (
    <section className="px-24 py-24" id='services' data-aos="fade-up"
    data-aos-duration={2000}>

        {imgDir === 'right' ? (
      <div className="flex justify-between">
        
        <div className="flex flex-col w-[45%]">
          <h1 className="text-4xl text-blue-700 font-bold uppercase">{title}</h1>
          <p className="text-gray-900 text-justify pt-4 text-xl">{content}</p>
        </div>
        <div className="w-[45%] border-4 border-blue-700 h-[49vh]">
          <img src={project7} className="ml-[-40px] mt-[-40px] object-cover" />
        </div>
      </div>
      ) : 

      <div className="flex justify-between">
        <div className="w-[45%] border-4 border-blue-700 h-[49vh]">
          <img src={project} className="ml-[-40px] mt-[-40px] object-cover" />
        </div>
        <div className="flex flex-col w-[45%]">
          <h1 className="text-4xl text-blue-700 font-bold uppercase">{title}</h1>
          <p className="text-gray-900 text-justify pt-4 text-xl">{content}</p>
        </div>
      </div>

}
    </section>
  );
};

export default NewServices;
