import React, { useEffect, useState } from 'react'
import Style from"./Style.module.css"
const Index = () => {

const [Cinema,setCinema]= useState([]);
const fetchEvents = () => {
  fetch("http://art-council.herokuapp.com/api/v1/gallery/getById/5", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      setCinema(data);
    });
};
useEffect(() => {
  fetchEvents();
}, []);
  return (
    <><div className={Style.PhotoAlbum}>
    {Cinema.gallery?.map((gallery,id) => (
      <img src={gallery.image} alt="Loading..." key={id}/>
    ))}
  </div></>
  )
}

export default Index