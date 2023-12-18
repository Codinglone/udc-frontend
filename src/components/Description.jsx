import SectionTitle from "./SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import homepic from '../assets/carousel-1.jpg'

AOS.init();
const Description = () => {
  return (
    <div
      className="lg:my-10 lg:my-8 flex flex-col lg:flex-row"
      data-aos="fade-up"
      data-aos-duration={2000}
    >
  
       <div className="w-1/2 px-6 lg:py-6">
          <img className="object-cover w-full" src={homepic} alt="home" />
        </div>
      <div className="lg:w-[44%] w-full lg:ml-8 lg:my-10" id="about">

        <SectionTitle titleText="Welcome To A World Of" /><br />
        <SectionTitle titleText="Your Dreams" />
        <p className="my-12 leading-loose text-[#777777] text-justify text-[18px]">
        At Universal Design And Construction Ltd we understand , that each Client is Unique and Has
        Distinct dreams and aspirations. we prioritize Client collaboration And Aim to create spaces
        that truly reflect their vision. with focus on innovation and sustainability we turn Dreams into
        Reality.
        </p>
        <p className="leading-loose text-[#777777] text-justify text-[18px]">
          Enginering we lead!
        </p>
      </div>
    </div>
  );
};

export default Description;

