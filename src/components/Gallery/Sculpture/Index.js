import React, { useEffect, useState } from "react";
import Style from "./Style.module.css";
const Index = () => {
  const [Sculpture, setSculpture] = useState([]);
  const fetchEvents = () => {
    fetch("http://art-council.herokuapp.com/api/v1/gallery/getById/2", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setSculpture(data);
      });
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <>
      <div className={Style.PhotoAlbum}>
        {Sculpture.gallery?.map((gallery, id) => (
          <img src={gallery.image} alt="" key={id} />
        ))}
      </div>
    </>
  );
};

export default Index;
