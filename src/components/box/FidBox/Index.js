/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Style.css";
function Index(props) {
  const [Fideration, setFideration] = useState([]);
  useEffect(() => {
    fetch(`https://api.rwandaartscouncil.rw/api/Federation/Pub`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFideration(data);
      });
  }, []);
  return (
    <div className="card_wrapper">
      {Fideration.info?.slice(0,3).map((federation, id) => (
        <Card
          key={id}
          data={federation}
          img={federation.logo}
          title={federation.fed_name}
          description={federation.description
          }
          id={federation.id}
        />
      ))}
    </div>
  );
}
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

export default Index;
