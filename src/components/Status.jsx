import CountUp from "react-countup";

const Status = () => {
  return (
    <>
    <div className="w-full flex">
      <div className="w-1/2 bg-blue-900">
        <div>
        <CountUp end={20} duration={5} />
        EXPERT ENGINEERS & PROJECT MANAGERS
        </div>
        <div>
        <CountUp end={35} duration={5} />
        HAPPY CLIENTS
        </div>
      </div>
     
      <div className="w-1/2 bg-[gold]">
        <div>
        <CountUp end={15} duration={5} />
        COMPLETED PROJECTS
        </div>
        <div>
        <CountUp end={20} duration={5} />
        RUNNING PROJECTS
        </div>
      </div>
     
      
      </div>
    </>
  );
};

export default Status;
