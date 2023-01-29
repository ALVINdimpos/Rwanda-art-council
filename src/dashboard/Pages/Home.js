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
import { useState, useEffect } from "react";
import OurTeam from "../components/box/ourTeam/Index";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [Event, setEvent] = useState([]);
  const fetchEvents = () => {
    fetch("http://art-council.herokuapp.com/api/Event/All", {
      params: {
        _limit: 3,
      },
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
  const FiderationsHandler = (e) => {
    navigate("/Fiderations");
  };
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
        {Event.event?.map((event, id) => (
          <EventBox
            key={id}
            title={event.title}
            date={event.date}
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
