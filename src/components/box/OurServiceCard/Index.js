import React from 'react'
import Style from "./Style.module.css";
import Service1 from "../../../assets/photos/Service1.png";

function Index(props) {
  return (
    <div>
         <div className={Style.ServiceBox}>
          <div className={Style.overFlow}>
            <img
              src={props.img}
              alt="description of image"
              className={Style.CardImgTop}
            />
            <div className={Style.OurValue}>
              <h1>{props.header}</h1>
            </div>
          </div>
          <h2>{props.subheader}</h2>
          <p>
            {props.description}
          </p>
        </div>
    </div>
  )
}

export default Index