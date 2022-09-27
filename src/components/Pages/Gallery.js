import React from "react";
import NavBar from "../NavBar/Index";
import PageIndicator from "../PageIndicator/Index";
import Footer from "../Footer/Footer";
import Style from "./Gallery.module.css";
import All from "../Gallery/Allphoto/Index"
import Painting from "../Gallery/Painting/Index"
import Sculpture from "../Gallery/Sculpture/Index"
import Literature from "../Gallery/Literature/Index"
import Architecture from "../Gallery/Architecture/Index"
import Cinema from "../Gallery/Cinema/Index"
import Music from "../Gallery/Allphoto/Index"
import Theater from "../Gallery/Theater/Index"
function Gallery() {
  const [ActiveTab, setActiveTab] = React.useState(1);
  return (
    <>
    <NavBar />
      <PageIndicator name="Gallery" />
      <div>
        <ul className={Style.GalleryCategorie}>
          <li onClick={()=>setActiveTab(1)}>All </li>
          <li onClick={()=>setActiveTab(2)}>Painting</li>
          <li onClick={()=>setActiveTab(3)}>Sculpture</li>
          <li onClick={()=>setActiveTab(4)}>Literature</li>
          <li onClick={()=>setActiveTab(5)}>Architecture</li>
          <li onClick={()=>setActiveTab(6)}>Cinema</li>
          <li onClick={()=>setActiveTab(7)}>Music</li>
          <li onClick={()=>setActiveTab(8)}>Theater</li>
        </ul>
      </div>
      {
        ActiveTab===1 && (
     <All/>
      )}
       {
        ActiveTab===2 && (
     <Painting/>
      )}
       {
        ActiveTab===3 && (
     <Sculpture/>
      )}
       {
        ActiveTab===4 && (
     <Literature/>
      )}
       {
        ActiveTab===5 && (
     <Architecture/>
      )}
       {
        ActiveTab===6 && (
     <Cinema/>
      )}
       {
        ActiveTab===7 && (
     <Music/>
      )}
       {
        ActiveTab===8 && (
     <Theater/>
      )}
      <Footer />
    </>
  );
}

export default Gallery;
