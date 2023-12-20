// import CountUp from "react-countup";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import VisibilitySensor from "react-visibility-sensor";
// const Status = () => {
//   AOS.init();
//   return (
//     <>
//       <div className="my-12 w-full hidden lg:flex" data-aos="fade-up" data-aos-duration="2000">
//         <div className="w-1/2 bg-blue-900 flex justify-between px-4 py-8">
//           <div>
//             <CountUp redraw={true} end={100} duration={10}>
//               {({ countUpRef, start }) => (
//                 <VisibilitySensor onChange={start} delayedCall>
//                   <span
//                     className="text-white text-6xl font-bold"
//                     ref={countUpRef}
//                   />
//                 </VisibilitySensor>
//               )}
//             </CountUp>
//             <br />
//             <span className="font-semibold text-lg text-yellow-300">
//               {" "}
//               EXPERT ENGINEERS & <br /> PROJECT MANAGERS
//             </span>
//           </div>
//           <div>
//           <CountUp redraw={true} end={180} duration={10}>
//               {({ countUpRef, start }) => (
//                 <VisibilitySensor onChange={start} delayedCall>
//                   <span
//                     className="text-white text-6xl font-bold"
//                     ref={countUpRef}
//                   />
//                 </VisibilitySensor>
//               )}
//             </CountUp>
//             <br />
//             <span className="font-semibold text-lg text-yellow-300">
//               CLIENTS
//             </span>
//           </div>
//         </div>
//         <div className="w-1/2 bg-yellow-300 flex justify-between px-4 py-8">
//           <div>
//           <CountUp redraw={true} end={200} duration={10}>
//               {({ countUpRef, start }) => (
//                 <VisibilitySensor onChange={start} delayedCall>
//                   <span
//                     className="text-blue-900 text-6xl font-bold"
//                     ref={countUpRef}
//                   />
//                 </VisibilitySensor>
//               )}
//             </CountUp>
//             <br />
//             <span className="font-semibold text-lg text-white">
//               COMPLETED PROJECTS
//             </span>
//           </div>
//           <div>
//           <CountUp redraw={true} end={20} duration={5}>
//               {({ countUpRef, start }) => (
//                 <VisibilitySensor onChange={start} delayedCall>
//                   <span
//                     className="text-blue-900 text-6xl font-bold"
//                     ref={countUpRef}
//                   />
//                 </VisibilitySensor>
//               )}
//             </CountUp>
//             <br />
//             <span className="font-semibold text-lg text-white">
//               RUNNING PROJECTS
//             </span>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// };

// export default Status;

import React, { useState } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import VisibilitySensor from "react-visibility-sensor";

const Status = () => {
  const [countersStarted, setCountersStarted] = useState(false);

  AOS.init();

  const handleVisibilityChange = (isVisible) => {
    if (isVisible && !countersStarted) {
      setCountersStarted(true);
    }
  };

  return (
    <>
      <div
        className="my-16 w-full hidden lg:flex"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="w-1/2 bg-blue-800 flex justify-between px-4 py-8">
          <div>
            <CountUp end={6} duration={10}>
              {({ countUpRef, start }) => (
                <VisibilitySensor
                  onChange={(isVisible) => handleVisibilityChange(isVisible)}
                  delayedCall
                >
                  <span className="text-white text-6xl font-bold" ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <br />
            <span className="font-semibold text-lg text-yellow-300">
              Outreached <br /> Countries
            </span>
          </div>
          <div>
            <CountUp end={180} duration={20}>
              {({ countUpRef, start }) => (
                <VisibilitySensor
                  onChange={(isVisible) => handleVisibilityChange(isVisible)}
                  delayedCall
                >
                  <span className="text-white text-6xl font-bold" ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <br />
            <span className="font-semibold text-lg text-yellow-300">
              CLIENTS
            </span>
          </div>
        </div>
        <div className="w-1/2 bg-yellow-300 flex justify-between px-4 py-8">
          <div>
            <CountUp end={200} duration={20}>
              {({ countUpRef, start }) => (
                <VisibilitySensor
                  onChange={(isVisible) => handleVisibilityChange(isVisible)}
                  delayedCall
                >
                  <span className="text-blue-800 text-6xl font-bold" ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <br />
            <span className="font-semibold text-lg text-white">
              COMPLETED PROJECTS
            </span>
          </div>
          <div>
            <CountUp end={20} duration={10}>
              {({ countUpRef, start }) => (
                <VisibilitySensor
                  onChange={(isVisible) => handleVisibilityChange(isVisible)}
                  delayedCall
                >
                  <span className="text-blue-800 text-6xl font-bold" ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <br />
            <span className="font-semibold text-lg text-white">
              RUNNING PROJECTS
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Status;
