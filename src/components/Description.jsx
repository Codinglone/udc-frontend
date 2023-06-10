import carousel3 from "../assets/carousel-3.jpg";

const Description = () => {
  return (
    <div className="my-24 mx-4 w-full flex ">
      <div className="w-1/2">
        <img src={carousel3} alt="Photo" />
      </div>
      <div className="w-[44%] ml-8" id="about">
        <h3 className="text-blue-900 font-bold text-xl mb-2">Welcome to UDC</h3>
        <h1 className="text-5xl font-bold text-blue-700">
          20 Years Of Experience
        </h1>
        <p className="my-2 font-bold text-blue-900">
          At Universal Design and Construction Ltd, we specialize in creating
          innovative and transformative spaces that meet the unique needs of our
          clients. As a leading construction company, we pride ourselves on
          delivering exceptional craftsmanship, outstanding quality, and
          unparalleled customer service. With a team of highly skilled
          professionals, we offer a comprehensive range of construction
          services, catering to both residential and commercial projects. From
          concept to completion, we ensure meticulous attention to detail,
          utilizing the latest industry techniques and materials to bring your
          vision to life. Our commitment to excellence extends beyond just
          building structures; we prioritize the principles of universal design
          in all our projects. 
        </p>
      </div>
    </div>
  );
};

export default Description;
