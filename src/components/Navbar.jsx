import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div>
      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-white shadow-xl md:pb-6 w-full" style={{ position: 'fixed', top: 0, zIndex: 100, backgroundColor: 'white' }}>
        <div className="nav-menu p-12 flex items-center w-full overflow-hidden">
          <div className="menus flex w-full">
            <div
              id="brand"
              className="fixed top-0 left-0 w-1/5 flex cursor-pointer"
            >
              <img
                src={logo}
                className="object-contain md:max-w-[49%] bg-wite"
                alt="logo"
              />
              <i className="font-medium text-blue-700 text-sm py-12">
                UNIVERSAL DESIGN AND CONSTRUCTION <br /> LTD
              </i>
            </div>
            <div className="flex gap-20 justify-between items-center lg:ml-96">
              <Link to="/" className="active text-blue-700 hover:text-[gold] font-medium">
                HOME
              </Link>
              <Link
                to="/about"
                id="ABOUTUS"
                className="font-medium text-blue-700  hover:text-[gold]"
              >
                ABOUT US
              </Link>
              <Link
                to="/services"
                className="font-medium text-blue-700  hover:text-[gold]"
              >
                OUR SERVICES
              </Link>
              <Link
                to="/projects"
                className="font-medium text-blue-700  hover:text-[gold]"
              >
                PROJECTS
              </Link>
              <Link
                to="/contacts"
                className="font-medium text-blue-700  hover:text-[gold]"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile and Tablet Navigation */}
      <nav className="block md:hidden bg-white shadow-xl md:pb-6 w-full" style={{ position: 'fixed', top: 0, zIndex: 100, backgroundColor: 'white' }}>
        <div className="nav-menu p-4 flex items-center justify-between w-full">
          <div
            id="mobile-brand"
            className="flex cursor-pointer items-center"
          >
            <img
              src={logo}
              className="object-contain w-20 md:w-80"
              alt="logo"
            />
          </div>
          <button
            onClick={handleMobileNavToggle}
            className="text-gray-700 focus:outline-none md:hidden"
          >
            {isMobileNavOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        {isMobileNavOpen && (
          <div className="flex flex-col items-center w-full">
            <Link to="/" className="text-blue-700 hover:text-[gold] font-medium mb-4">
              HOME
            </Link>
            <Link
              to="/about"
              id="ABOUTUS"
              className="text-blue-700  hover:text-[gold] mb-4"
            >
              ABOUT US
            </Link>
            <Link
              to="/services"
              className="text-blue-700  hover:text-[gold] mb-4"
            >
              OUR SERVICES
            </Link>
            <Link
              to="/projects"
              className="text-blue-700  hover:text-[gold] mb-4"
            >
              PROJECTS
            </Link>
            <Link
              to="/contacts"
              className="text-blue-700  hover:text-[gold] mb-4"
            >
              CONTACT
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
