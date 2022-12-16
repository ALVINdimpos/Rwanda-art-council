/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Style from "./Style.module.css";
import Button from "../../Button/Index";
import Model from "../../box/EventModal/Index";
import { useState } from "react";
import { MDBModal } from "mdb-react-ui-kit";

function Index() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [Event, setEvent] = useState([]);
  const Token = localStorage.getItem("token");
  const fetchEvents = () => {
    fetch("https://api.rwandaartscouncil.rw/api/Event/All", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setEvent(data);
      });
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <div>
      <div className={Style.CardWraper}>
        {Event.event?.map((event, id) => (
          <div className={Style.Card} key={id}>
            <div className={Style.overFlow}>
              <img
                src={event.ev_image}
                alt="Loading..."
                className={Style.CardImgTop}
              />
            </div>
            <h4>{event.title}</h4>
            <div className={Style.DateCardWraper}>
              <div className={Style.DateCard}>
                <h5>August</h5>
                <h5>2022</h5>
                <h5>12</h5>
              </div>
              <div>
                <div className={Style.EventCardContentDescription}>
                  <p>{event.description}</p>
                </div>
                <div className={Style.EventButton}>
                  <Button name="Book now" onClick={toggleShow} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <Model />
      </MDBModal>
    </div>
  );
}

export default Index;
