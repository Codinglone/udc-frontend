import Description from "./Description";
import Status from "./Status";
import Services from "./Services";
import Portfolio from "./Portfolio";
import { PhotoAlbum } from "react-photo-album";
import project from "../assets/project.jpg"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpg"
import project4 from "../assets/project4.jpg"
import project7 from "../assets/project7.jpg"
import project5 from "../assets/project5.jpg"
import project6 from "../assets/project6.jpg"
import carousel3 from "../assets/carousel-3.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const photos = [
   { src: project, width: 800, height: 600 },
   { src: project2, width: 800, height: 600 },
   { src: project3, width: 800, height: 600 },
   { src: project4, width: 800, height: 600 },
   { src: project7, width: 800, height: 600 },
   { src: carousel3, width: 800, height: 600 },
   { src: project5, width: 800, height: 600 },
   { src: project6, width: 800, height: 600 },
   { src: carousel3, width: 800, height: 600 },
   { src: project5, width: 800, height: 600 },
   { src: project6, width: 800, height: 600 },
   { src: carousel3, width: 800, height: 600 },
   { src: project5, width: 800, height: 600 },
   { src: project6, width: 800, height: 600 },
   { src: carousel3, width: 800, height: 600 },
   { src: project5, width: 800, height: 600 },
   { src: project6, width: 800, height: 600 },
   { src: carousel3, width: 800, height: 600 },
   { src: project5, width: 800, height: 600 },
   { src: project6, width: 800, height: 600 },
   { src: carousel3, width: 800, height: 600 },
   { src: project5, width: 800, height: 600 },
   { src: project6, width: 800, height: 600 },
]

function Home() {
  return (
    <>
      <main className="overflow-hidden mt-44">
        <div className="grid justify-start items-start">
          <div className="bg-gray-800 absolute z-50 opacity-10 w-full h-[70vh]"></div>
          <img
            src="src/assets/PROJECT6.jpg"
            className="max-h-[76vh] object-cover min-w-[99vw]"
          />

          <h1 className="absolute font-extrabold font-sans lg:px-[3vw] text-white text-6xl z-50 py-24 tracking-widest">
            UDC LTD
          </h1>
          <p className="absolute font-extrabold font-sans lg:px-[3vw] text-white text-6xl z-50 py-44 tracking-widest">
            ENGINEERING <br /> WE LEAD!
          </p>
          <div className="absolute font-extrabold font-sans lg:px-[3vw] text-xl z-50 py-96">
            <button className="bg-blue-800 p-5 text-[gold]  rounded-sm font-bold hover:text-blue-800 hover:bg-[gold] hover:border-[gold]">
              Book an appoint
            </button>
          </div>
        </div>

        <Description />
        <Services />

        <div className="flex justify-between px-10" id="servicedetails" data-aos="fade-up"
      data-aos-duration={2000}>
          <div>
            <h1 className="text-[20px] font-extrabold text-black uppercase pt-8 tracking-widest">Architecture Design</h1>
            <p className="text-justify pr-16 text-gray-600 pt-4">
            The way we design does not follow a rigid formula or cookie cutter process. We question 
            everything during the process and are always looking for better materials, methods and options.
            </p>
          </div>
          <div>
            <h1 className="text-[20px] font-extrabold text-black uppercase pt-8 tracking-widest">Civil Engineering</h1>
            <p className="text-justify pr-16 text-gray-600 pt-4">
            With good engineering knowledge, we can create great structures that are stable and durable at 
            the same time beautiful and truly inspiring.
            </p>
          </div> 
          <div>
            <h1 className="text-[20px] font-extrabold text-black uppercase pt-8 tracking-widest">Land Surveying</h1>
            <p className="text-justify pr-16 text-gray-600 pt-4">
            We seek to understand the nature of the terrain, form, topography to soil type and how buildings 
            and environment can coexist together harmoniously.
            </p>
          </div>
          <div>
            <h1 className="text-[20px] font-extrabold text-black uppercase tracking-widest">Cost Estimation & Quality Surveying</h1>
            <p className="text-justify pr-6 text-gray-600 pt-4">
            We seek to understand the nature of the terrain, form, topography to soil type and how buildings 
            and environment can coexist together harmoniously.
            </p>
          </div>
        </div>

        <Portfolio />
        <PhotoAlbum layout="columns" photos={photos} />
        <Status />
      </main>
    </>
  );
}

export default Home;
