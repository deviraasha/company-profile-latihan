import React, { useRef } from "react";
import Hero from "./Hero";
import About from "./About";
import Content2 from "./Content2";
import Specialty from "./Specialty";

function HomePage() {
  const ref = useRef(null);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "auto",
    });
  };
  return (
    <>
      <div className="container-xxl mt-3">
        <div className="d-flex flex-column bd-highlight mb-3">
          <Hero />
          <div className="col">
            <button onClick={scrollToBottom} className="button-scroll">
              <img src="/assets/images/Scroll.png" alt="" />
            </button>
            <div ref={ref} className="mt-4">
              <About />
            </div>
            <Content2 />
            <Specialty/>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
