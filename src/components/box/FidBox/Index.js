/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import FidLogo from "../../../assets/photos/FidLogo.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Style.css";
function Index(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://rwanda-art-api.herokuapp.com/api/ViewUser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="wrapper">
      <Card
        img={FidLogo}
        title="Federation name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id iaculis augue."
      />
    </div>
  );
}
function Card(props) {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/Federation");
  };
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn" onClick={onClickHandler}>
        Read more ...
      </button>
    </div>
  );
}

export default Index;
