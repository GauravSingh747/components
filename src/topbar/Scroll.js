import React, { useState, useEffect } from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
const Scroll = () => {
  const [navbarBgColor, setNavbarBgColor] = useState("bg-gray-400");
  const [translate, setTranslate] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setNavbarBgColor("bg-gray-600"); // Set your desired background color tailwind class here
        // setTranslate("-translate-y-2");
        // setTranslate("py-6");
      } else {
        // setNavbarBgColor("bg-gray-400");
        setNavbarBgColor("bg-transparent");
        // setTranslate("py-2");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full ${navbarBgColor} py-4  z-10`}>
      <div className="container mx-auto flex items-center  justify-between px-4">
        <div className={`flex items-center ${translate} `}>
          <img className="h-8 mr-2" src={logo} alt="Logo" />{" "}
          {/* Replace with your logo image */}
          <span className="text-black font-semibold text-lg">My App</span>{" "}
          {/* Replace with your app name */}
        </div>
        <ul className={`flex space-x-4 ${translate} `}>
          <li>
            <Link to="/home" className="text-black hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-black hover:text-gray-300" to="/about">
              About
            </Link>
          </li>
          <li>
            <a className="text-black hover:text-gray-300" href="#">
              Services
            </a>
          </li>
          <li>
            <Link className="text-black hover:text-gray-300" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Scroll;
