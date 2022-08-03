import React from "react";
import Style from "./Style.module.css";
import whoWeArePhoto from '../../../assets/photos/WhoWeAre.png'
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
            Lorem Ipsum is simply dummy text of the printing andtypesetting
            industry. Lorem Ipsum has been theindustry's standard dummy text
            ever since the 1500s, Lorem Ipsum is simply dummy text of the
            printing andtypesetting industry. Lorem Ipsum has been theindustry's
            standard dummy text ever since the 1500s,{" "}
          </p>
          <Button name="Read more" onClick={whoHandler}/>
        </div>
        <div className={Style.whoWeArePhoto}>

       <img src={whoWeArePhoto }alt="description of "/>
        </div>
      </div>
    </div>
  );
}

export default Index;
