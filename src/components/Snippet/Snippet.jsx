import React from "react";
import Img from "../../assets/Customizable Image.png";
import "./Snippet.scss";

const Snippet = () => {
  return (
    <div className="snippet_container">
      <div className="left">
        <h2>A fully customizable code snippet editor</h2>
        <p>
          fully customize the color scheme of your code snippet, or use our own
          premade color schemes, Export your code snippets in JPG, PDF, PNG, or
          any of the other 10+ common extensions.
        </p>
        <button>
          Get started <span>- it's free</span>{" "}
        </button>
      </div>
      <div className="right">
        <div className="image">
          <img src={Img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Snippet;
