import React from "react";
import Style from "./Style.module.css";
import Image1 from "../../../assets/photos/Fideration.png";

function Index() {
  return (
    <div>
      <div className={Style.FideBoxWraper}>
        <div className={Style.FideBox}>
          <img src={Image1} />
          <h4>Fideration name</h4>
          <p>Lorem Ipsum is simply dummy text of the printing </p>
        </div>
        <div className={Style.FideBox}>
          <img src={Image1} /> <h4>Fideration name</h4>
          <p>Lorem Ipsum is simply dummy text of the printing </p>
        </div>
        <div className={Style.FideBox}>
          <img src={Image1} />
          <h4>Fideration name</h4>
          <p>Lorem Ipsum is simply dummy text of the printing </p>
        </div>
        <div className={Style.FideBox}>
          <img src={Image1} />
          <h4>Fideration name</h4>
          <p>Lorem Ipsum is simply dummy text of the printing </p>
        </div>
        <div className={Style.FideBox}>
          <img src={Image1} />
          <h4>Fideration name</h4>
          <p>Lorem Ipsum is simply dummy text of the printing </p>
        </div>
        <div className={Style.FideBox}>
          <img src={Image1} />
          <h4>Fideration name</h4>
          <p>Lorem Ipsum is simply dummy text of the printing </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
