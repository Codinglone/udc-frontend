import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import VisibilitySensor from "react-visibility-sensor";
const Status = () => {
  AOS.init();
  return (
    <>
      <div className="w-full flex" data-aos="fade-up" data-aos-duration="1000">
        <div className="w-1/2 bg-blue-900 flex justify-between px-4 py-8">
          <div>
            <CountUp redraw={true} end={20} duration={5}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span
                    className="text-white text-6xl font-bold"
                    ref={countUpRef}
                  />
                </VisibilitySensor>
              )}
            </CountUp>
            <br />
            <span className="font-semibold text-lg text-yellow-300">
              {" "}
              EXPERT ENGINEERS & <br /> PROJECT MANAGERS
            </span>
          </div>
          <div>
          <CountUp redraw={true} end={35} duration={5}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span
                    className="text-white text-6xl font-bold"
                    ref={countUpRef}
                  />
                </VisibilitySensor>
              )}
            </CountUp>
            <br />
            <span className="font-semibold text-lg text-yellow-300">
              HAPPY CLIENTS
            </span>
          </div>
        </div>
        <div className="w-1/2 bg-yellow-300 flex justify-between px-4 py-8">
          <div>
          <CountUp redraw={true} end={15} duration={5}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span
                    className="text-blue-900 text-6xl font-bold"
                    ref={countUpRef}
                  />
                </VisibilitySensor>
              )}
            </CountUp>
            <br />
            <span className="font-semibold text-lg text-white">
              COMPLETED PROJECTS
            </span>
          </div>
          <div>
          <CountUp redraw={true} end={20} duration={5}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span
                    className="text-blue-900 text-6xl font-bold"
                    ref={countUpRef}
                  />
                </VisibilitySensor>
              )}
            </CountUp>
            <br />
            <span className="font-semibold text-lg text-white">
              RUNNING PROJECTS
            </span>
          </div>
        </div>

        {/* <div className="w-1/2 bg-yellow-300">
        <div>
        <CountUp end={15} duration={5} />
        COMPLETED PROJECTS
        </div>
        <div>
        <CountUp end={20} duration={5} />
        RUNNING PROJECTS
        </div>
      </div> */}
      </div>
    </>
  );
};

export default Status;
