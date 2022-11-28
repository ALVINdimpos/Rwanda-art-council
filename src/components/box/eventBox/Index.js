/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Style from "./Style.module.css";
import Button from "../../Button/Index";
import { useNavigate } from "react-router-dom";
function Index(props) {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/EventRm`, {state: {data: props.data}});
  };
  console.log(props.data);
  return (
    <div>
      <div className={Style.eventBoxWraper}>
        <div className={Style.eventBox}>
          <div className={Style.overFlow}>
            <img
              src={props.img}
              alt="Loading..."
              className={Style.CardImgTop}
            />
          </div>
          <h4>{props.title}</h4>
          <h5>{props.date}</h5>
          <p>{props.description}</p>
          <Button name="Read more" onClick={onClickHandler}/>
        </div>
      </div>
    </div>
  );
}

export default Index;
