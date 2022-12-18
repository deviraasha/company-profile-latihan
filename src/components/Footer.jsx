import React from "react";

function Footer() {
  return (
    <footer className="bg-footer">
      <img src="./assets/images/Group.png" alt="" className="logo-footer" />

      <div className="company-info">
        <select class="form-select" aria-label="Default select example">
          <option selected>Technology Department</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <div className="location">
          Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa
          Barat
        </div>

        <div className="list-footer">
          <p className="">Who We Are</p>
          <p className="">Our Values</p>
          <p className="">The Perks</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
