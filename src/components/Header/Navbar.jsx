import React from "react";
import "./Header.css";

import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-6 text-nav-100 border-b-2 border-solid border-border-100 p-2 shadow ">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="portfolio"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        Portfolio
      </NavLink>
      <NavLink
        to="resume"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        Resume
      </NavLink>
      <NavLink
        to="services"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        Services
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Navbar;
