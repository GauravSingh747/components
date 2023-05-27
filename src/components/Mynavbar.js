import React from "react";
import { FaBars } from "react-icons/fa";
const Navbar1 = () => {
  return (
    <div className="flex justify-around  py-4 text-3xl bg-slate-400 ">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex justify-around mx-4 ">
        <h4>Link-1</h4>
        <h4>Link-1</h4>
        <h4>Link-1</h4>
        <h4>Link-1</h4>
      </div>
      <div>
        <button>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Navbar1;
