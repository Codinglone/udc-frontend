import React from "react";
import project from "../assets/Civil Engineering 2.jpg"
import project7 from "../assets/Archtecural pics.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const NewServices = ({imgDir, title,content}) => {
    
  return (
    <section className="lg:px-24 px-6 py-24" id='services' data-aos="fade-up"
    data-aos-duration={2000}>

        {imgDir === 'right' ? (
      <div className="flex lg:flex-row flex-col lg:justify-around">
        
        <div className="flex flex-col lg:w-[45%] w-full">
          <h1 className="lg:text-4xl text-2xl text-blue-700 font-medium uppercase">{title}</h1>
          <p className="text-[18] text-justify pt-4  text-[#777777]">{content}</p>
        </div>
        <div className="lg:w-[35%] w-full border-4 border-yellow-300 h-[80vh] lg:h-[45vh]">
          <img src={project7} className="ml-[-60px] lg:w-[95%] mt-[-40px] object-cover" />
        </div>
      </div>
      ) : 

      <div className="flex lg:flex-row flex-col lg:justify-around">
        <div className="lg:w-[45%] w-full border-4 border-yellow-300 h-[20vh] lg:h-[40vh]">
          <img src={project} className="lg:ml-[-40px] ml-[-20px] mt-[-40px] object-cover" />
        </div>
        <div className="flex flex-col lg:w-[45%] w-full">
          <h1 className="lg:text-4xl text-2xl my-8 lg:mt-0 text-blue-700 font-medium uppercase">{title}</h1>
          <p className="text-[#777777] text-justify pt-4 text-[18x]">{content}</p>
        </div>
      </div>

}

    </section>
  );
};

export default NewServices;
