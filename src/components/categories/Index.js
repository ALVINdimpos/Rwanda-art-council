import React from "react";
import Style from "./Style.module.css";
import Photo from "../../assets/photos/PLASTIC.png";
import Photo1 from "../../assets/photos/Fashion.png";
import Photo2 from "../../assets/photos/Cinema.png";
import Photo3 from "../../assets/photos/dance.png";
import Photo4 from "../../assets/photos/acting.png";
import Photo5 from "../../assets/photos/literature.png";

function Index() {
  return (
    <div>
      <div className={Style.CategoriesContainer}>
          <div className={Style.CategoriesColumn}>
        <img src={Photo}alt="description of photo"/>
        <img src={Photo1}alt="description of photo"/>
        </div>
        <div>
         <img src={Photo2}alt="description of photo"/>
         </div>
         <div>
        <img src={Photo3}alt="description of photo"/>
        </div>
        <div className={Style.CategoriesColumn}>
        <img src={Photo4}alt="description of photo"/>
        <img src={Photo5}alt="description of photo"/>
        </div>
      </div>
    </div>
  );
}

export default Index;
