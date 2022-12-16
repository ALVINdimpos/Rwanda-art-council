import React, { useEffect } from "react";
import { useState } from "react";
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
import OurTeam from "../components/box/ourTeam/Index";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
const [Event, setEvent] = useState([]);
const fetchEvents = () => {
  fetch("https://api.rwandaartscouncil.rw/api/Event/All",{
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      setEvent(data);
    });
};
  const EventHandler = (e) => {
    navigate("/Event");
  };
  const FiderationsHandler =(e) =>{
    navigate("/Fiderations");
  }
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <>
      <NavBar />
      <Header></Header>
      <WhoWeAreBox />
      <SectionIndicator name="Federations" onClick={FiderationsHandler} />
      <div className={Style.FederationBoxWraper}>
        <FidBox />
        
      </div>

      <SectionIndicator name="Events" onClick={EventHandler} />
      <div className={Style.eventBoxWraper}>
        {Event.event?.slice(0,3).map((event, id) => (
        <EventBox
        key={id}
          title={event.title}
          date={ event.date }
          description={event.description}
          img={event.ev_image}
        />
        ))}
       
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
