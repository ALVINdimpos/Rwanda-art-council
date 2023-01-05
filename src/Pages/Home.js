import React, { useEffect } from "react";
import { useState } from "react";
import Style from "./HomeStyle.module.css";
import NavBar from "../components/NavBar/Index";
import Header from "../components/HeaderDiv/Index";
import SectionIndicator from "../components/sectionIndicator/Index";
import WhoWeAreBox from "../components/box/whoWeAreBox/Index";
import Card from "../components/box/FidBox/Index";
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
const [Fideration, setFideration] = useState([]);
useEffect(() => {
  fetch(`https://api.rwandaartscouncil.rw/api/Federation/Pub`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setFideration(data);
    });
}, []);
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
      <div className="card_wrapper">
      {Fideration.info?.slice(0,3).map((federation, id) => (
        <Card
          key={id}
          data={federation}
          img={federation.logo}
          title={federation.fed_name}
          description={federation.description
          }
          id={federation.id}
        />
      ))}
    </div><div className={Style.FederationBoxWraper}>
        
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
