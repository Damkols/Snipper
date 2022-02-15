import React from "react";
import Flogo from "../../assets/Logo.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Flogo} alt="" />
      <div className="terms">
        <p>Terms and Condition</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
