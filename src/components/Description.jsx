import carousel3 from "../assets/carousel-3.jpg";
import SectionTitle from "./SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import CarouselComponent from "./Carousel";

AOS.init();
const Description = () => {
  return (
    <div
      className="my- mx-6 flex"
      data-aos="fade-up"
      data-aos-duration={2000}
    >
  
      <CarouselComponent />
      <div className="w-[44%] ml-16 my-7" id="about">

        <SectionTitle title="" titleText="WELCOME TO UDC!" />
        <p className="my-5 leading-loose text-justify text-xl">
        As a company, we are dedicated to continuous improvement, staying abreast of industry advancements,
         and embracing innovation. We foster a collaborative and inclusive work environment that encourages 
         teamwork, creativity, and professional growth. Universal Design And Construction, Ltd. is proud to 
         have established a strong reputation for excellence, integrity, and customer satisfaction. With a track 
         record of successful projects, we have earned the trust of clients who seek exceptional design, meticulous
          construction, and a partner who values their dreams.

        </p>
      </div>
    </div>
  );
};

export default Description;

