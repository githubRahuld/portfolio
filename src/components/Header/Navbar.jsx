import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <ScrollLink to="about" smooth={true} offset={50}>
                  About
                </ScrollLink>
              </li>

              <li>
                <ScrollLink to="services" smooth={true} offset={50}>
                  Services
                </ScrollLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">PortFolio</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ScrollLink to="about" smooth={true} offset={50}>
                About
              </ScrollLink>
            </li>

            <li>
              <ScrollLink to="services" smooth={true} offset={50}>
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="skills" smooth={true} offset={50}>
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="projects" smooth={true} offset={50}>
                My Work
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
