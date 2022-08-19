import React from "react";
import NavBar from "../NavBar/Index";
import Partner from "../box/partners/Index";
import Footer from "../Footer/Footer";
import Style from "./Whatwedo.module.css";
import Image1 from "../../assets/photos/painting.jpg";
import Image2 from "../../assets/photos/mainphoto.jpg";
import Image3 from "../../assets/photos/imigongo.jpg";
import PageIndicator from "../PageIndicator/Index";
function Whatwedo() {
  return (
    <>
      <PageIndicator name="Our service" />
      <div className={Style.OurserviceHeader}>
        <h3>What we do</h3>
        <h1>our top services</h1>
      </div>
      <div className={Style.ServicesBoxWraper}>
        <div className={Style.ServicesBox}>
          <div className={Style.overFlow}>
            <img src={Image1} alt="description of image" className={Style.CardImgTop}/>
          </div>

          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis
          </p>
        </div>
        <div className={Style.ServicesBox}>
        <div className={Style.overFlow}>
            <img src={Image2} alt="description of image" className={Style.CardImgTop}/>
          </div>

          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis
          </p>
        </div>
        <div className={Style.ServicesBox}>
        <div className={Style.overFlow}>
            <img src={Image3} alt="description of image" className={Style.CardImgTop}/>
          </div>

          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis
          </p>
        </div>
      </div>

      <NavBar />
      <Partner />
      <Footer />
    </>
  );
}

export default Whatwedo;