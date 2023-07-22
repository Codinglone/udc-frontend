import NewProjects from "../components/NewProjects";
import project3 from "../assets/project3.jpg";
import project7 from "../assets/project7.jpg";
import project5 from "../assets/project5.jpg"
function Projects() {
  return (
    <>
      {/* <div className='grid justify-center items-center'>
        <div className="bg-gray-800 absolute z-50 opacity-30 w-full h-[35vh]"></div>
        <img
          src="src/assets/project3.jpg"
          className="max-h-[35vh] object-cover min-w-[98vw]"
        />
       
      </div> */}
      <div
        style={{
          backgroundImage: `url(${project3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "30vh",
          width: "100%",
        }}
      >
        <h1 className="lg:text-7xl text-white text-center font-bold lg:pl-24 lg:py-16 z-20">
          Projects
        </h1>
      </div>

      <div className="flex flex-wrap px-12 py-12">
        <div className="shadow-lg w-1/3 pt-8">
          <div>
            <img src={project3} className="object-cover" alt="#" />
          </div>
          <div>
            <h2 className="text-3xl text-gray-900 py-2 px-8">Luxury Palace</h2>
            <p className="text-gray-800 text-justify px-8 pb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore voluptate voluptates sed minus quod numquam doloribus
              eos autem recusandae? Optio, totam. Repudiandae quo inventore
              itaque facilis reprehenderit obcaecati nulla autem dolore.
              Perspiciatis provident fugiat voluptatum hic consequuntur
              molestias. Placeat, eaque quae! Iste doloribus veniam omnis
            </p>
          </div>
        </div>
        <div className="shadow-xl w-1/3 pt-8">
          <div>
            <img src={project7} className="object-cover" alt="#" />
          </div>
          <div>
            <h2 className="text-3xl text-gray-900 py-2 px-8">Amazing Villa</h2>
            <p className="text-gray-800 text-justify px-8 pb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore voluptate voluptates sed minus quod numquam doloribus
              eos autem recusandae? Optio, totam. Repudiandae quo inventore
              itaque facilis reprehenderit obcaecati nulla autem dolore.
              Perspiciatis provident fugiat voluptatum hic consequuntur
              molestias. Placeat, eaque quae! Iste doloribus veniam omnis
            </p>
          </div>
        </div>
        <div className="shadow-lg w-1/3 pt-8">
          <div>
            <img src={project5} className="object-cover" alt="#" />
          </div>
          <div>
            <h2 className="text-3xl text-gray-900 py-2 px-8">Stunning Building</h2>
            <p className="text-gray-800 text-justify px-8 pb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore voluptate voluptates sed minus quod numquam doloribus
              eos autem recusandae? Optio, totam. Repudiandae quo inventore
              itaque facilis reprehenderit obcaecati nulla autem dolore.
              Perspiciatis provident fugiat voluptatum hic consequuntur
              molestias. Placeat, eaque quae! Iste doloribus veniam omnis
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
