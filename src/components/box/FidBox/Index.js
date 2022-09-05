/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import FidLogo from "../../../assets/photos/FidLogo.png"
import "./Style.css";
function Index(props) {
  return (
    <div className="wrapper">
    <Card
      img={FidLogo}
      title="Fideration name"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id iaculis augue."
    />
  </div>
  );
}
function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn">Read more</button>
    </div>
  );
}

export default Index;
