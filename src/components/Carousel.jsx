import { Carousel, Typography, Button } from "@material-tailwind/react";
import carousel1 from "../assets/carousel-1.jpeg"
import carousel2 from "../assets/carousel-2.jpeg"
import carousel3 from "../assets/carousel-3.jpg"
import carousel4 from "../assets/carousel-4.jpg"
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from "@coreui/react"

const CarouselComponent = () => {
  return (
    
    <CCarousel controls indicators transition="crossfade" interval={1000}>
  <CCarouselItem>
    <CImage className="d-block w-100" src={carousel1} alt="slide 1" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={carousel2} alt="slide 2" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Second slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={carousel3} alt="slide 3" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Third slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
</CCarousel>
  )
}

export default CarouselComponent