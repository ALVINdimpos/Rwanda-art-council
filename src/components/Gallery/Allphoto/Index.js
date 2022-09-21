import React from "react";
import Style from "./Style.module.css";
import PHOTO from "../../../assets/photos/new.jpeg";
import PHOTO1 from "../../../assets/photos/CatImage1.jpeg";
import PHOTO2 from "../../../assets/photos/CatImage2.jpeg";
import PHOTO3 from "../../../assets/photos/CatImage3.jpeg";
import PHOTO4 from "../../../assets/photos/CatImage4.jpeg";
import PHOTO5 from "../../../assets/photos/CateImage5.jpeg";
import PHOTO6 from "../../../assets/photos/CateImage6.jpeg";
import PHOTO7 from "../../../assets/photos/CateImage7.jpeg";
import PHOTO8 from "../../../assets/photos/CateImage8.jpeg";
import PHOTO9 from "../../../assets/photos/CateImage9.jpeg";
import PHOTO10 from "../../../assets/photos/CateImage10.jpeg";
const photos = [
  {
    src: PHOTO,
    category: "Painting",
  },
  {
    src: PHOTO6,
    category: "Painting",
  },
  {
    src: PHOTO7,
    category: "Painting",
  },
  {
    src: PHOTO1,
    category: "Sculpture",
  },
  {
    src: PHOTO8,
    category: "Sculpture",
  },
  {
    src: PHOTO2,
    category: "Literature",
  },
  {
    src: PHOTO4,
    category: "Architecture",
  },
  {
    src: PHOTO3,
    category: "Cinema",
  },
  {
    src: PHOTO5,
    category: "Music",
  },
  {
    src: PHOTO9,
    category: "Theater",
  },
  {
    src: PHOTO10,
    category: "Painting",
  },
];

function Gallery() {
  return (
    <>
      <div className={Style.PhotoAlbum}>
        {photos.map((photo) => (
          <img src={photo.src} photo={photo} alt=""/>
        ))}
      </div>
    
    </>
  );
}

export default Gallery;
