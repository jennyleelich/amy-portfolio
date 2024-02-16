

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/Logo.jpg";
import { SlArrowDown,SlArrowUp } from "react-icons/sl";
import { IoMdClose,IoMdMenu } from "react-icons/io";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
           <NavLink to="/" className="py-7 px-3 inline-block">
            <img src={Logo} alt="logo" className="md:cursor-pointer h-9 inline px-2" />Chuhan
          </NavLink>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open&& <IoMdClose />}
            {!open && <IoMdMenu />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <NavLink to="/" className="py-7 px-3 inline-block">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Works" className="py-7 px-3 inline-block">
              Works
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" className="py-7 px-3 inline-block">
              About
            </NavLink>
          </li>
        </ul>
        
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              WORKS
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              ABOUT
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
