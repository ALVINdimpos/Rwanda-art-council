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
import Button from "../components/Button/Index";
import Footer from "../components/Footer/Footer";
import Model from "../components/box/AddTestmonial/Index";
import { useNavigate } from "react-router-dom";
import Carousel from "framer-motion-carousel";
import { MDBModal } from "mdb-react-ui-kit";
function Home() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
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
      <Header />
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
            <h2 className={Style.whoWeAreTitle}>Rwanda Arts Council Events</h2>
            <p>
              The Rwanda Arts Council (R.A.C) established as a unique council
              which is charged with spearheading council’s sustainable
              development by ensuring the creativity in cultural arts is
              actively well positioned and professionally represented with
              dedication and expertise, in order to contribute in social
              economic development of Rwanda
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
      
      <Testmonial />
      <div className={Style.align_right}>
        <Button name="Add testmonial" onClick={toggleShow} />
      </div>

      <MDBModal
        show={basicModal}
        setShow={setBasicModal}
        tabIndex="-1"
        class="float-end"
      >
        <Model />
      </MDBModal>
      <Partner />
      <Footer />
    </>
  );
}
export default Home;
