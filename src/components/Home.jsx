import Description from "./Description";
import Status from "./Status";
import Services from "./Services";
import homepic from "../assets/aboutpic.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import CarouselComponent from "./Carousel";
AOS.init();



function Home() {
  return (
    <>
      <main className="overflow-hidden mt-36">
        <CarouselComponent/>
        <Description />
        <Services />

        <div
          className="flex lg:flex-row lg:justify-between lg:flex-nowrap lg:px-10 justify-between w-full flex-wrap"
          id="servicedetails"
          data-aos="fade-up"
          data-aos-duration={2000}
        >
          <div>
            <h1 className="text-[20px] text-black uppercase pt-8 lg:text-left text-center tracking-widest">
              Architecture Design
            </h1>
            <p className="text-justify lg:text-left text-[15.0385px]  text-[#777777] text-center lg:pr-16 px-4 lg:px-0 pt-4">
            We focus on covering and meeting the needs and demands, to create living spaces, using certain tools and especially, creativity.
            </p>
          </div>
          <div>
            <h1 className="text-[20px] text-black uppercase pt-8 lg:text-left text-center tracking-widest">
              Civil Engineering
            </h1>
            <p className="text-justify lg:text-left text-center text-[15.0385px]  text-[#777777] lg:pr-16 px-4 lg:px-0 pt-4">
            We deal with the design, construction, and maintenance of the physical and naturally built environment
            </p>
          </div>
          <div>
            <h1 className="text-[20px] text-black uppercase pt-8 lg:text-left text-center tracking-widest">
              Land Surveying
            </h1>
            <p className="text-justify lg:text-left text-center text-[15.0385px]  text-[#777777] lg:pr-16 px-4 lg:px-0 pt-4">
            Establishing or reestablishing of parcels, preparing deed plans base on clients needs.
            </p>
          </div>
          <div>
            <h1 className="text-[20px] text-black uppercase pt-8 lg:text-left text-center tracking-widest">
              Cost Estimation
            </h1>
            <p className="text-justify lg:text-left text-center text-[15.0385px]  text-[#777777] lg:pr-16 px-4 lg:px-0 pt-4">
            Forecasting the financial and other resources needed to complete a project within a defined scope.
            </p>
          </div>
        </div>
        <Status />
      </main>
    </>
  );
}

export default Home;
