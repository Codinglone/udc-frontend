import carousel1 from "../assets/project7.jpg";
import carousel2 from "../assets/project.jpg";
import carousel3 from "../assets/project5.jpg";
import carousel4 from "../assets/project3.jpg";

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
    <div className="w-1/2">
    <Slider {...settings} className="h-[70vh]">
      
      <div>
        {/* <div className="bg-black absolute z-50 opacity-30 w-full h-[70vh]"></div> */}
        <img
          src={carousel2}
          className="my-8 max-h-[65vh] object-cover min-w-[10vw]"
        />
      
      </div>
      <div>
        {/* <div className="bg-black absolute z-50 opacity-30 w-full h-[70vh]"></div> */}
        <img
          src={carousel3}
          className="my-8 max-h-[65vh] object-cover min-w-[10vw]"
        />
       
      </div>
      <div>
        {/* <div className="bg-black absolute z-50 opacity-0 w-full h-[60vh]"></div> */}
        <img
          src={carousel1}
          className="my-8 max-h-[65vh] object-cover min-w-[10vw]"
        />
       
      </div>
      <div>
        {/* <div className="bg-black absolute z-50 opacity-0 w-full h-[60vh]"></div> */}
        <img
          src={carousel4}
          className="my-8 max-h-[65vh] object-cover min-w-[10vw]"
        />
       
      </div>
      
    </Slider>
    </div>
  );
};

export default CarouselComponent;
