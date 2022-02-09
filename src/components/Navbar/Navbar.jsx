import React from "react";
import logo from "../../assets/Logo.svg";
import search from "../../assets/Search Icon.svg";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="links">
        <li>
          {" "}
          <img src={search} alt="" />
        </li>
        <li>
          {" "}
          <a href="#">Sign in</a>
        </li>
        <li>
          <button>
            Get started <span>- it's free</span>{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
