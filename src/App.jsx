import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import Description from "./components/Description"
import Status from "./components/Status"
import Services from "./components/Services"
import ServicesTab from "./components/ServicesTab"
import Footer from "./components/Footer"
import Portfolio from "./components/Portfolio"
import Gallery from "./components/Gallery"
import Partners from "./components/Partners"
import PartnersTitle from "./components/PartnersTitle"
import TeamTitle from "./components/TeamTitle"
import Team from "./components/Team"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
    {/* <main className=" overflow-hidden">
    <Navbar />
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
    <Footer /> */}
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
    </>
   
  )
}

export default App
