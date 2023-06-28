import aboutusImg from "../assets/aboutuspage.jpg";
import SectionTitle from "./SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Description = () => {
  return (
    <div
      className="my-16 mx-6 flex"
      data-aos="fade-up"
      data-aos-duration={1500}
    >
      <div className="w-1/2">
        <img src={aboutusImg} alt="Photo" 
        className="rounded-sm m-6" />
      </div>
      <div className="w-[44%] ml-16 my-3" id="about">

        <SectionTitle title="" titleText="WELCOME TO UDC!" />
        <p className="my-5 leading-7 text-justify text-neutral-900 text-lg">
        At Universal Design And Construction, Ltd., we understand that
        each client is unique and has distinct dreams and aspirations.
        We prioritize client collaboration and aim to create spaces that 
        truly reflect their vision. By engaging in open and transparent 
        communication, we ensure that our clients' needs are at the forefront
        of every decision.
        With a team of highly skilled architects, engineers, and construction
        professionals, Universal Design And Construction Ltd, brings together
        a wealth of expertise and experience to create stunning, functional, and
        sustainable structures. Our team possesses a deep understanding of modern
        architectural trends, incorporating luxurious aesthetics and green design
        principles into every project. Universal Design And Construction, Ltd. is 
        proud to have established a strong reputation for excellence, integrity, and
        customer satisfaction. 
          {/* At Universal Design and Construction Ltd, we specialize in creating
          innovative and transformative spaces that meet the unique needs of our
          clients. <br /> <i className="text-xl text-blue-800">MOTIVATION:</i> dedicated to creating exceptional spaces 
          that inspire and exceed expectations. With a focus on collaboration, innovation, and 
          sustainability, we turn dreams into reality, delivering outstanding residential, commercial, 
          and hospitality projects. Join us on this exciting journey where luxury design meets sustainability.
           Welcome to Universal Design And Construction, Ltd.!
          <br /><i className="text-xl text-blue-800">OUR GOALS:</i> Client Satisfaction, Excellence in Design and Construction, Sustainable Practices, Timely Project
           Delivery and Continuous Improvement.
          <br /><i className="text-xl text-blue-800">OUR VALUES:</i> Client-Centric Approach, Integrity and Transparency, Collaboration and Teamwork, Innovation and Creativity, */}
           {/* Sustainability and Environmental Responsibility and Quality and Craftsmanship. */}
          {/* <br /><i className="text-xl text-blue-800"> OUR MISSION IS:</i> to create exceptional spaces that embody
         our clients' dreams through modern design, luxury, and 
         sustainable practices. We prioritize collaboration, 
         innovation, and quality to deliver outstanding residential,
         commercial, and hospitality projects that exceed expectations.
         <br /><i className="text-xl text-blue-800">OUR VISION IS:</i> To be the leading provider of luxury design and construction 
        services, integrating client aspirations, innovative architectural
        concepts, and sustainable practices to create exceptional spaces 
        that inspire and exceed expectations. */}
        </p>
      </div>
    </div>
  );
};

export default Description;

