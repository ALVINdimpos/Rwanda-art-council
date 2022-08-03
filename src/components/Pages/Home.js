import React from "react";
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
      <FidBox />
      <SectionIndicator name="Events" onClick={EventHandler}/>
      <EventBox />
      <SectionIndicator name="Categories"  />
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
