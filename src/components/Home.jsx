import Description from "./Description";
import Status from "./Status";
import Services from "./Services";
import Portfolio from "./Portfolio";
import { PhotoAlbum } from "react-photo-album";
import project from "../assets/project.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project7 from "../assets/project7.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import carousel3 from "../assets/carousel-3.jpg";
import homepic from "../assets/homepic.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const photos = [
  { src: project, width: 800, height: 600 },
  { src: project2, width: 800, height: 600 },
  { src: project3, width: 800, height: 600 },
  { src: project4, width: 800, height: 600 },
  { src: project7, width: 800, height: 600 },
  { src: project6, width: 800, height: 600 },

];

function Home() {
  return (
    <>
      <main className="overflow-hidden mt-36">
        <div className="w-full px-6 lg:py-6">
          <img className="object-cover w-full" src={homepic} alt="home" />
        </div>
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
              The way we design does not follow a rigid formula or cookie cutter
              process. We question everything during the process and are always
              looking for better materials, methods and options.
            </p>
          </div>
          <div>
            <h1 className="text-[20px] text-black uppercase pt-8 lg:text-left text-center tracking-widest">
              Civil Engineering
            </h1>
            <p className="text-justify lg:text-left text-center text-[15.0385px]  text-[#777777] lg:pr-16 px-4 lg:px-0 pt-4">
              With good engineering knowledge, we can create great structures
              that are stable and durable at the same time beautiful and truly
              inspiring.
            </p>
          </div>
          <div>
            <h1 className="text-[20px] text-black uppercase pt-8 lg:text-left text-center tracking-widest">
              Land Surveying
            </h1>
            <p className="text-justify lg:text-left text-center text-[15.0385px]  text-[#777777] lg:pr-16 px-4 lg:px-0 pt-4">
              We seek to understand the nature of the terrain, form, topography
              to soil type and how buildings and environment can coexist
              together harmoniously.
            </p>
          </div>
          <div>
            <h1 className="text-[20px] text-black uppercase pt-8 lg:text-left text-center tracking-widest">
              Cost Estimation
            </h1>
            <p className="text-justify lg:text-left text-center text-[15.0385px]  text-[#777777] lg:pr-16 px-4 lg:px-0 pt-4">
              We seek to understand the nature of the terrain, form, topography
              to soil type and how buildings and environment can coexist
              together harmoniously.
            </p>
          </div>
        </div>

        <Portfolio />
        <div className="w-full flex flex-col lg:flex-row lg:px-6 lg:flex-wrap lg:justify-between">
          {
            photos.map(photo => (
              <img src={photo.src} className="w-full lg:w-[31vw] my-4 lg:my-2 h-[70vh] object-cover" alt="album-photo" />
            ))
          }
        </div>
        <Status />
      </main>
    </>
  );
}

export default Home;
