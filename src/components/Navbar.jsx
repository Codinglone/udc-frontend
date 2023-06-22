import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="shadow-lg md:pb-8">
        {/* <div className="flex justify-between md:mx-8 md:my-2">
       
            <div id="details" className="flex justify-between py-4 md:w-[60%]">
                <div className="details-item">
                <h3 className="font-semibold text-blue-900 cursor-pointer">Opening Hour</h3>
                <span className="font-semibold text-blue-900 cursor-pointer">Mon - Fri, 8:00 - 17:00</span>
                </div>
                <div className="details-item">
                <h3 className="font-semibold text-blue-900 cursor-pointer">Call Us</h3>
                <span className="font-semibold text-blue-900 cursor-pointer">+250 784 427 142</span>
                </div>
                <div className="details-item">
                <h3 className="font-semibold text-blue-900 cursor-pointer">Email Us</h3>
                <span className="font-semibold text-blue-900 cursor-pointer">codinglone@gmail.com</span>
                </div>
            </div>
        </div> */}
        <div className="mav-menu bg-blue-900 p-6 flex items-center justify-between">
            <div className="menus flex gap-12 px-80 py-7">
            <div id="brand" className="absolute top-0 left-1 w-[40%] flex cursor-pointer">
                <img src={logo} className="object-contain md:max-w-[20%] bg-wite" alt="" />
                <i className="font-semibold text-white text-sm py-12">UNIVERSAL DESIGN AND <br /> CONSTRUCTION (UDC) LTD</i>
            </div>
                <a href="/home" className="active font-semibold">HOME</a>
                <a href="/projects" id="ABOUTUS" className="font-semibold text-white hover:text-[gold]">PROJECTS</a>
                <a href="/projects" className="font-semibold text-white hover:text-[gold]">PROJECTS</a>
                <a href="/services" className="font-semibold text-white hover:text-[gold]">SERVICES</a>
                <a href="/team" className="font-semibold text-white hover:text-[gold]">OUR TEAM</a>
                {/* <a href="#" className=" px-2 font-semibold text-white hover:text-[gold]">CAREERS</a> */}
                <a href="/contacts" className="font-semibold text-white hover:text-[gold]">CONTACT</a>
            </div>
             <button className="border-2 border-white p-2 text-white rounded-md font-semibold hover:text-[gold] hover:border-b-2 hover:border-[gold]">LOGIN</button>
        </div>
    </nav>
  )
}

export default Navbar