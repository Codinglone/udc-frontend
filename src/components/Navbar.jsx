import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-50 shadow-xl md:pb-6 w-full">
      <div className="nav-menu p-12 flex items-center w-full">
        <div className="menus flex w-full">
          <div
            id="brand"
            className="absolute top-0 left-0 w-1/6 flex px- cursor-pointer"
          >
            <img
              src={logo}
              className="object-contain md:max-w-[60%] bg-wite"
              alt=""
            />
            <i className="font-bold text-blue-700 text-sm py-10">
              UNIVERSAL DESIGN AND <br /> CONSTRUCTION (UDC) LTD
            </i>
          </div>
          <div className="flex gap-20 justify-between lg:ml-96">
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
              to="/services"
              className="font-bold text-blue-700  hover:text-[gold]"
            >
              OUR SERVICES
            </Link>
            
            <Link
              to="/projects"
              className="font-bold text-blue-700  hover:text-[gold]"
            >
              PROJECTS
            </Link>

            <Link
              to="/contacts"
              className="font-bold text-blue-700  hover:text-[gold]"
            >
              CONTACT
            </Link>
          </div>
        </div>
          {/* <button className="border-2 border-blue-200 p-2 text-blue-700  rounded-md font-bold hover:text-[gold] hover:border-b-2 hover:border-[gold]">
            LOGIN
          </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
