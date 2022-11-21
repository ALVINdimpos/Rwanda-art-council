import React from "react";
import Style from "./HomeStyle.module.css";
import NavBar from "../components/NavBar/Index";
import Header from "../components/HeaderDiv/Index";
import SectionIndicator from "../components/sectionIndicator/Index";
import WhoWeAreBox from "../components/box/whoWeAreBox/Index";
import FidBox from "../components/box/FidBox/Index";
import EventBox from "../components/box/eventBox/Index";
import Categories from "../components/categories/Index";
import Testmonial from "../components/box/testmonial/Index";
import Partner from "../components/box/partners/Index";
import Footer from "../components/Footer/Footer";
import EventPhot from "../assets/photos/mainevent.jpeg";
import EventPhot2 from "../assets/photos/mainphoto.jpg";
import EventPhot3 from "../assets/photos/Event.jpeg";
import OurTeam from "../components/box/ourTeam/Index";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  const EventHandler = (e) => {
    navigate("/Event");
  };
  return (
    <>
      <NavBar />
      <Header></Header>
      <WhoWeAreBox />
      <SectionIndicator name="Federations" />
      <div className={Style.FederationBoxWraper}>
        <FidBox />
        <FidBox />
        <FidBox />
        <FidBox />
      </div>

      <SectionIndicator name="Events" onClick={EventHandler} />
      <div className={Style.eventBoxWraper}>
        <EventBox
          title="Donec Sit Amet Nibh"
          date="by Nick Roach | May 9, 2014 | Location"
          description="Donec eu consectetur purus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed rhoncus iaculis mauris eu mattis. Donec vel
            odio pellentesque, tristique massa sit amet, pharetra metus. Nam
            rutrum nulla vel blandit dignissim. Nulla turpis metus, malesuada in"
          img={EventPhot}
        />
        <EventBox
          title="Donec Sit Amet Nibh"
          date="by Nick Roach | May 9, 2014 | Location"
          description="Donec eu consectetur purus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed rhoncus iaculis mauris eu mattis. Donec vel
            odio pellentesque, tristique massa sit amet, pharetra metus. Nam
            rutrum nulla vel blandit dignissim. Nulla turpis metus, malesuada in"
          img={EventPhot2}
        />
        <EventBox
          title="Donec Sit Amet Nibh"
          date="by Nick Roach | May 9, 2014 | Location"
          description="Donec eu consectetur purus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed rhoncus iaculis mauris eu mattis. Donec vel
            odio pellentesque, tristique massa sit amet, pharetra metus. Nam
            rutrum nulla vel blandit dignissim. Nulla turpis metus, malesuada in"
          img={EventPhot3}
        />
      </div>

      <SectionIndicator name="Categories" />
      <Categories />
      <OurTeam />
      <Testmonial />
      <Partner />
      <Footer />
    </>
  );
}

export default Home;