import React from 'react'
import Style from"./Style.module.css"
import Photo from "../../../assets/photos/Sculpture1.jpg"
import Photo1 from "../../../assets/photos/Sculpture2.jpg"
import Photo2 from "../../../assets/photos/Sculpture3.jpg"
import Photo3 from "../../../assets/photos/Sculpture4.jpeg"
const photos = [
    {
      src:Photo ,
      category: "Painting",
    },
    {
      src:Photo1 ,
      category: "Painting",
    },
    {
      src:Photo2 ,
      category: "Painting",
    },
    {
        src:Photo3 ,
        category: "Painting",
      }
]
const Index = () => {
  return (
    <><div className={Style.PhotoAlbum}>
    {photos.map((photo) => (
      <img src={photo.src} photo={photo} alt=""/>
    ))}
  </div></>
  )
}

export default Index