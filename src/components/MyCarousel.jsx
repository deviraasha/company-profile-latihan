import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import "./style.css";

function MyCarousel() {
  return (
    <div className="container-style mt-4">
      <ReactCardCarousel autoplay={false} disable_box_shadow={false}>
        <div className="card-style">
          <img
            src="./assets/images/Accesories.png"
            className="icon-carousel"
            alt="..."
          />
          <div className="card-body">
            <p className="content-card">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card-style">
          {" "}
          <img
            src="./assets/images/Accesories.png"
            className="icon-carousel"
            alt="..."
          />
          <div className="card-body">
            <p className="content-card">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card-style">
          {" "}
          <img
            src="./assets/images/Accesories.png"
            className="icon-carousel"
            alt="..."
          />
          <div className="card-body">
            <p className="content-card">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </ReactCardCarousel>
    </div>
  );
}

export default MyCarousel;

//  MyCarousel extends Component {
//   static get CONTAINER_STYLE() {
//     return {
//       position: "relative",
//       height: "100vh",
//       width: "100%",
//       display: "flex",
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "middle"
//     };
//   }

//   static get CARD_STYLE() {
//     return {
//       height: "200px",
//       width: "200px",
//       paddingTop: "80px",
//       textAlign: "center",
//       background: "#52C0F5",
//       color: "#FFF",
//       fontFamily: "sans-serif",
//       fontSize: "12px",
//       textTransform: "uppercase",
//       borderRadius: "10px",
//       boxSizing: "border-box"
//     };
//   }

//   render() {
//     return (
//       <div className="container-style">
//         <ReactCardCarousel autoplay={true} >
//           <div className="card-style">First Card</div>
//           <div className="card-style">Second Card</div>
//           <div className="card-style">Third Card</div>
//           <div className="card-style">Fourth Card</div>
//           <div className="card-style">Fifth Card</div>
//         </ReactCardCarousel>
//       </div>
//     );
//   }
// }

// export default MyCarousel
