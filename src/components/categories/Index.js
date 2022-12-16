import React from "react";
import Style from "./Style.module.css";
import pic from "../../assets/photos/drow.jpeg";
import Pic1 from "../../assets/photos/dance1.jpeg";
import Pic2 from "../../assets/photos/cinema.jpeg";
import Pic3 from "../../assets/photos/music.jpeg";
import Pic4 from "../../assets/photos/tools.jpeg";
import Pic5 from "../../assets/photos/literature.jpeg";

function Index() {
  return (
    <div>
      <div className={Style.CategoriesContainer}>
          <div className={Style.CategoriesColumn}>
        <img src={pic}alt="description of pic"/>
        <img src={Pic1}alt="description of pic"/>
        </div>
        <div className={Style.column_photo}>
         <img src={Pic2} alt="description of pic"/>
                </div>
         <div className={Style.column_photo}>
        <img src={Pic3}alt="description of pic"/>
        </div>
        <div className={Style.CategoriesColumn}>
        <img src={Pic4}alt="description of pic"/>
        <img src={Pic5}alt="description of pic"/>
        </div>
      </div>
    </div>
  );
}

export default Index;
