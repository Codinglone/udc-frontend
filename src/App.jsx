import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import Description from "./components/Description"
import Status from "./components/Status"
import Services from "./components/Services"
import ServicesTab from "./components/ServicesTab"
import Footer from "./components/Footer"
import Portfolio from "./components/Portfolio"
function App() {

  return (
    <>
    <main className=" overflow-hidden">
    <Navbar />
    <Carousel />
     <Description />
     <Status />
     <Services />
     <ServicesTab />
     <Portfolio />
    </main>
    <Footer />
    </>
  )
}

export default App
