import carousel1 from "../assets/carousel-1.jpeg";
import carousel2 from "../assets/carousel-2.jpeg";
import carousel3 from "../assets/carousel-3.jpg";
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
        <div className="bg-black absolute z-50 opacity-30 w-full h-[80vh]"></div>
        <img
          src={carousel2}
          className="max-h-[80vh] object-cover min-w-[100vw]"
        />
        <h2 className="absolute top-28 text-white text-4xl w-full lg:px-[38vw] z-50">
          We Are Professional
        </h2>
        <h1 className="absolute top-48 font-extrabold  lg:px-[12vw]  text-white text-7xl z-50">Let us manage your project!</h1>
        <button className="absolute border-2 px-4 py-2 border-white top-80 lg:ml-[42vw]  text-white text-lg z-50 hover:border-[gold] hover:text-[gold]">LET'S WORK TOGETHER</button>
      </div>
      <div>
        <div className="bg-black absolute z-50 opacity-30 w-full h-[80vh]"></div>
        <img
          src={carousel1}
          className="max-h-[80vh] object-cover min-w-[100vw]"
        />
        <h2 className="absolute top-28 text-white text-4xl  lg:px-[38vw] z-50">
        Professional Design
        </h2>
        <h1 className="absolute top-48 font-extrabold  lg:px-[12vw]  text-white text-7xl z-50">We visulize your dream goals!</h1>
        <button className="absolute border-2 px-4 py-2 border-white top-80 lg:ml-[42vw]  text-white text-lg z-50 hover:border-[gold] hover:text-[gold]">LET'S WORK TOGETHER</button>
      </div>
      <div>
        <div className="bg-black absolute z-50 opacity-30 w-full h-[80vh]"></div>
        <img
          src={carousel3}
          className="max-h-[80vh] object-cover min-w-[100vw]"
        />
        <h2 className="absolute top-28 text-white text-4xl  lg:px-[38vw] z-50">
        Professional Supervision
        </h2>
        <h1 className="absolute top-48 font-extrabold  lg:px-[12vw]  text-white text-7xl z-50">Beyond your dreams limit!</h1>
        <button className="absolute border-2 px-4 py-2 border-white top-80 lg:ml-[42vw]  text-white text-lg z-50 hover:border-[gold] hover:text-[gold]">LET'S WORK TOGETHER</button>
      </div>
      
    </Slider>
  );
};

export default CarouselComponent;
