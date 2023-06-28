import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white lg:h-24  shadow-lg md:pb-1 w-full" style={{position: 'fixed', zIndex: '1000', top: 0, }}>
      <div className="nav-menu p-6 flex items-center w-full">
        <div className="md:hidden flex items-center">
          <button
            className="text-blue-700 hover:text-[gold] focus:outline-none"
            onClick={handleMobileMenuToggle}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <span className="font-bold text-blue-700 ml-2">UDC LTD</span>
        </div>
        <div className="hidden md:flex gap-16 justify-between lg:ml-96">
          <div className="absolute left-0 top-1 w-1/3 flex items-center">
            <img
              src={logo}
              className="object-contain mb-10 md:max-w-[20%] bg-white"
              alt=""
            />
            <i className="font-extrabold text-blue-700 text-sm py-7">
              UNIVERSAL DESIGN AND <br /> CONSTRUCTION (UDC)
            </i>
          </div>
          <Link
            to="/"
            className="text-blue-700 pt-2 font-bold hover:text-[gold] transition-colors duration-300"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="text-blue-700 pt-2 font-bold hover:text-[gold] transition-colors duration-300"
          >
            ABOUT US
          </Link>
          <Link
            to="/projects"
            className="text-blue-700 pt-2 font-bold hover:text-[gold] transition-colors duration-300"
          >
            PROJECTS
          </Link>
          <Link
            to="/services"
            className="text-blue-700 pt-2 font-bold hover:text-[gold] transition-colors duration-300"
          >
            SERVICES
          </Link>
          <Link
            to="/team"
            className="text-blue-700 pt-2 font-bold hover:text-[gold] transition-colors duration-300"
          >
            OUR TEAM
          </Link>
          <Link
            to="/contacts"
            className="text-blue-700 pt-2 font-bold hover:text-[gold] transition-colors duration-300"
          >
            CONTACT
          </Link>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="hidden md:visible lg:hidden flex flex-col mt-2">
          <Link
            to="/"
            className="block py-2 px-4 text-blue-700 font-bold hover:bg-yellow-200 hover:text-[gold]"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 text-blue-700 font-bold hover:bg-yellow-200 hover:text-[gold]"
          >
            ABOUT US
          </Link>
          <Link
            to="/projects"
            className="block py-2 px-4 text-blue-700 font-bold hover:bg-yellow-200 hover:text-[gold]"
          >
            PROJECTS
          </Link>
          <Link
            to="/services"
            className="block py-2 px-4 text-blue-700 font-bold hover:bg-yellow-200 hover:text-[gold]"
          >
            SERVICES
          </Link>
          <Link
            to="/team"
            className="block py-2 px-4 text-blue-700 font-bold hover:bg-yellow-200 hover:text-[gold]"
          >
            OUR TEAM
          </Link>
          <Link
            to="/contacts"
            className="block py-2 px-4 text-blue-700 font-bold hover:bg-yellow-200 hover:text-[gold]"
          >
            CONTACT
          </Link>
        </div>
      )}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full">
          <div className="bg-white py-2 px-4 border-t border-blue-200">
            <Link
              to="/"
              className="block py-2 text-blue-700 font-bold hover:text-[gold] transition-colors duration-300"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="block py-2 text-blue-700 font-bold hover:text-[gold] transition-colors duration-300"
            >
              ABOUT US
            </Link>
            <Link
              to="/projects"
              className="block py-2 text-blue-700 font-bold hover:text-[gold] transition-colors duration-300"
            >
              PROJECTS
            </Link>
            <Link
              to="/services"
              className="block py-2 text-blue-700 font-bold hover:text-[gold] transition-colors duration-300"
            >
              SERVICES
            </Link>
            <Link
              to="/team"
              className="block py-2 text-blue-700 font-bold hover:text-[gold] transition-colors duration-300"
            >
              OUR TEAM
            </Link>
            <Link
              to="/contacts"
              className="block py-2 text-blue-700 font-bold hover:text-[gold] transition-colors duration-300"
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
