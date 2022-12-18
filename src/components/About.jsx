import React from "react";
import "./style.css";

function About() {
  return (
    <div className="container-about">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="gorupOne">
              <p className="title">Who We Are</p>
              <p className="title-child">Technology Company</p>
              <p className="content-about">
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div className="d-flex justify-content-start">
                <div className="col-2">
                  <h3 className="number-one" style={{ color: "#303030" }}>
                    01
                  </h3>
                  <h3 className="number-slide" style={{ color: "#C0C0C0" }}>
                    /
                  </h3>
                  <h3 className="number-two">03</h3>
                  <button
                    className="carousel-control-one"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                  >
                    <img className="" src="/assets/images/ARROW.png" alt="" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-two"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                  >
                    <img src="/assets/images/ARROW.png" alt="" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="gorupOne">
              <p className="title">What we do</p>
              <p className="title-child">Professional Brand Management</p>
              <p className="content-about">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
              <div className="d-flex justify-content-start">
                <div className="col-2">
                  <h3 className="number-one" style={{ color: "#303030" }}>
                    02
                  </h3>
                  <h3 className="number-slide" style={{ color: "#C0C0C0" }}>
                    /
                  </h3>
                  <h3 className="number-two">03</h3>
                  <button
                    className="carousel-control-one"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                  >
                    <img className="" src="/assets/images/ARROW.png" alt="" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-two"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                  >
                    <img src="/assets/images/ARROW.png" alt="" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="gorupOne">
              <p className="title">How we do</p>
              <p className="title-child">Strategize, Design, Collaborate</p>
              <p className="content-about">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse sequam nihil molestiae consequatur.
              </p>
              <div className="d-flex justify-content-start">
                <div className="col-2">
                  <h3 className="number-one" style={{ color: "#303030" }}>
                    03
                  </h3>
                  <h3 className="number-slide" style={{ color: "#C0C0C0" }}>
                    /
                  </h3>
                  <h3 className="number-two">03</h3>
                  <button
                    className="carousel-control-one"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                  >
                    <img className="" src="/assets/images/ARROW.png" alt="" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-two"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                  >
                    <img src="/assets/images/ARROW.png" alt="" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
