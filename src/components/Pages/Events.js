import React from "react";
import NavBar from "../NavBar/Index";
import Partner from "../box/partners/Index";
import Footer from "../Footer/Footer";
import PageIndicator from "../PageIndicator/Index";
import Style from "./EventStyle.module.css";
import EventCard from "../box/EventCard/Index";
import { MDBInput } from "mdb-react-ui-kit";
function Events() {
  return (
    <>
    <NavBar />
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
      <h1 className={Style.heading}>Previus Events</h1>
      <div className={Style.PreviusEvent}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/C_uoiUtqD00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/C_uoiUtqD00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <Partner />
      <Footer />
    </>
  );
}

export default Events;
