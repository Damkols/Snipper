import React from "react";
import { useState } from "react";
import logo from "../../assets/Logo.svg";
import search from "../../assets/Search Icon.svg";
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navigation">
      <div className="navLogo">
        <img src={logo} alt="" />
      </div>

      <div className={`nav-items ${isOpen && "open"}`}>
        <li>
          <a onClick={() => setIsOpen(!isOpen)}>
            <img src={search} alt="" />
          </a>
        </li>
        <li>
          <a onClick={() => setIsOpen(!isOpen)}>Sign in</a>
        </li>
        <li>
          <a onClick={() => setIsOpen(!isOpen)}>
            <button>
              {" "}
              Get started <span>- it's free</span>
            </button>
          </a>
        </li>
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`btn-mobile ${isOpen && "open"}`}
      >
        <div className="btn-mobile-line"></div>
        <div className="btn-mobile-line sm-line"></div>
      </div>
    </div>
  );
};

export default Navbar;
