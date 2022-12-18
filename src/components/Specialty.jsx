import React from "react";
import "react-carousel-animated/dist/style.css";
function Specialty() {
  return (
    <div className="container-specialty">
      <div className="containt-bg">
        <div className="child-container">
          <p className="title-specialty">OUR SPECIALITY</p>
          <p className="content-specialty">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            euismod libero vel leo auctor, in venenatis nulla consequat. Sed
            commodo nunc sit amet congue aliquam.
          </p>
          <div
            id="carouselExampleCaptions"
            className="carousel slide container-carousel"
            data-bs-ride="carousel"
            // style={{ height: "600px" }}
          >
            <div className="carousel-indicators">
            <button
                className="icon-prev"
                style={{ backgroundColor: "red" }}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>

              <button
                className="icon-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
                style={{ backgroundColor: "red" }}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="content-card">
                  <div className="d-flex flex-column  d-flex justify-content-center">
                    <img
                      src="./assets/images/Speed.png"
                      alt=""
                      className="icon-carousel align-self-center"
                    />
                    <h5 className="align-self-center">Speed Improvement</h5>
                    <p className="align-self-center mb-4 carousel-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis euismod libero vel leo auctor, in venenatis nulla
                      consequat. Sed commodo nunc sit amet congue aliquam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="content-card">
                  <div className="d-flex flex-column  d-flex justify-content-center">
                    <img
                      src="./assets/images/Exhaust.png"
                      alt=""
                      className="icon-carousel align-self-center"
                    />
                    <h5 className="align-self-center">Speed Improvement</h5>
                    <p className="align-self-center mb-4 carousel-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis euismod libero vel leo auctor, in venenatis nulla
                      consequat. Sed commodo nunc sit amet congue aliquam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="content-card">
                  <div className="d-flex flex-column  d-flex justify-content-center">
                    <img
                      src="./assets/images/Accesories.png"
                      alt=""
                      className="icon-carousel align-self-center"
                    />
                    <h5 className="align-self-center">Speed Improvement</h5>
                    <p className="align-self-center mb-4 carousel-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis euismod libero vel leo auctor, in venenatis nulla
                      consequat. Sed commodo nunc sit amet congue aliquam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <MyCarousel /> */}
        </div>
      </div>
    </div>
  );
}

export default Specialty;
