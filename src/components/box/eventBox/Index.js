import React from "react";
import Style from "./Style.module.css";
import EventPhot from "../../../assets/photos/eventPhoto.png";
import Button from "../../Button/Index";
function Index() {
  return (
    <div>
      <div className={Style.eventBoxWraper}>
        <div className={Style.eventBox}>
          <img src={EventPhot} alt="description of image" />
          <h4>Donec Sit Amet Nibh</h4>
          <h5>by Nick Roach | May 9, 2014 | Category</h5>
          <p>
            Donec eu consectetur purus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed rhoncus iaculis mauris eu mattis. Donec vel
            odio pellentesque, tristique massa sit amet, pharetra metus. Nam
            rutrum nulla vel blandit dignissim. Nulla turpis metus, malesuada in
            
          </p>
          <Button name="Read more"/>
        </div>
        <div className={Style.eventBox}>
          <img src={EventPhot} alt="description of image" />
          <h4>Donec Sit Amet Nibh</h4>
          <h5>by Nick Roach | May 9, 2014 | Location</h5>
          <p>
            Donec eu consectetur purus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed rhoncus iaculis mauris eu mattis. Donec vel
            odio pellentesque, tristique massa sit amet, pharetra metus. Nam
            rutrum nulla vel blandit dignissim. Nulla turpis metus, malesuada in
            
          </p>
          <Button name="Read more"/>
        </div>
        <div className={Style.eventBox}>
          <img src={EventPhot} alt="description of image"/>
          <h4>Donec Sit Amet Nibh</h4>
          <h5>by Nick Roach | May 9, 2014 | Location</h5>
          <p>
            Donec eu consectetur purus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed rhoncus iaculis mauris eu mattis. Donec vel
            odio pellentesque, tristique massa sit amet, pharetra metus. Nam
            rutrum nulla vel blandit dignissim. Nulla turpis metus, malesuada in
           
          </p>
           <Button name="Read more"/>
        </div>
      </div>
    </div>
  );
}

export default Index;
