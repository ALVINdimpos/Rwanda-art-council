import React from "react";
import NavBar from "../NavBar/Index";
import Footer from "../Footer/Footer";
import Style from "./Gallery.module.css";
import PHOTO from "../../assets/photos/new.jpeg";
import PHOTO1 from "../../assets/photos/CatImage1.jpeg";
import PHOTO2 from "../../assets/photos/CatImage2.jpeg";
import PHOTO3 from "../../assets/photos/CatImage3.jpeg";
import PHOTO4 from "../../assets/photos/CatImage4.jpeg";
import PHOTO5 from "../../assets/photos/CateImage5.jpeg";
import PHOTO6 from "../../assets/photos/CateImage6.jpeg";
import PHOTO7 from "../../assets/photos/CateImage7.jpeg";
import PHOTO8 from "../../assets/photos/CateImage8.jpeg";
import PHOTO9 from "../../assets/photos/CateImage9.jpeg";
import PHOTO10 from "../../assets/photos/CateImage10.jpeg";
import PageIndicator from "../PageIndicator/Index";
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
    <NavBar />
      <PageIndicator name="Gallery" />
      <div>
        <ul className={Style.GalleryCategorie}>
          <li>All</li>
          <li>Painting</li>
          <li>Sculpture</li>
          <li>Literature</li>
          <li>Architecture</li>
          <li>Cinema</li>
          <li>Music</li>
          <li>Theater</li>
        </ul>
      </div>
      <div className={Style.PhotoAlbum}>
        {photos.map((photo) => (
          <img src={photo.src} photo={photo} alt=""/>
        ))}
      </div>
      
      <Footer />
    </>
  );
}

export default Gallery;
