import React from "react";
import Img from "../../assets/Snippet Image.png";

const Snippet = () => {
  return (
    <div className="snippet_container">
      <div className="left">
        <h2>A fully customizable code snippet editor</h2>
        <p>
          Fully customize the color scheme of your code snippet, or use our own
          premade color schemes, Export your code snippets in JPG, PDF, PNG, or
          any of the other 10+ common extensions.
        </p>
        <button>
          Get started <span>- it's free</span>{" "}
        </button>
      </div>
      <div className="right">
        <img src={Img} alt="" />
      </div>
    </div>
  );
};

export default Snippet;
