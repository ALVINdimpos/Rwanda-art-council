import React, { useEffect, useState } from "react";
import Style from "./Style.module.css";
const Index = () => {
  const [Architecture, setArchitecture] = useState([]);
  const fetchEvents = () => {
    fetch("http://art-council.herokuapp.com/api/v1/gallery/getById/4", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setArchitecture(data);
      });
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <>
      <div className={Style.PhotoAlbum}>
        {Architecture.gallery?.map((gallery, id) => (
          <img src={gallery.image} alt="" key={id} />
        ))}
      </div>
    </>
  );
};

export default Index;
