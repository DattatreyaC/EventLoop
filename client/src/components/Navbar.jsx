import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
    {
        name: "Home",
        linkAddress: "#home"
    },
    {
        name: "Events",
        linkAddress: "#events"
    },
    {
        name: "Contact",
        linkAddress: "#contact"
    },
]

const Navbar = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  return (
    <nav className="fixed z-10 bg-black top-0 left-0 w-full border-b-4 border-double border-b-white flex items-center justify-center">
      {/* Navbar */}
      <div className="w-[90%] md:w-[85%] lg:w-[80%] p-3 flex items-center justify-between text-red">
        <div id="Logo">
          <h1 className="text-2xl">EventLoop</h1>
        </div>

        {/* Hamburger */}
        <div className="block md:hidden">
          <Menu onClick={() => setShowSideNav(true)} size={28} />
        </div>

        {/* Navlinks */}
        <div
          id="NavLinks"
          className="hidden md:flex gap-6 items-center justify-center text-red font-semibold"
        >
          {navItems.map((item) => (
            <a className="hover:scale-105 transition-all duration-300" key={item.linkAddress} href={item.linkAddress}>{item.name}</a>
          ))}

          <button className="bg-white text-black flex px-3 py-1 gap-1 rounded font-semibold cursor-pointer">
            <h3>Register with</h3>
            <img src="google-icon.png" alt="google" className="w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidenav */}
      <div
        className={`md:hidden ${
          showSideNav ? "block" : "hidden"
        } w-full h-screen absolute top-0 left-0 bg-black`}
      >
        {/* Header */}
        <div className="w-full flex justify-center items-center border-b-4 border-double border-b-white">
          <div className="w-[90%] p-3 flex items-center justify-between text-red ">
            <div id="Logo">
              <h1 className="text-2xl">EventLoop</h1>
            </div>

            {/* Close */}
            <div>
              <X onClick={() => setShowSideNav(false)} size={28} />
            </div>
          </div>
        </div>

        {/* Nav items */}
        <div className="mt-8 w-[90%] mx-auto p-3 flex flex-col gap-4 text-white">
               {navItems.map((item) => (
            <a key={item.linkAddress} href={item.linkAddress}>{item.name}</a>
          ))}

          <button className="mt-2 bg-white text-black flex items-center justify-center py-2 gap-1 rounded font-semibold cursor-pointer">
            <h3>Register with</h3>
            <img src="google-icon.png" alt="google" className="w-6" />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
