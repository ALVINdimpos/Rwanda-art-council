import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/Index";
import Footer from "../components/Footer/Footer";
import Style from "./Whatwedo.module.css";
import PageIndicator from "../components/PageIndicator/Index";
import Partners from "../components/box/partners/Index"
function Whatwedo() {
  const [services, setServices] =useState("");
  const fentchData=()=>{
    fetch("http://art-council.herokuapp.com/api/service/all")
    .then((res)=>res.json())
    .then((data)=>{
      setServices(data)
    })
  }
  useEffect(()=>{
    fentchData()
  },[])
  return (
    <>
       <NavBar />
      <PageIndicator name="Our service" />
      <div className={Style.OurserviceHeader}>
        <h1>Our top services</h1>
      </div>
      <div className={Style.ServicesBoxWraper}>
     {services.services?.map((item,id)=>(
        <div className={Style.ServicesBox} key={id}>
          <div className={Style.overFlow}>
            <img src={item.image} alt="Loading..." className={Style.CardImgTop}/>
          </div>

          <h3>{item.title}</h3>
          <p>
            {item.description}
          </p>
        </div>
      ) )}
      </div>
   <Partners />
      <Footer />
    </>
  );
}

export default Whatwedo;
