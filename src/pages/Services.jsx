import React from "react";
import NewServices from "../components/NewServices";
import project7 from "../assets/project7.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ServicesPage = () => {
  return (
    <>
      <div
        className="mt-28"
        style={{
          backgroundImage: `url(${project7})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "34vh",
          width: "100%",
        }}
      >
        <h1 className="lg:text-7xl text-white text-center font-bold lg:pl-24 lg:py-28 z-20">
          Services
        </h1>
      </div>
      <div className="w-full flex lg:flex-row lg:justify-between flex-col">

      <NewServices
        imgDir={"left"}
        title={"Civil Engineering"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, eligendi. Voluptatibus neque temporibus maxime, soluta nihil, ibusdam iste ipsum voluptates ut deleniti facilis! Tenetur maiores nisi possimus et facere perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem impedit, veniam nihil quisquam aliquam temporibus! Quas ratione consectetur molestias nulla asperiores perferendis reiciendis. Iste tempore dolores suscipit culpa pariatur."
        }
      />
      <NewServices
        imgDir={"right"}
        title={"Land Surveying"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, eligendi. Voluptatibus neque temporibus maxime, soluta nihil, ibusdam iste ipsum voluptates ut deleniti facilis! Tenetur maiores nisi possimus et facere perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem impedit, veniam nihil quisquam aliquam temporibus! Quas ratione consectetur molestias nulla asperiores perferendis reiciendis. Iste tempore dolores suscipit culpa pariatur."
        }
      />
      <NewServices
        imgDir={"left"}
        title={"Architectural Design"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, eligendi. Voluptatibus neque temporibus maxime, soluta nihil, ibusdam iste ipsum voluptates ut deleniti facilis! Tenetur maiores nisi possimus et facere perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem impedit, veniam nihil quisquam aliquam temporibus! Quas ratione consectetur molestias nulla asperiores perferendis reiciendis. Iste tempore dolores suscipit culpa pariatur."
        }
      />
      <NewServices
        imgDir={"right"}
        title={"Cost Estimation & Quality Surveying"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, eligendi. Voluptatibus neque temporibus maxime, soluta nihil, ibusdam iste ipsum voluptates ut deleniti facilis! Tenetur maiores nisi possimus et facere perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem impedit, veniam nihil quisquam aliquam temporibus! Quas ratione consectetur molestias nulla asperiores perferendis reiciendis. Iste tempore dolores suscipit culpa pariatur."
        }
      />
      </div>
    </>
  );
};

export default ServicesPage;
