
import carousel1 from "../assets/carousel-1.jpeg";
import carousel2 from "../assets/carousel-2.jpeg";
import carousel3 from "../assets/carousel-3.jpg";
import carousel4 from "../assets/carousel-4.jpg";
import { Button } from 'flowbite-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const CarouselComponent = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <Slider {...settings} className="h-[80vh]">
    <div>
      <img src={carousel1} className="max-h-[80vh] object-cover min-w-[100vw]"/>
    </div>
    <div>
      <img src={carousel2} className="max-h-[80vh] object-cover min-w-[100vw]"/>
    </div>
    <div>
      <img src={carousel3} className="max-h-[80vh] object-cover min-w-[100vw]"/>
    </div>
    <div>
      <img src={carousel4} className="max-h-[80vh] object-cover min-w-[100vw]"/>
    </div>
  </Slider>
  );
};

export default CarouselComponent;
