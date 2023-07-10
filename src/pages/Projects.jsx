import Portfolio from "../components/Portfolio";
import Gallery from "../components/Gallery";

function Projects() {
  return (
    <>
             <div className='grid justify-center items-center'>
        <div className="bg-gray-800 absolute z-50 opacity-50 w-full h-[40vh]"></div>
        <img
          src="src/assets/project3.jpg"
          className="max-h-[40vh] object-cover min-w-[98vw]"
        />
       
      </div>

      <Portfolio />
      <Gallery />
    </>
  );
}

export default Projects;
