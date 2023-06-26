import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow-lg md:pb-1 w-full">
      <div className="nav-menu p-6 flex items-center w-full">
        <div className="menus flex w-full py-">
          <div
            id="brand"
            className="absolute mb-4 top-1 left-0 w-1/3 flex cursor-pointer"
          >
            <img
              src={logo}
              className="object-contain mb-10 md:max-w-[20%] bg-wite"
              alt=""
            />
            <i className="font-extrabold text-blue-700 text-sm py-7">
              UNIVERSAL DESIGN AND <br /> CONSTRUCTION (UDC) LTD
            </i>
          </div>
          <div className="flex gap-16 justify-between lg:ml-96">
            <Link to="/" className="active text-blue-700 hover:text-[gold] font-bold">
              HOME
            </Link>
            <Link 
              to="/about"
              id="ABOUTUS"
              className="font-bold text-blue-700  hover:text-[gold]"
            >
              ABOUT US
            </Link>
            <Link
              to="/projects"
              className="font-bold text-blue-700  hover:text-[gold]"
            >
              PROJECTS
            </Link>
            <Link
              to="/services"
              className="font-bold text-blue-700  hover:text-[gold]"
            >
              SERVICES
            </Link>
            <Link
              to="/team"
              className="font-bold text-blue-700  hover:text-[gold]"
            >
              OUR TEAM
            </Link>
            <Link
              to="/contacts"
              className="font-bold text-blue-700  hover:text-[gold]"
            >
              CONTACT
            </Link>
          </div>
        </div>
        <div className="">
          <button className="border-2 border-blue-200 p-2 text-blue-700  rounded-md font-bold hover:text-[gold] hover:border-b-2 hover:border-[gold]">
            LOGIN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
