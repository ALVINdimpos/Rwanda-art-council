import React, { useState } from "react";
import NavBar from "../NavBar/Index";
import Partner from "../box/partners/Index";
import Footer from "../Footer/Footer";
import PageIndicator from "../PageIndicator/Index";
import Picture1 from "../../assets/photos/CatImage4.jpeg";
import Picture2 from "../../assets/photos/CateImage6.jpeg";
import Picture3 from "../../assets/photos/images2.png";
import Style from "./EventStyle.module.css";
import EventCard from "../box/EventCard/Index";
import { MDBInput } from "mdb-react-ui-kit";
function Events() {
  return (
    <>
      <PageIndicator name="Events" />
      <div className={Style.EventSearchWraper}>
        <div>
          <h1>Upcoming event</h1>
        </div>
        <div className={Style.EventSearchBox}>
          <div>
            <MDBInput
              id="typeText"
              type="text"
              placeholder="Search by category"
            />
          </div>
          <div>
            <MDBInput id="typeText" type="text" placeholder="Search by date" />
          </div>
        </div>
      </div>
      <div className={Style.EventsWraper}>
        <EventCard />
      </div>
      <NavBar />
      <Partner />
      <Footer />
    </>
  );
}

export default Events;
