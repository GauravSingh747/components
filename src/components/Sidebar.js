import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:w-64 lg:flex-shrink-0">
      <button
        className="lg:hidden block ml-auto px-2 py-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
        onClick={toggleSidebar}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block lg:h-full lg:w-64 lg:fixed lg:top-0 lg:left-0 lg:overflow-y-auto lg:border-r lg:border-gray-400 bg-gray-500 z-20`}
      >
        {/* Sidebar content goes here */}
        <div className="py-4 px-6 bg-slate-400">
          <h2 className="text-xl font-semibold">Sidebar</h2>
          {/* Add your sidebar links or components here */}
          <div className="grid">
            <a href="">links</a>
            <a href="">links</a>
            <a href="">links</a>
            <a href="">links</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
