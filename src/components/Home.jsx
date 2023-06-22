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
    <main className=" overflow-hidden">
    <Carousel />
     <Description />
     <Status />
     <Services />
     <ServicesTab />
     <Portfolio />
     <Gallery />
     <PartnersTitle />
     <Partners />
     <TeamTitle />
     <Team />
    </main>
    </>
   
  )
}

export default Home
