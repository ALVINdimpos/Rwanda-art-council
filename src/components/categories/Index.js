import React from "react";
import Style from "./Style.module.css";
import pic from "../../assets/photos/palastic.png";
import Pic1 from "../../assets/photos/Fashion.png";
import Pic2 from "../../assets/photos/Cinema.png";
import Pic3 from "../../assets/photos/dance.png";
import Pic4 from "../../assets/photos/acting.png";
import Pic5 from "../../assets/photos/literature.png";

function Index() {
  return (
    <div>
      <div className={Style.CategoriesContainer}>
          <div className={Style.CategoriesColumn}>
        <img src={pic}alt="description of pic"/>
        <img src={Pic1}alt="description of pic"/>
        </div>
        <div>
         <img src={Pic2}alt="description of pic"/>
         </div>
         <div>
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
