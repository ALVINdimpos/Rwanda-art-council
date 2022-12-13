/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import NavBar from "../components/NavBar/Index";
import Footer from "../components/Footer/Footer";
import PageIndicator from "../components/PageIndicator/Index";
import { useLocation } from "react-router-dom";
function Events() {
  const {state} = useLocation();
  const [Event, setEvent] = useState(state.data);
  return (
    <>
    <NavBar />
      <PageIndicator name={Event.title}/>
      <Footer />
    </>
  );
}

export default Events;
