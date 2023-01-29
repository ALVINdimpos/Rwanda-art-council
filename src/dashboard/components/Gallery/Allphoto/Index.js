import React, { useEffect } from "react";
import { useState } from "react";
import Style from "./Style.module.css";
function Gallery() {
  const [AllPhoto, setAllPhoto] = useState([]);
  const fetchEvents = () => {
    fetch("http://art-council.herokuapp.com/api/v1/gallery/all", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setAllPhoto(data);
      });
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <>
      <div className={Style.PhotoAlbum}>
        {AllPhoto.galleries?.map((galleries, id) => (
          <img src={galleries.image} alt="" key={id} />
        ))}
      </div>
    </>
  );
}

export default Gallery;
