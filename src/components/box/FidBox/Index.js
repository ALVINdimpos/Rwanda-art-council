/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";
function Card(props) {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/Federation`, {state: {data: props.data}});
  };
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" alt="Loading..." />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn" onClick={onClickHandler}>
        Read more ...
      </button>
    </div>
  );
}

export default Card;
