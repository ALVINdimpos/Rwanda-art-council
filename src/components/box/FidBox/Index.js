/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Style from "./Style.module.css";
import Image1 from "../../../assets/photos/Fideration.png";

function Index(props) {
  return (
    <div>
      <div className={Style.FideBoxWraper}>
        <div className={Style.FideBox}>
          <img src={Image1} />
          <h4>{props.fidname}</h4>
          <p>{props.fiddescription}</p>
        </div>
        
      </div>
    </div>
  );
}

export default Index;
