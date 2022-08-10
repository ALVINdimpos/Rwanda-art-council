import React from "react";
import Style from "./HomeStyle.module.css";
import NavBar from "../NavBar/Index";
import Header from "../HeaderDiv/Index";
import SearchBox from "../SearchBox/Index";
import SectionIndicator from "../sectionIndicator/Index";
import FidWOrkBox from "../box/FidWorkBox/Index";
import WhoWeAreBox from "../box/whoWeAreBox/Index";
import FidBox from "../box/FidBox/Index";
import EventBox from "../box/eventBox/Index";
import Categories from "../categories/Index";
import Testmonial from "../box/testmonial/Index";
import News from "../box/newsBox/Index";
import Partner from "../box/partners/Index";
import Footer from "../Footer/Footer";
import EventPhot from "../../assets/photos/mainevent.jpeg";
import EventPhot2 from "../../assets/photos/mainphoto.jpg";
import EventPhot3 from "../../assets/photos/Event.jpeg";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  const EventHandler = (e) => {
    e.preventDefaul();
    navigate("/Events");
  };
  return (
    <>
      <NavBar />
      <Header></Header>
      <SearchBox />
      <SectionIndicator name="Fideration's work" />
      <FidWOrkBox />
      <WhoWeAreBox />
      <SectionIndicator name="Fiderations" />
      <div className={Style.FiderationBoxWraper}>
        <FidBox
          fidname="Fideration name"
          fiddescription="Lorem Ipsum is simply dummy text of the printing"
        />
        <FidBox
          fidname="Fideration name"
          fiddescription="Lorem Ipsum is simply dummy text of the printing"
        />
        <FidBox
          fidname="Fideration name"
          fiddescription="Lorem Ipsum is simply dummy text of the printing"
        />
        <FidBox
          fidname="Fideration name"
          fiddescription="Lorem Ipsum is simply dummy text of the printing"
        />
        <FidBox
          fidname="Fideration name"
          fiddescription="Lorem Ipsum is simply dummy text of the printing"
        />
        <FidBox
          fidname="Fideration name"
          fiddescription="Lorem Ipsum is simply dummy text of the printing"
        />
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
      <Testmonial />
      <SectionIndicator name="Latest News" />
      <News />
      <Partner />
      <Footer />
    </>
  );
}

export default Home;
