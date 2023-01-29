import React from "react";
import NavBar from "../components/NavBar/Index";
import Footer from "../components/Footer/Footer";
import PageIndicator from "../components/PageIndicator/Index";
import Style from "./EventStyle.module.css";
import EventCard from "../components/box/EventCard/Index";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBIcon } from "mdbreact";

function Events() {
  return (
    <>
      <NavBar />
      <PageIndicator name="Events" />
      <div>
        <h1 className={Style.heading}>
          <span>
            <MDBIcon fas icon="angle-double-right" />
          </span>
          Upcoming events
        </h1>
      </div>
      <div className={Style.eventBoxWraper}>
        <EventCard />
      </div>
      <h1 className={Style.heading}>
        <span>
          <MDBIcon className="mr-1" fas icon="angle-double-right" />
        </span>
        Previus Events
      </h1>
      <div className={Style.PreviusEvent}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/C_uoiUtqD00"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/C_uoiUtqD00"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Footer />
    </>
  );
}

export default Events;
