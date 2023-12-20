import carousel1 from "../assets/carousel-1.jpg";
import carousel2 from "../assets/carousel6.jpg";
import carousel3 from "../assets/carousel-4.jpg";
import carousel4 from "../assets/carousel7.jpg";

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
    <div className="w-full">
    <Slider {...settings} className="lg:h-[110vh]">
      
      <div>
        <img
          src={carousel2}
          className="my-8 max-h-[90vh] object-cover min-w-[100vw]"
        />
      
      </div>
      <div>
        <img
          src={carousel3}
          className="my-8 max-h-[100vh] object-cover min-w-[100vw]"
        />
       
      </div>
      <div>
        <img
          src={carousel1}
          className="my-8 max-h-[100vh] object-cover min-w-[100vw]"
        />
       
      </div>
      <div>
        <img
          src={carousel4}
          className="my-8 max-h-[100vh] object-cover min-w-[100vw]"
        />
       
      </div>
      
    </Slider>
    </div>
  );
};

export default CarouselComponent;
