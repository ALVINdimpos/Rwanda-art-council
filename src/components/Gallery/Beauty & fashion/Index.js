import React, { useEffect, useState } from 'react'
import Style from"./Style.module.css"
const Index = () => {

const [Architecture,setArchitecture]= useState([]);
const fetchEvents = () => {
  fetch("https://api.rwandaartscouncil.rw/api/gallery/getById/4", {
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
    <><div className={Style.PhotoAlbum}>
    {Architecture.gallery?.map((gallery,id) => (
      <img src={gallery.image} alt="Loading..." key={id}/>
    ))}
  </div></>
  )
}

export default Index