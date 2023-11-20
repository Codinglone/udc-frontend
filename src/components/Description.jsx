import SectionTitle from "./SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import CarouselComponent from "./Carousel";

AOS.init();
const Description = () => {
  return (
    <div
      className="mx-6 flex flex-col lg:flex-row"
      data-aos="fade-up"
      data-aos-duration={2000}
    >
  
      <CarouselComponent />
      <div className="lg:w-[44%] w-full lg:ml-16 lg:my-8" id="about">

        <SectionTitle titleText="WELCOME TO UDC!" />
        <p className="my-5 leading-loose text-[#777777] text-justify text-[15.0385px]">
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

