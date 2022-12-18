import React, { useRef } from "react";
import "./style.css";
import About from "./About";
function Hero() {
  return (

    //hero section
      <div className="container-lg">
        <div className="bg-image background-img" style={{ zIndex: "-1" }}>
          <div className="hero">
            <p className="hero-content-header">Discover Your Wonder</p>
            <p className="hero-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              voluptatibus ex cupiditate blanditiis veritatis ipsa, pariatur
              officia laboriosam vero! Optio consectetur earum accusantium.
              Ipsum quisquam sit ad earum aperiam? Laboriosam.
            </p>
          </div>
        </div>
      </div>
    //hero section end

  );
}

export default Hero;
