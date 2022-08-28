import React from "react";
import PhotoAlbum from "react-photo-album";
import NavBar from "../NavBar/Index";
import Partner from "../box/partners/Index";
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
import PageIndicator from "../NavBar/PageIndicator/Index";
const photos = [
  {
    src: PHOTO,
    category:"Painting"
  },
  {
    src: PHOTO1,
    category:"Sculpture"
  },
  {
    src: PHOTO2,
    category:"Literature"
  },
  {
    src: PHOTO4,
    category:"Architecture"
  },
  {
    src: PHOTO3,
    category:"Cinema"
  },
  {
    src: PHOTO5,
    category:"Music"
  },
  {
    src: PHOTO9,
    category:"Theater"
  },
  {
    src: PHOTO10,
    category:"Painting"
  },
  
];

function Gallery() {

  return (
    <>
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
        <img src={PHOTO} className={Style.PhotoGallery}alt="description of image" />
        <img src={PHOTO1} alt="description of image"/>
        <img src={PHOTO2} alt="description of image"/>
        <img src={PHOTO3} alt="description of image"/>
        <img src={PHOTO4} alt="description of image"/>
        <img src={PHOTO5} alt="description of image"/>
        <img src={PHOTO6} alt="description of image"/>
        <img src={PHOTO7} alt="description of image"/>
        <img src={PHOTO8} alt="description of image"/>
        <img src={PHOTO9} alt="description of image"/>
      </div>

      <NavBar />
      <Partner />
      <Footer />
    </>
  );
}

export default Gallery;
