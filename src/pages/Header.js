import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../logo.png";

export default function Header() {
  const location = useLocation();
  // when we click on the logo/offer/sign-in we want to go those page
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    //__________________Header section div_______________

    <div className="bg-gray-400  shadow-sm sticky top-0 z-50">
      {/* _____inside header div________ */}
      <header className=" bg-transparent flex justify-between items-center px-6 max-w-6xl mx-auto">
        {/*_______________ Left part_________ */}
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-[80%] h-10 cursor-pointer "
            onClick={() => navigate("/")}
          ></img>
        </div>
        {/*_______________ Right part_________ */}
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              // onclick we go to the respective page
              onClick={() => navigate("/home")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
              // onclick we go to the respective page
              onClick={() => navigate("/contact")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/sign-in") && "text-black border-b-red-500"
              }`}
              // onclick we go to the respective page
              onClick={() => navigate("/login")}
            >
              SignIn
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
