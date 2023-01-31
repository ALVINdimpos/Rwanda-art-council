import React from "react";
import NavBar from "../components/NavBar/Index";
import Footer from "../components/Footer/Footer";
import PageIndicator from "../components/PageIndicator/Index";
import Style from "./EventStyle.module.css";
import EventCard from "../components/box/card/EventCardS/Index";
function Events() {
  return (
    <>
      <NavBar />
      <PageIndicator name="Events" />
      <div>
        <h1 className={Style.heading}>
          <span>
            <i className="fas fa-angle-double-right mr-1" />
          </span>
          Upcoming events
        </h1>
      </div>
      <div className={Style.eventBoxWraper}>
        <EventCard />
      </div>
      <h1 className={Style.heading}>
        <span>
          <i className="fas fa-angle-double-right mr-1" />
        </span>
        Previus Events
      </h1>
      <div className={Style.PreviusEvent}>
        <iframe
          width="560"
          height="371"
          src="https://www.youtube.com/embed/C_uoiUtqD00"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="371"
          src="https://www.youtube.com/embed/xdDf0lj1M4A"
          title="AMB MASOZERA YIBUKIJE ABANDITSI KO TURI MU BIHE BY’IKORANABUHANGA / ABANYARWANDA BAKENEYE SOFT BOOKS"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <Footer />
    </>
  );
}

export default Events;
