// // import React from "react";
// // import AOS from "aos";
// // import "aos/dist/aos.css";
// // import project2 from "../assets/project2.jpg"
// // AOS.init();

// // const Contact = () => {
// //   return (
// //     <>
// //       <div
// //         className="lg:grid py-2 justify-center items-center"
// //         id="contactus"
// //         data-aos-duration={2000}
// //       >
// //         <div className="bg-gray-800 absolute z-50"></div>
// //         <img
// //           src={project2}
// //           className="h-[1000px] object-cover min-w-[98vw]"
// //         />
// //       </div>
// //       <div
// //         className="flex absolute top-0 right-10"
// //         id="2contactus"
// //         data-aos-duration={2000}
// //       >
// //         <div className="mt-64">
// //           <h1 className="mt-6 font-extrabold lg:px-[8vw] text-white text-2xl z-50">
// //             CALL US ON
// //             <br />
// //             <span className="text-white text-md dark:text-gray-400 text-2xl font-bold">
// //               +250-780-242-519
// //             </span>
// //           </h1>
// //           <h1 className="mt-20 lg:px-[8vw] text-white text-2xl font-extrabold">
// //             {" "}
// //             EMAIL :<br />
// //             <span className="text-white text-md dark:text-gray-400 text-2xl font-bold">
// //               {" "}
// //               universaldesignandcons@gmail.com
// //             </span>
// //           </h1>
// //           <h1 className="mt-14 font-extrabold lg:px-[8vw]  text-white text-2xl z-50">
// //             FOLLOW US ON
// //           </h1>
// //           <div className="flex lg:px-[8vw]">
// //             <a
// //               href="https://instagram.com/udc.ltd?igshid=NTc4MTIwNjQ2YQ=="
// //               className="text-white hover:text-gray-400 dark:hover:text-white"
// //             >
// //               <svg
// //                 className="w-10 h-10"
// //                 fill="currentcolor"
// //                 viewBox="0 0 24 24"
// //                 aria-hidden="true"
// //               >
// //                 <path
// //                   fill-rule="evenodd"
// //                   d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
// //                   clip-rule="evenodd"
// //                 />
// //               </svg>
// //               <span className="sr-only">Instagram page</span>
// //             </a>
// //             <a
// //               href="https://twitter.com/udc_ltd_rw?s=11&t=G_K-2j6VehuI_IK7huZdcA"
// //               className="text-white hover:text-gray-400 dark:hover:text-white"
// //             >
// //               <svg
// //                 className="w-10 h-10 ml-6"
// //                 fill="currentcolor"
// //                 viewBox="0 0 24 24"
// //                 aria-hidden="true"
// //               >
// //                 <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
// //               </svg>
// //               <span className="sr-only">Twitter page</span>
// //             </a>
// //             <a
// //               href="#"
// //               className="text-white hover:text-gray-400 dark:hover:text-white"
// //             >
// //               <svg
// //                 className="w-10 h-10 ml-6"
// //                 fill="currentcolor"
// //                 viewBox="0 0 24 24"
// //                 aria-hidden="true"
// //               >
// //                 <path
// //                   fill-rule="evenodd"
// //                   d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
// //                   clip-rule="evenodd"
// //                 />
// //               </svg>
// //               <span className="sr-only">Facebook page</span>
// //             </a>
// //           </div>
// //           <h1 className="font-extrabold py-20 lg:px-[8vw]  text-white text-2xl z-50">
// //             LOCATION
// //             <br />
// //             <span className="dark:text-gray-400 font-bold text-2xl">
// //               {" "}
// //               190 KK 15 Rd, Kigali
// //             </span>
// //           </h1>
// //         </div>
// //         <div className="w-2/5 py-48 ml-56 text-white space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
// //           <section className="justify-center items-center p-8 mx-auto bg-white rounded-md shadow-xl dark:bg-gray-800 mt-10">
// //             <h1 className="text-2xl pb-4 font-extrabold text-blue-700 capitalize dark:text-white">
// //               Contact Us
// //             </h1>
// //             <form onSubmit={(e) => e.preventDefault()}>
// //               <div className="flex flex-wrap">
// //                 <div className="w-1/2">
// //                   <label className="text-black text-lg dark:text-gray-200  font-bold">
// //                     Firstname
// //                   </label>
// //                   <input
// //                     type="text"
// //                     className="block w-full px-4 py-3 mt-4 text-gray-700 font-none bg-gray-100 border-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
// //                   />
// //                 </div>
// //                 <div className="w-1/2 pl-5">
// //                   <label className="text-black text-lg dark:text-gray-200 font-bold ">
// //                     Lastname
// //                   </label>
// //                   <input
// //                     type="text"
// //                     className="block w-full px-4 py-3 mt-4 text-gray-700 font-none bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
// //                   />
// //                 </div>
// //                 <div className="w-1/2 pt-2">
// //                   <label className="text-black text-lg dark:text-gray-200  font-bold">
// //                     Email Address
// //                   </label>
// //                   <input
// //                     type="email"
// //                     className="block w-full px-4 py-3 mt-4 text-gray-700 font-none bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
// //                   />
// //                 </div>
// //                 <div className="w-1/2 pl-5 pt-2">
// //                   <label className="text-black text-lg dark:text-gray-200 font-bold ">
// //                     Phone Number
// //                   </label>
// //                   <input
// //                     type="number"
// //                     className="block w-full px-4 py-3 mt-4 text-gray-700 font-none bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
// //                   />
// //                 </div>
// //                 <div className="w-2/2 w-full pt-4">
// //                   <label className="text-black text-lg dark:text-gray-200 font-bold ">
// //                     Write your message here
// //                   </label>
// //                   <textarea className=" w-full h-[12rem] py- mt-4 text-gray-700 bg-gray-100 font-none border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
// //                 </div>
// //                 <div className="flex justify-center mt-6">
// //                   <button className="px-10 py-5 leading-5 text-lg font-bold text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-[gold] focus:outline-none focus:bg-gray-600">
// //                     Submit
// //                   </button>
// //                 </div>
// //               </div>
// //             </form>
// //           </section>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Contact;

// import React from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import project2 from "../assets/project2.jpg";
// import { useEffect } from "react";

// const Contact = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <>
//       <div
//         className="lg:grid py-2 justify-center items-center"
//         id="contactus"
//         data-aos-duration={2000}
//       >
//         <div className="bg-gray-800 absolute z-50"></div>
//         <img
//           src={project2}
//           className="h-[1000px] object-cover min-w-[98vw]"
//           alt="project"
//         />
//       </div>
//       <div
//         className="flex flex-col lg:flex-row absolute top-0 right-10"
//         id="2contactus"
//         data-aos-duration={2000}
//       >
//         <div className="mt-10 lg:mt-64 lg:ml-16">
//           <h1 className="mt-6 font-extrabold lg:px-8 text-white text-2xl z-50">
//             CALL US ON
//             <br />
//             <span className="text-white text-md dark:text-gray-400 text-2xl font-bold">
//               +250-780-242-519
//             </span>
//           </h1>
//           <h1 className="mt-10 lg:px-8 text-white text-2xl font-extrabold">
//             EMAIL :
//             <br />
//             <span className="text-white text-md dark:text-gray-400 text-2xl font-bold">
//               universaldesignandcons@gmail.com
//             </span>
//           </h1>
//           <h1 className="mt-10 font-extrabold lg:px-8 text-white text-2xl z-50">
//             FOLLOW US ON
//           </h1>
//           <div className="flex lg:px-8">
//             <a
//               href="https://instagram.com/udc.ltd?igshid=NTc4MTIwNjQ2YQ=="
//               className="text-white hover:text-gray-400 dark:hover:text-white"
//             >
//               <svg
//                 className="w-10 h-10"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 {/* Instagram icon SVG */}
//               </svg>
//               <span className="sr-only">Instagram page</span>
//             </a>
//             <a
//               href="https://twitter.com/udc_ltd_rw?s=11&t=G_K-2j6VehuI_IK7huZdcA"
//               className="text-white hover:text-gray-400 dark:hover:text-white ml-6"
//             >
//               <svg
//                 className="w-10 h-10"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 {/* Twitter icon SVG */}
//               </svg>
//               <span className="sr-only">Twitter page</span>
//             </a>
//             <a
//               href="#"
//               className="text-white hover:text-gray-400 dark:hover:text-white ml-6"
//             >
//               <svg
//                 className="w-10 h-10"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 {/* Facebook icon SVG */}
//               </svg>
//               <span className="sr-only">Facebook page</span>
//             </a>
//           </div>
//           <h1 className="font-extrabold py-10 lg:px-8 text-white text-2xl z-50">
//             LOCATION
//             <br />
//             <span className="dark:text-gray-400 font-bold text-2xl">
//               190 KK 15 Rd, Kigali
//             </span>
//           </h1>
//         </div>
//         <div className="w-full lg:w-2/5 py-12 lg:py-48 ml-0 lg:ml-56 text-white space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
//           <section className="justify-center items-center p-8 mx-auto bg-white rounded-md shadow-xl dark:bg-gray-800 mt-10">
//             <h1 className="text-2xl pb-4 font-extrabold text-blue-700 capitalize dark:text-white">
//               Contact Us
//             </h1>
//             <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//               {/* Form Inputs */}
//             </form>
//           </section>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import project2 from "../assets/project2.jpg";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <img
          src={project2}
          className="h-screen w-full object-cover"
          alt="Project Background"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-center text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-4">
              Contact Us
            </h1>
            <p className="text-lg lg:text-xl">
              We'd love to hear from you. Reach out to us for any inquiries or
              collaboration.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <section
        data-aos="fade-up"
        data-aos-duration="2000"
        className="bg-gray-100 py-16"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-8">
            Our Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4">
                Call Us On
              </h3>
              <p className="text-lg lg:text-xl text-gray-700">
                +250-780-242-519
              </p>
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4">Email</h3>
              <p className="text-lg lg:text-xl text-gray-700">
                universaldesignandcons@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4">Location</h3>
              <p className="text-lg lg:text-xl text-gray-700">
                190 KK 15 Rd, Kigali
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        data-aos="fade-up"
        data-aos-duration="2000"
        className="bg-white py-16"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-8 text-center">
            Get In Touch
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="max-w-2xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Your Message
              </label>
              <textarea
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <div className="mt-8 text-center">
              <button className="px-8 py-4 bg-blue-700 text-white font-semibold rounded-md hover:bg-[gold] focus:outline-none focus:bg-gray-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
