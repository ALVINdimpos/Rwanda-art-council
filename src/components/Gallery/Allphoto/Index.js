import React, { useEffect } from "react";
import { useState } from "react";
import Style from "./Style.module.css";
function Gallery() {
  const [AllPhoto,setAllPhoto]= useState([]);
const fetchEvents = () => {
  fetch("https://api.rwandaartscouncil.rw/api/v1/gallery/all", {
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
          <img src={galleries.image}  alt="Loading..." key={id}/>
        ))}
      </div>
    
    </>
  );
}

export default Gallery;
