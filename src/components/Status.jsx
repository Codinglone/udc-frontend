import CountUp from "react-countup";

const Status = () => {
  return (
    <>
    <div className="w-full flex">
      <div className="w-1/2 bg-blue-900 flex justify-between px-4 py-8">
        <div>
        <CountUp className="text-white text-6xl font-bold" end={20} duration={5} /> <br />
       <span className="font-semibold text-lg text-yellow-300"> EXPERT ENGINEERS & <br /> PROJECT MANAGERS</span>
        </div>
        <div>
        <CountUp className="text-white text-6xl font-bold" end={35} duration={5} /> <br />
       <span className="font-semibold text-lg text-yellow-300">HAPPY CLIENTS</span>
        </div>
      
      </div>
     
      <div className="w-1/2 bg-yellow-300">
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
