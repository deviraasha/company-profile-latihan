import React from "react";
import "./style.css";
function Content2() {
  return (
    <div className="container-values">
      <p className="title-content">Our Core Values</p>
      <p className="content-values">
        Ridiculus laoreet libero pretium et, sit vel elementum convallis fames.
        Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.
        <br />
        <br />
        In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec
        amet enim.
      </p>
      {/* list-1 */}
      <div>
        <img className="rectangle" src="/assets/images/Rectangle.png" alt="" />
        <p className="title-list">Dedication</p>
        <p className="content-list">
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat.
        </p>
      </div>
      {/* list-2 */}
      <div>
        <img
          className="rectangle-2"
          src="/assets/images/Rectangle.png"
          alt=""
        />
        <p className="title-list-2">Intellectual Honesty</p>
        <p className="content-list-2">
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias conse.
        </p>
      </div>
      {/* list-3 */}
      <div>
        <img
          className="rectangle-3"
          src="/assets/images/Rectangle.png"
          alt=""
        />
        <p className="title-list-3">Curiosity</p>
        <p className="content-list-3">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque.
        </p>
      </div>

      <img className="ilustration" src="/assets/images/coreValues.png" alt=""/>
    </div>
  );
}

export default Content2;
