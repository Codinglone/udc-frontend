import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="shadow-lg">
        <div className="flex justify-between md:mx-8 md:my-2">
            <div id="brand" className="w-[40%] flex cursor-pointer">
                <img src={logo} className="object-contain md:max-w-[10%]" alt="" />
                <i className="font-semibold text-blue-900 text-2xl py-6">UDC LTD</i>
            </div>
            <div id="details" className="flex justify-between py-4 md:w-[60%]">
                <div className="details-item">
                <h3 className="font-semibold text-blue-900">Opening Hour</h3>
                <span className="font-semibold text-blue-900">Mon - Fri, 8:00 - 17:00</span>
                </div>
                <div className="details-item">
                <h3 className="font-semibold text-blue-900">Call Us</h3>
                <span className="font-semibold text-blue-900">+250 784 427 142</span>
                </div>
                <div className="details-item">
                <h3 className="font-semibold text-blue-900">Email Us</h3>
                <span className="font-semibold text-blue-900">codinglone@gmail.com</span>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar