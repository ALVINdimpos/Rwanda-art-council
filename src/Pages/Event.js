/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import NavBar from "../components/NavBar/Index";
import Footer from "../components/Footer/Footer";
import PageIndicator from "../components/PageIndicator/Index";
import { useLocation } from "react-router-dom";
import "./Event.css";
function Events() {
  const {state} = useLocation();
  const [Event, setEvent] = useState(state.data);
  console.log(Event);
  return (
    <>
    <NavBar />
      <PageIndicator name={Event.title}/>
      <div className="Event_container">
        <div className="row">
          <div className="col-md-6">
            <img src={Event.img} alt="Loading..." />
          </div>
          <div className="col-md-6">
            <h1>{Event.title}</h1>
            <p>{Event.description}</p>
            <p>
              <span>Event date:</span> {Event.date}
            </p>
            <p>
              <span>Event time:</span> {Event.time}
            </p>
            <p>
              <span>Event location:</span> {Event.location}
            </p>
            <button >Book now</button>
              </div>
            </div>
          </div>
       
      <Footer />
    </>
  );
}

export default Events;
