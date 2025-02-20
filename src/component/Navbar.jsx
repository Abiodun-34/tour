import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu as Menu, FiX as X } from "react-icons/fi"; // Hamburger & Close Icons
import logo from "../assets/TravelGlobe.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" }, // Updated to "/gallery"
  { label: "Booking", href: "/booking" },
  { label: "About", href: "#" },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen((prevState) => !prevState);
  };

  return (
    <nav className="sticky top-5 z-50 py-3 bg-white backdrop-blur-lg border border-gray-300 shadow-md rounded-lg sm:max-w-screen-lg max-w-screen-xl mx-auto">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-15 w-17" src={logo} alt="logo" />
            <span className="ml-1 text-2xl tracking-tight font-bold">
              Traveltour
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex ml-14 space-x-12 font-bold">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="text-black-700 hover:bg-amber-600 hover:text-primary transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} className="text-gray-700">
              {mobileDrawerOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 bg-opacity-95 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="space-y-1 item-center text-center">
              {navItems.map((item, index) => (
                <li key={index} className="text-white text-lg">
                  <Link to={item.href} onClick={() => setMobileDrawerOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setMobileDrawerOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;