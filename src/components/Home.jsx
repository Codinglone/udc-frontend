import Carousel from "./Carousel"
import Description from "./Description"
import Status from "./Status"
import Services from "./Services"
import ServicesTab from "./ServicesTab"
import Portfolio from "./Portfolio"
import Gallery from "./Gallery"
import Partners from "./Partners"
import PartnersTitle from "./PartnersTitle"
import TeamTitle from "./TeamTitle"
import Team from "./Team"


function Home() {

  return (
    <>
    <main className=" overflow-hidden bg-gradient-to-r from-indigo-50">
    <div className='grid justify-center items-center'>
        <div className="bg-gray-800 absolute z-50 opacity-10 w-full h-[80vh]"></div>
        <img
          src="src/assets/PROJECT6.jpg"
          className="max-h-[80vh] object-cover min-w-[99vw]"
        />
       <h1 className="absolute font-extrabold font-sans lg:px-[12vw]  text-white text-7xl z-50">
      THE ROAD TO SUCCESS<br /> IS ALWAYS UNDER<br /> CONSTUCTION!</h1>
      </div>
    {/* <Carousel /> */}
     <Description />
     <Services />
     <ServicesTab />
     <Portfolio />
     <Gallery />
     {/* <PartnersTitle />
     <Partners /> */}
     <TeamTitle />
     <Team />
     <Status />
    </main>
    </>
   
  )
}

export default Home
