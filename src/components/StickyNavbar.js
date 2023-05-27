import React, { useState, useEffect } from "react";

const StickyNavbar = () => {
  const [navbarBgColor, setNavbarBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setNavbarBgColor("bg-gray-300"); // Set your desired background color tailwind class here
      } else {
        setNavbarBgColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full ${navbarBgColor} py-4 z-10`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Navbar content */}
        <a href="">link-1</a>
        <a href="">link-1</a>
        <a href="">link-1</a>
        <a href="">link-1</a>
        <a href="">link-1</a>
      </div>
    </nav>
  );
};

export default StickyNavbar;
