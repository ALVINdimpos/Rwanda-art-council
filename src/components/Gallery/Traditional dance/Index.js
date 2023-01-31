import React, { useEffect, useState } from 'react'
import Style from"./Style.module.css"
const Index = () => {

const [Painting,setPainting]= useState([]);

// eslint-disable-next-line react-hooks/exhaustive-deps
const fetchEvents = () => {
  fetch("https://api.rwandaartscouncil.rw/api/gallery/getById/1", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      setPainting(data);
    });
};
useEffect(() => {
  fetchEvents();
}, [fetchEvents]);
  return (
    <><div className={Style.PhotoAlbum}>
    {Painting.gallery?.map((gallery,id) => (
      <img src={gallery.image} alt="Loading..." key={id}/>
    ))}
  </div></>
  )
}

export default Index