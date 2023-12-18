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
            Our expert team specializes in providing
comprehensive planning solutions that maximize land use, promote sustainable
development, and enhance quality of life we embrace innovation and out -of- box
thinking to deliver unique inspiring designs.
            </p>
          </div>
          <div>
            <h1 className="text-[20px] text-black uppercase pt-8 lg:text-left text-center tracking-widest">
              Civil Engineering
            </h1>
            <p className="text-justify lg:text-left text-center text-[15.0385px]  text-[#777777] lg:pr-16 px-4 lg:px-0 pt-4">
            We undertake Civil Engineering And Infrastructure projects , by
Creating stable structure frames in modern Software’s by considering necessary loadings
factors and design that capable of withstanding applied loads , hence we unsure smooth
Construction on site , by implementing every single detail with proper construction
materials .
            </p>
          </div>
          <div>
            <h1 className="text-[20px] text-black uppercase pt-8 lg:text-left text-center tracking-widest">
              Land Surveying
            </h1>
            <p className="text-justify lg:text-left text-center text-[15.0385px]  text-[#777777] lg:pr-16 px-4 lg:px-0 pt-4">
            Our Design team never imagine terrain they follow Geo - Data brought
in office by our surveyors which help them To determine your plot boundaries and
zoning and also help you get all the necessary information about your land and
properties.
            </p>
          </div>
          <div>
            <h1 className="text-[20px] text-black uppercase pt-8 lg:text-left text-center tracking-widest">
              Cost Estimation
            </h1>
            <p className="text-justify lg:text-left text-center text-[15.0385px]  text-[#777777] lg:pr-16 px-4 lg:px-0 pt-4">
            As starting point of every project and key point for any estimate
we work under client Budget and meet envision Building, by taking into consideration,
skilled labor and defined material Specification by utilizing well detailed drawings.
            </p>
          </div>
        </div>
        <Status />
      </main>
    </>
  );
}

export default Home;
