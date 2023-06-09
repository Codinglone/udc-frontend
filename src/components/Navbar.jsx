import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="shadow-lg">
        <div className="flex">
            <div id="brand" className="w-[5%]">
                <img src={logo} className="object-contain" alt="" />
            </div>
            <div id="details" className="flex">
                <div className="details-item">
                <h3>Opening Hour</h3>
                <span>Mon - Fri, 8:00 - 17:00</span>
                </div>
                <div className="details-item">
                <h3>Call Us</h3>
                <span>+250 784 427 142</span>
                </div>
                <div className="details-item">
                <h3>Email Us</h3>
                <span>codinglone@gmail.com</span>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar