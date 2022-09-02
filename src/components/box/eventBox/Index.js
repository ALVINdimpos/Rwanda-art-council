/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Style from "./Style.module.css";
import Button from "../../Button/Index";
function Index(props) {
  return (
    <div>
      <div className={Style.eventBoxWraper}>
        <div className={Style.eventBox}>
          <div className={Style.overFlow}>
            <img
              src={props.img}
              alt="description of image"
              className={Style.CardImgTop}
            />
          </div>
          <h4>{props.title}</h4>
          <h5>{props.date}</h5>
          <p>{props.description}</p>
          <Button name="Read more" />
        </div>
      </div>
    </div>
  );
}

export default Index;
