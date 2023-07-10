import carousel3 from "../assets/carousel-3.jpg";
import SectionTitle from "./SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import CarouselComponent from "./Carousel";

AOS.init();
const Description = () => {
  return (
    <div
      className="my-6 mx-6 flex"
      data-aos="fade-up"
      data-aos-duration={2000}
    >
  
      <CarouselComponent />
      <div className="w-[44%] ml-16 my-7" id="about">

        <SectionTitle title="" titleText="WELCOME TO UDC!" />
        <p className="my-5 leading-loose text-justify text-xl">
        At Universal Design And Construction, Ltd., we understand that
        each client is unique and has distinct dreams and aspirations.
        We prioritize client collaboration and aim to create spaces that 
        truly reflect their vision. By engaging in open and transparent 
        communication, we ensure that our clients' needs are at the forefront
        of every decision.

        </p>
      </div>
    </div>
  );
};

export default Description;

