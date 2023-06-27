import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import Status from "./components/Status"

import ServicesTab from "./components/ServicesTab"
import Footer from "./components/Footer"
import Portfolio from "./components/Portfolio"
import Gallery from "./components/Gallery"
import Partners from "./components/Partners"
import PartnersTitle from "./components/PartnersTitle"
import TeamTitle from "./components/TeamTitle"
import Home from "./components/Home"
import About from "./pages/About"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Projects from "./pages/Projects"
import Services from "./pages/Services"
import TeamPage from "./pages/Team"
import Contact from "./pages/Contact"

function App() {

  return (
    <>
   
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/contacts" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>
    </>
   
  )
}

export default App
