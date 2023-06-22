import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="shadow-lg md:pb-8 w-full">
      <div className="nav-menu bg-blue-900 p-6 flex items-center w-full">
        <div className="menus flex w-full py-7">
          <div
            id="brand"
            className="absolute top-0 left-1 w-1/3 flex cursor-pointer"
          >
            <img
              src={logo}
              className="object-contain md:max-w-[20%] bg-wite"
              alt=""
            />
            <i className="font-semibold text-white text-sm py-12">
              UNIVERSAL DESIGN AND <br /> CONSTRUCTION (UDC) LTD
            </i>
          </div>
          <div className="flex w-2/3 justify-between lg:ml-72">
            <a href="/home" className="active font-semibold pr-2">
              HOME
            </a>
            <a
              href="/projects"
              id="ABOUTUS"
              className="font-semibold text-white hover:text-[gold] pr-2"
            >
              ABOUT US
            </a>
            <a
              href="/projects"
              className="font-semibold text-white hover:text-[gold] pr-2"
            >
              PROJECTS
            </a>
            <a
              href="/services"
              className="font-semibold text-white hover:text-[gold] pr-2"
            >
              SERVICES
            </a>
            <a
              href="/team"
              className="font-semibold text-white hover:text-[gold] pr-2"
            >
              OUR TEAM
            </a>
            <a
              href="/contacts"
              className="font-semibold text-white hover:text-[gold] pr-2"
            >
              CONTACT
            </a>
          </div>
        </div>
        <div className="">
          <button className="border-2 border-white p-2 text-white rounded-md font-semibold hover:text-[gold] hover:border-b-2 hover:border-[gold]">
            LOGIN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
