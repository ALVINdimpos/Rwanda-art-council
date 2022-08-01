import React from "react";
import NavBar from "../NavBar/Index";
import Partner from "../box/partners/Index";
import Footer from "../Footer/Footer";
import PageIndicator from "../PageIndicator/Index";
import Style from "./About.module.css";
import Service1 from "../../assets/photos/Service1.png";
import Service2 from "../../assets/photos/Service2.png";
import Service3 from "../../assets/photos/Service3.png";
function Aboutus() {
  return (
    <>
      <PageIndicator name="About us" />
      <div className={Style.ContactHeader}>
        <div>
          <h1> Who we are</h1>
        </div>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an
          </p>
        </div>
      </div>
      <div className={Style.ServiceBoxWraper}>
        <div className={Style.ServiceBox}>
          <img src={Service1} alt="description of "/>
          <h2>Lorem Ipsum is simply</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis
          </p>
        </div>
        <div className={Style.ServiceBox}>
          <img src={Service2} alt="description of "/>
          <h2>Lorem Ipsum is simply</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis
          </p>
        </div>
        <div className={Style.ServiceBox}>
          <img src={Service3} alt="description of "/>
          <h2>Lorem Ipsum is simply</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis
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

export default Aboutus;
