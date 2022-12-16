import React, { useEffect, useState } from 'react'
import Style from"./Style.module.css"
const Index = () => {

const [Literature,setLiterature]= useState([]);
const fetchEvents = () => {
  fetch("https://api.rwandaartscouncil.rw/api/v1/gallery/getById/3", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      setLiterature(data);
    });
};
useEffect(() => {
  fetchEvents();
}, []);
  return (
    <><div className={Style.PhotoAlbum}>
    {Literature.gallery?.map((gallery,id) => (
      <img src={gallery.image} alt="Loading..." key={id}/>
    ))}
  </div></>
  )
}

export default Index