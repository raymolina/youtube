import React from "react";
import "./Display.css";
import img0 from "./img/img0.jpg";
import img1 from "./img/img1.webp";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.webp";

function Display() {
  return (
    <div>
      <div className="img-container1">
        <div className="img1">
          <img className="a" src={img0} alt="" />
          <img className="a" src={img1} alt="" />
          <img className="a" src={img2} alt="" />
          <img className="a" src={img3} alt="" />
        </div>
      </div>
      <div className="container-a">
        <div className="lorem-text">
          <p className="p1">ciudades ciudades ciudades</p>
          <p className="p1">ciudades bonitas ciudades</p>
          <p className="p1">ciudades bonitas ciudades</p>
          <p className="p1">ciudades bonitas ciudades</p>
        </div>
      </div>

      <div className="img-container2">
        <div className="img2">
          <img className="b" src={img4} alt="" />
          <img className="b" src={img5} alt="" />
          <img className="b" src={img6} alt="" />
          <img className="b" src={img7} alt="" />
        </div>
      </div>
      <div className="container-1">
        <div className="lorem-text">
          <p className="pp2">ciudades ciudades ciudades</p>
          <p className="pp2">ciudades ciudades ciudades</p>
          <p className="pp2">ciudades ciudades ciudades</p>
          <p className="pp3">ciudades ciudades ciudades</p>
        </div>
      </div>
    </div>
  );
}

export default Display;
