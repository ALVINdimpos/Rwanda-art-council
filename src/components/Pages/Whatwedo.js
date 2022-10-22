import React from "react";
import NavBar from "../NavBar/Index";
import Footer from "../Footer/Footer";
import Style from "./Whatwedo.module.css";
import pic2 from "../../assets/photos/new.jpeg";
import pic3 from "../../assets/photos/Back3.jpg";
import pic1 from "../../assets/photos/Back2.jpg";
import PageIndicator from "../NavBar/PageIndicator/Index";
function Whatwedo() {
  return (
    <>
      <NavBar />
      <PageIndicator name="Our service" />
      <div className={Style.OurserviceHeader}>
        <h1>Our top services</h1>
      </div>
      <div className={Style.ServicesBoxWraper}>
        <div className={Style.ServicesBox}>
          <div className={Style.overFlow}>
            <img
              src={pic2}
              alt="description of pic"
              className={Style.CardImgTop}
            />
          </div>

          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cursus nibh mauris, nec turpis
          </p>
        </div>
        <div className={Style.ServicesBox}>
          <div className={Style.overFlow}>
            <img
              src={pic1}
              alt="description of pic"
              className={Style.CardImgTop}
            />
          </div>

          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cursus nibh mauris, nec turpis
          </p>
        </div>
        <div className={Style.ServicesBox}>
          <div className={Style.overFlow}>
            <img
              src={pic3}
              alt="description of pic"
              className={Style.CardImgTop}
            />
          </div>

          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cursus nibh mauris, nec turpis
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Whatwedo;
