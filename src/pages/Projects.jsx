import Portfolio from "../components/Portfolio";
import Gallery from "../components/Gallery";

function Projects() {
  return (
    <>
             <div className='grid justify-center items-center'>
        <div className="bg-gray-800 absolute z-50 opacity-30 w-full h-[35vh]"></div>
        <img
          src="src/assets/project3.jpg"
          className="max-h-[35vh] object-cover min-w-[98vw]"
        />
       
      </div>

      <Portfolio />
      <Gallery />
    </>
  );
}

export default Projects;
