import React from "react";
import Style from "./Style.module.css";
import whoWeArePhoto from '../../../assets/photos/Back3.jpg'
import Button from "../../Button/Index";
import { useNavigate } from "react-router-dom";

function Index() {
 const navigate =useNavigate();
 const whoHandler=(e)=>{
 e.preventDefault();
 navigate('/Aboutus')

  }
  return (
    <div>
      <div className={Style.whoWeAreBox}>
        <div className={Style.whoWeAreContent}>
          <h1>WHO WE ARE</h1>
          <h2>We Help To Get Solutions</h2>
          <p>
          Rwanda Arts Council is None Profit Organization 
          established by the artists purposly to bringing 
          together all the artists to advocate for them, and 
          creating broad lines that help them make profit through their Art.
          </p>
          <Button name="Read more" onClick={whoHandler}/>
        </div>
        <div className={Style.whoWeArePhoto}>

       <img src={whoWeArePhoto} alt="Loading..."/>
        </div>
      </div>
    </div>
  );
}

export default Index;
