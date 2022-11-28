/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Style from "./Style.module.css";

function Index(props) {
  return (
    <div >
         <div className={Style.ServiceBox}>
          <div className={Style.overFlow}>
            <img
              src={props.img}
              alt="Loading..."
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