import NewProjects from "../components/NewProjects";
import project3 from "../assets/project7.jpg";
import project7 from "../assets/project5.jpg";
import project1 from "../assets/carousel6.jpg";
import project11 from "../assets/project1.jpg";
import project9 from "../assets/project9.jpg";
import project8 from "../assets/homepage.jpg";
import project2 from "../assets/singlefloor.jpg";
import homepage from "../assets/homepage.jpg";
import project from "../assets/project.jpg";
import project5 from "../assets/project5.jpg";
import project10 from "../assets/carousel-1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Projects() {
  return (
    <>
      <div
        className="mt-28 opacity-4 lg:h-[45vh] h-12"
        style={{
          backgroundImage: `url(${homepage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <h1 className="lg:text-7xl text-white text-center text-2xl font-bold lg:font-medium lg:pl-24 lg:py-32 z-20">
          Projects
        </h1>
      </div>

      <div
        className="flex flex-wrap lg:px-6 py-2 justify-between items-center"
        id="project"
        data-aos="fade-up"
        data-aos-duration={2000}
      >
        <div className="shadow-lg max-h-[480px] lg:w-[30vw] w-full mt-8 overflow-hidden">
          <div>
            <img
              src={project3}
              className="object-cover w-full h-[250px]"
              alt="#"
            />
          </div>
          <div>
            <h2 className="text-3xl text-gray-900 py-2 px-8">
              Apartments
            </h2>
            <p className="text-[#777777] text-[15.0385px] text-justify px-8 pb-8">
              Kicukiro mixed-use building with Apartments, bars and restaurants.
            </p>
          </div>
        </div>
        <div className="shadow-lg max-h-[480px]  lg:w-[30vw] w-full mt-8 overflow-hidden">
          <div>
            <img
              src={project7}
              className="object-cover w-full h-[250px]"
              alt="#"
            />
          </div>
          <div>
            <h2 className="text-3xl text-gray-900 py-2 px-8">
            The modern home
            </h2>
            <p className="text-[#777777] text-[15.0385px] text-justify px-8 pb-8">
              Rebero modern home with the best penthouse.
            </p>
          </div>
        </div>
        <div className="shadow-lg max-h-[480px]  lg:w-[30vw] w-full mt-8 overflow-hidden">
          <div>
            <img
              src={project8}
              className="object-cover w-full h-[250px]"
              alt="#"
            />
          </div>
          <div>
            <h2 className="text-3xl text-gray-900 py-2 px-8">
              Home Design
            </h2>
            <p className="text-[#777777] text-[15.0385px] text-justify px-8 pb-8">
              Huye affordable home design.
            </p>
          </div>
        </div>
        <div className="shadow-lg max-h-[480px]  lg:w-[30vw] w-full mt-8 overflow-hidden">
          <div>
            <img
              src={project}
              className="object-cover w-full h-[250px]"
              alt="#"
            />
          </div>
          <div>
            <h2 className="text-3xl text-gray-900 py-2 px-8">Hotel</h2>
            <p className="text-[#777777] text-[15.0385px] text-justify px-8 pb-8">
              Beautiful Hotel designed with the Kivu Lake great views.
            </p>
          </div>
        </div>
        <div className="shadow-lg max-h-[480px]  lg:w-[30vw] w-full mt-8 overflow-hidden">
          <div>
            <img
              src={project2}
              className="object-cover w-full h-[250px]"
              alt="#"
            />
          </div>
          <div>
            <h2 className="text-3xl text-gray-900 py-2 px-8">Single Floor</h2>
            <p className="text-[#777777] text-[15.0385px] text-justify px-8 pb-8">
              Nice and affordable single floor home in Bujumbura.
            </p>
          </div>
        </div>
        <div className="shadow-lg max-h-[480px]  lg:w-[30vw] w-full mt-8 overflow-hidden">
          <div>
            <img
              src={project11}
              className="object-cover w-full h-[250px]"
              alt="#"
            />
          </div>
          <div>
            <h2 className="text-3xl text-gray-900 py-2 px-8">
              Modern Home
            </h2>
            <p className="text-[#777777] text-[15.0385px] text-justify px-8 pb-8">
              Kabuga modern home design.
            </p>
          </div>
        </div>
        <div className="shadow-lg max-h-[480px]  lg:w-[30vw] w-full mt-8 overflow-hidden">
          <div>
            <img
              src={project1}
              className="object-cover w-full h-[250px]"
              alt="#"
            />
          </div>
          <div>
            <h2 className="text-3xl text-gray-900 py-2 px-8">
              Exterior cozyness
            </h2>
            <p className="text-[#777777] text-[15.0385px] text-justify px-8 pb-8">
              The beauty of a modern home with exterior cozyness!
            </p>
          </div>
        </div>
        <div className="shadow-lg max-h-[480px]  lg:w-[30vw] w-full mt-8 overflow-hidden">
          <div>
            <img
              src={project9}
              className="object-cover w-full h-[250px]"
              alt="#"
            />
          </div>
          <div>
            <h2 className="text-3xl text-gray-900 py-2 px-8">
              Residential Apartment
            </h2>
            <p className="text-[#777777] text-[15.0385px] text-justify px-8 pb-8">
              The modern residential Apartment in Kara.
            </p>
          </div>
        </div>
        <div className="shadow-lg max-h-[480px]  lg:w-[30vw] w-full mt-8 overflow-hidden">
          <div>
            <img
              src={project10}
              className="object-cover w-full h-[250px]"
              alt="#"
            />
          </div>
          <div>
            <h2 className="text-3xl text-gray-900 py-2 px-8">
              A Commercial Building
            </h2>
            <p className="text-[#777777] text-[15.0385px] text-justify px-8 pb-8">
            A commercial building with expensive balconies designed in a modern contemporary style.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
