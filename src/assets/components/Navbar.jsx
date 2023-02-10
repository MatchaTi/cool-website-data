import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className="text-slate-200 flex items-center justify-between h-24 mx-auto px-4 max-w-[1240px]">
      <h1 className="w-full text-3xl font-bold text-sky-300">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-900 ease-in-out duration-300"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-sky-300 m-4">REACT.</h1>
        <ul className="uppercase p-4 divide-y divide-slate-800">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
