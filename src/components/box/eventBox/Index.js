import React from "react";
import Style from "./Style.module.css";
import EventPhot from "../../../assets/photos/mainevent.jpeg";
import EventPhot2 from "../../../assets/photos/mainphoto.jpg";
import EventPhot3 from "../../../assets/photos/Event.jpeg";
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
