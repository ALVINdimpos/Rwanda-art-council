import React, { useEffect, useState } from 'react'
import Style from"./Style.module.css"
const Index = () => {

const [Painting,setPainting]= useState([]);

// eslint-disable-next-line react-hooks/exhaustive-deps
const fetchEvents = () => {
  fetch("http://art-council.herokuapp.com/api/v1/gallery/getById/1", {
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