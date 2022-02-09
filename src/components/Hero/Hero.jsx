import React from "react";
import HeroImg from "../../assets/Snippet Image.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero_container">
      <h1>Gorgeous Code Snippets</h1>
      <p>
        With Snipper, create fully customizable code snippets in a matter of
        seconds <br /> right from your browser
      </p>
      <button>
        Get started <span>- it's free</span>{" "}
      </button>
      <p>No credit card required</p>
      <div className="image">
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
