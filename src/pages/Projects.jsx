import NewProjects from "../components/NewProjects";
import project3 from "../assets/project3.jpg";
import project7 from "../assets/project7.jpg";
import homepage from "../assets/homepage.jpg";
import project from "../assets/project.jpg";
import project5 from "../assets/project5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Projects() {
  return (
    <>
      <div
        className="mt-28 opacity-4 lg:h-[34vh] h-12"
        style={{
          backgroundImage: `url(${homepage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <h1 className="lg:text-7xl text-white text-center font-bold lg:pl-24 lg:py-28 z-20">
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
              Sawa Citi supermarket
            </h2>
            <p className="text-[#777777] text-[15.0385px] text-justify px-8 pb-8">
              “The stationary yacht” is our way of describing the building for
              the yacht envelope design. Its appearance is both stunning and
              eye-catching in a way that it will attract customers to the
              coolest looking supermarket in Kigali city. Lorem ipsum dolor sit
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
              dream sports complex
            </h2>
            <p className="text-[#777777] text-[15.0385px] text-justify px-8 pb-8">
              We started working on a project that will see an abandoned sand
              quarry located in Kinyinya transformed into a world-class sporting
              and leisure venue with a school, rooftop running tracks, a hotel,
              private villas, and a large fish pond.
            </p>
          </div>
        </div>
        <div className="shadow-lg max-h-[480px]  lg:w-[30vw] w-full mt-8 overflow-hidden">
          <div>
            <img
              src={project5}
              className="object-cover w-full h-[250px]"
              alt="#"
            />
          </div>
          <div>
            <h2 className="text-3xl text-gray-900 py-2 px-8">
              The modern villa
            </h2>
            <p className="text-[#777777] text-[15.0385px] text-justify px-8 pb-8">
              The villa is designed on a spacious plot, fully maximized and
              functional with 4 self-contained bedrooms and dining with double
              volume in the interior. The exterior has underground parking, a
              swimming pool, a bar, and great views near the Atlantic Ocean.
            </p>
          </div>
        </div>
        <div className="shadow-lg max-h-[480px]  lg:w-[30vw] w-full mt-8 overflow-hidden">
          <div>
            <img
              src={project3}
              className="object-cover w-full h-[250px]"
              alt="#"
            />
          </div>
          <div>
            <h2 className="text-3xl text-gray-900 py-2 px-8">Luxury Palace</h2>
            <p className="text-[#777777] text-[15.0385px] text-justify px-8 pb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore voluptate voluptates sed minus quod numquam doloribus
              eos autem recusandae? Optio, totam. Repudiandae quo inventore
              itaque facilis reprehenderit obcaecati nulla autem dolore.
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
            <h2 className="text-3xl text-gray-900 py-2 px-8">Amazing Villa</h2>
            <p className="text-[#777777] text-[15.0385px] text-justify px-8 pb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore voluptate voluptates sed minus quod numquam doloribus
              eos autem recusandae? Optio, totam. Repudiandae quo inventore
              itaque facilis reprehenderit obcaecati nulla autem dolore.
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
            <h2 className="text-3xl text-gray-900 py-2 px-8">
              Stunning Building
            </h2>
            <p className="text-[#777777] text-[15.0385px] text-justify px-8 pb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore voluptate voluptates sed minus quod numquam doloribus
              eos autem recusandae? Optio, totam. Repudiandae quo inventore
              itaque facilis reprehenderit obcaecati nulla autem dolore.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
