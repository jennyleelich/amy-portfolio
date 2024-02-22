import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/Logo.jpg";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <NavLink to="/" className="py-7 px-3 inline-block">
            <img
              src={Logo}
              alt="logo"
              className="md:cursor-pointer h-9 inline px-2"
            />
            Chuhan
          </NavLink>
          <div
            className="text-3xl md:hidden mt-4"
            onClick={() => setOpen(!open)}
          >
            {open && <IoMdClose />}
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
        md:hidden bg-white fixed w-full top-5 overflow-y-auto bottom-0 py-24 pl-4 custom-collaps
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <NavLink
              to="/"
              className="py-4 px-6 inline-block"
              onClick={() => setOpen(!open)}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/works"
              className="py-4 px-6 inline-block"
              onClick={() => setOpen(!open)}
            >
              WORKS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="py-4 px-6 inline-block"
              onClick={() => setOpen(!open)}
            >
              ABOUT
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
