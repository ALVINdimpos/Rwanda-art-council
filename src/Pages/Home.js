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
import Carousel from "framer-motion-carousel";

function Home() {
  const navigate = useNavigate();
  const [Event, setEvent] = useState([]);
  const [Federation, setFederation] = useState([]);
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
        setFederation(data);
      });
  }, []);
  const fetchEvents = () => {
    fetch("https://api.rwandaartscouncil.rw/api/Event/All", {
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
    navigate("/event");
  };
  const FederationsHandler = (e) => {
    navigate("/federations");
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <>
      <NavBar />
      <Header></Header>
      <WhoWeAreBox />
      <SectionIndicator name="Federations" onClick={FederationsHandler} />
      <div className="card_wrapper">
        {Federation.info?.slice(0, 3).map((federation, id) => (
          <Card
            key={id}
            data={federation}
            img={federation.logo}
            title={federation.fed_name}
            description={federation.description}
            id={federation.id}
          />
        ))}
      </div>

      <SectionIndicator name="Events" onClick={EventHandler} />
      <div className={Style.eventsContainer}>
        <div className={Style.eventsDescription}>
          <div className={Style.whoWeAreContent}>
            <h2 className={Style.whoWeAreTitle}>
            Rwanda Arts Council Events
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </div>
        </div>
        <div className={Style.carouselContainer}>
          <Carousel
            renderDots={() => <div></div>}
            autoPlay={true}
            interval={3000}
          >
            {Event?.event?.map((event, index) => (
              <EventBox
                key={index}
                title={event.title}
                date={event.date}
                description={event.description}
                img={event.ev_image}
              />
            ))}
          </Carousel>
        </div>
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
