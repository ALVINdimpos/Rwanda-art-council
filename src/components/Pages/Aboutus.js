import React from "react";
import NavBar from "../NavBar/Index";
import Footer from "../Footer/Footer";
import PageIndicator from "../NavBar/PageIndicator/Index";
import Style from "./About.module.css";
import Service1 from "../../assets/photos/Service1.png";
import Service2 from "../../assets/photos/Service2.png";
import Service3 from "../../assets/photos/Service3.png";
import ServiceCard from "../box/OurServiceCard/Index";
import OurTeam from "../box/ourTeam/Index"
function Aboutus() {
  return (
    <> 
    <NavBar />
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
        <ServiceCard
          header="Mission"
          img={Service1}
          subheader="Lorem Ipsum is simply"
          description="Lorem ipsum dolor sit amen, consectetur advising elit. Cursus nibh
            maurist, nec turpis Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cursus nibh mauris, nec turpisLorem"
        />
        <ServiceCard
          header="Vision"
          img={Service2}
          subheader="Lorem Ipsum is simply"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cursus nibh mauris, nec turpisLorem"
        />
        <ServiceCard
          header="Our value"
          img={Service3}
          subheader="Lorem Ipsum is simply"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cursus nibh mauris, nec turpisLorem"
        />
      </div>
      <OurTeam/>
      <Footer />
    </>
  );
}

export default Aboutus;
