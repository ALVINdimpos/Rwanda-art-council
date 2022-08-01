import React from "react";
import NavBar from "../NavBar/Index";
import Partner from "../box/partners/Index";
import Footer from "../Footer/Footer";
import PageIndicator from "../PageIndicator/Index";

function Events() {
  return (
    <>
      <PageIndicator name="Event" />
      <NavBar />
      <Partner />
      <Footer />
    </>
  );
}

export default Events;
