import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import Description from "./components/Description"
import Status from "./components/Status"
function App() {

  return (
    <main className=" overflow-hidden">
    <Navbar />
    <Carousel />
     <Description />
     <Status />
    </main>
  )
}

export default App
