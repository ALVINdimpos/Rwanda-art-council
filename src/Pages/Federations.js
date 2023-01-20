import React, { useEffect } from "react";
import Style from "./Federations.module.css";
import NavBar from "../components/NavBar/Index";
import Card from "../components/box/FidBox/Index";
import Footer from "../components/Footer/Footer";
import PageIndicator from "../components/PageIndicator/Index";
import { useState } from "react";
const Federations = () => {
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
  return (
    <div>
      <NavBar />
      <PageIndicator name="More federations" />
      <div className={Style.FederationBoxWraper}>
        {Federation.info?.map((federation, id) => (
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

      <Footer />
    </div>
  );
};

export default Federations;
