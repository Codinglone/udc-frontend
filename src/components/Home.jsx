import Description from "./Description";
import Status from "./Status";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Gallery from "./Gallery";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <div className="grid justify-start items-start">
          <div className="bg-gray-800 absolute z-50 opacity-10 w-full h-[70vh]"></div>
          <img
            src="src/assets/PROJECT6.jpg"
            className="max-h-[70vh] object-cover min-w-[99vw]"
          />

          <h1 className="absolute font-extrabold font-sans lg:px-[3vw] text-white text-7xl z-50 py-24">
            UDC LTD
          </h1>
          <p className="absolute font-extrabold font-sans lg:px-[3vw] text-white text-6xl z-50 py-48">
            ENGINEERING <br /> WE LEAD!
          </p>
          <div className="absolute font-extrabold font-sans lg:px-[3vw] text-xl z-50 py-96">
            <button className="bg-blue-800 p-4 text-[gold]  rounded-md font-bold hover:text-blue-800 hover:bg-[gold] hover:border-[gold]">
              Book an appoint
            </button>
          </div>
        </div>

        <Description />
        <Services />

        {/* <div className="ml-40 gap-x-8 gap-y-4 grid grid-rows-2 grid-flow-col" id='servicesInfo' data-aos="fade-up"
    data-aos-duration={1500}>
      <h1 className="font-extrabold font-sans text-lg">Architectural & Interior Design</h1>
      <p className="w-1/2 font-bold text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima consequuntur, rem,
         repudiandaeiditate illo accusantium totam.</p>
      <h1 className="font-extrabold font-sans text-lg">Civil Engineering</h1>
      <p className="font-bold text-lg w-1/2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima consequuntur, rem,
         repudiandaeiditate illo accusantium totam.</p>
      <h1 className="font-extrabold font-sans text-lg">Cost Estimation & Quality Surveying</h1>
      <p className="w-1/2 font-bold text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima consequuntur, rem,
         repudiandaeiditate illo accusantium totam.</p>
      <h1 className="font-extrabold font-sans text-lg">Landing Surveying</h1>
      <p className="w-1/2 font-bold text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima consequuntur, rem,
         repudiandaeiditate illo accusantium totam.</p>
      </div> */}

        <div className="flex justify-between px-12">
          <div>
            <h1 className="text-[20px] font-extrabold text-black uppercase pb-4">Architecture Design</h1>
            <p className="text-justify pr-28 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              officiis adipisci facere reprehenderit? Ad enim cumque corporis
              est perspiciatis dolor!
            </p>
          </div>
          <div>
            <h1 className="text-[20px] font-extrabold text-black uppercase pb-4">Architecture Design</h1>
            <p className="text-justify pr-28 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              officiis adipisci facere reprehenderit? Ad enim cumque corporis
              est perspiciatis dolor!
            </p>
          </div>
          <div>
            <h1 className="text-[20px] font-extrabold text-black uppercase pb-4">Architecture Design</h1>
            <p className="text-justify pr-28 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              officiis adipisci facere reprehenderit? Ad enim cumque corporis
              est perspiciatis dolor!
            </p>
          </div>
        </div>

        <Portfolio />
        {/* <Gallery />  */}
        <div
          className="my-12 grid grid-cols-3"
          data-aos="fade-up"
          data-aos-duration={1500}
        >
          <img src="src/assets/project.jpg" alt="" className="" />
          <img src="src/assets/project2.jpg" alt="" className="" />
          <img src="src/assets/project3.jpg" alt="" className="" />
          <img src="src/assets/project4.jpg" alt="" className="" />
          <img src="src/assets/project7.jpg" alt="" className="" />
          <img src="src/assets/carousel-3.jpg" alt="" className="" />
          <img src="src/assets/project5.jpg" alt="" className="" />
          <img src="src/assets/project6.jpg" alt="" className="" />
        </div>
        <div></div>
        <Status />
      </main>
    </>
  );
}

export default Home;
