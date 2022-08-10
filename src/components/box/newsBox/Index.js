import React from "react";
import Style from "./Style.module.css";
import NewsBox from "../../box/eventBox/Index"
import NewsPhoto1 from "../../../assets/photos/news1.png";
import NewsPhoto2 from "../../../assets/photos/news2.png";
import NewsPhoto3 from "../../../assets/photos/news3.png";
import Button from '../../Button/Index'

function Index() {
  return (
    <div>
      <div className={Style.NewsWraper}>
      <NewsBox
        title="Donec Sit Amet Nibh"
        date="by Nick Roach | May 9, 2014 | Location"
        description="Donec eu consectetur purus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed rhoncus iaculis mauris eu mattis. Donec vel
            odio pellentesque, tristique massa sit amet, pharetra metus. Nam
            rutrum nulla vel blandit dignissim. Nulla turpis metus, malesuada in"
            img={NewsPhoto1}
      />
        <NewsBox
        title="Donec Sit Amet Nibh"
        date="by Nick Roach | May 9, 2014 | Location"
        description="Donec eu consectetur purus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed rhoncus iaculis mauris eu mattis. Donec vel
            odio pellentesque, tristique massa sit amet, pharetra metus. Nam
            rutrum nulla vel blandit dignissim. Nulla turpis metus, malesuada in"
            img={NewsPhoto2}
      />
      <NewsBox
        title="Donec Sit Amet Nibh"
        date="by Nick Roach | May 9, 2014 | Location"
        description="Donec eu consectetur purus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed rhoncus iaculis mauris eu mattis. Donec vel
            odio pellentesque, tristique massa sit amet, pharetra metus. Nam
            rutrum nulla vel blandit dignissim. Nulla turpis metus, malesuada in"
            img={NewsPhoto3}
      />
      </div>
    </div>
  );
}

export default Index;
