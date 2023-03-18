import React from "react";
import NavBar from "../components/NavBar/Index";
import Footer from "../components/Footer/Footer";
import PageIndicator from "../components/PageIndicator/Index";
import Style from "./About.module.css";
import Service1 from "../assets/photos/dance1.jpeg";
import Service2 from "../assets/photos/music.jpeg";
import Service3 from "../assets/photos/cinema.jpeg";
import ServiceCard from "../components/box/OurServiceCard/Index";
import OurTeam from "../components/box/ourTeam/Index";

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
            Rwanda Arts Council is None Profit Organization established by the
            artists purposly to bringing together all the artists to advocate
            for them, and creating broad lines that help them make profit
            through their Art.
          </p>
        </div>
      </div>
      <div className={Style.ServiceBoxWraper}>
        <ServiceCard
          header="Mission"
          img={Service1}
          subheader="Socially and economically"
          description="To promote a socially and economically 
          vibrant sector by creating an enabling environment for 
          cultural and creative industries."
        />
        <ServiceCard
          header="Vision"
          img={Service2}
          subheader="Professional and sustainable "
          description=" A pioneer of a dynamic, 
          professional and sustainable cultural 
          and creative arts sector in  Rwanda."
        />
        <ServiceCard
          header="Our value"
          img={Service3}
          subheader="Foundation of success"
          description="Creative diversity, professionalism, 
          originality, productivity, transparency, integrity, 
          sustainability, transformation, and self-identity
           combine to form the foundation of success."
        />
      </div>
      <OurTeam />
      <Footer />
    </>
  );
}

export default Aboutus;
