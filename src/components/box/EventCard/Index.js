import React, { useEffect } from "react";
import Picture1 from "../../../assets/photos/CatImage4.jpeg";
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
    fetch("https://rwanda-art-api.herokuapp.com/api/events/create", {
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
                src={Picture1}
                alt="description"
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
{
  /* // map through events and display them  here
      <div className={Style.EventCard}>
        {Event.map((event) => {
          return (
            <div className={Style.EventCard}>
              <div className={Style.EventCardImage}>
                <img src={Picture1} alt="Event" />
              </div>
              <div className={Style.EventCardContent}>
                <div className={Style.EventCardContentTitle}>
                  <h3>{event.title}</h3>
                </div>
                <div className={Style.EventCardContentDescription}>
                  <p>{event.description}</p>
                </div>
                <div className={Style.EventCardContentButton}>
                  <Button onClick={toggleShow}>View Event</Button>
                </div>
              </div>
            </div>
          );
        }
        )}
      </div>
      <MDBModal isOpen={basicModal} toggle={toggleShow}>
        <Model />
      </MDBModal>
    </div>
  );
} */
}
