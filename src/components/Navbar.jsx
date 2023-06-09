import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="shadow-lg md:pb-8">
        <div className="flex justify-between md:mx-8 md:my-2">
            <div id="brand" className="w-[40%] flex cursor-pointer">
                <img src={logo} className="object-contain md:max-w-[10%]" alt="" />
                <i className="font-semibold text-blue-900 text-2xl py-6">UDC LTD</i>
            </div>
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
        </div>
        <div className="mav-menu bg-blue-900 mx-8 px-8 flex justify-between">
            <div className="menus py-4 flex">
                <a href="#" className="active px-2 font-semibold">HOME</a>
                <a href="#" className=" px-2 font-semibold text-white hover:text-[gold]">PROJECTS</a>
                <a href="#" className=" px-2 font-semibold text-white hover:text-[gold]">ABOUT US</a>
                <a href="#" className=" px-2 font-semibold text-white hover:text-[gold]">SERVICES</a>
                <a href="#" className=" px-2 font-semibold text-white hover:text-[gold]">OUR TEAM</a>
                <a href="#" className=" px-2 font-semibold text-white hover:text-[gold]">CAREERS</a>
                <a href="#" className=" px-2 font-semibold text-white hover:text-[gold]">CONTACT</a>
            </div>
            <button className="border-2 border-white my-2 text-white px-4 py-1 rounded-sm font-semibold hover:text-[gold] hover:border-b-2 hover:border-[gold]">Get A Quote</button>
        </div>
    </nav>
  )
}

export default Navbar