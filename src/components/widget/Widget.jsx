import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {FaTradeFederation} from 'react-icons/fa'
import { Data } from "../../datatablesource";
import { NavLink } from "react-router-dom";
import { artist } from "../widgetcategory/artist/ArtistDum";
const Widget = ({ type }) => {
  let data;
  let federation=[]
    Data.forEach(data=>federation.push(data.federation_name))
  



  //temporary
  const diff = 20;
  switch (type) {
    case "arts":
      data = {
        id:1,
        title: "Arts",
        isMoney: false,
        link: "/vartist",
        description:"View all Artist",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
        size:artist.length | "0"
      };


      break;
    case "art":
      data = {
        id:2,
        title: "Art",
        link: "/vart",
        description:"View all Art",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
        size:federation.length | "0"

      };
      break;
    case "feration":
      data = {
        id:3,
        title: "Federation",
        link: "vfed",
        description: "View All Federation",
        icon: (
          <FaTradeFederation
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
          
        ),
        size:federation.length | "0"
      };
      break;
    case "category":
      data = {
        id:4,
        title: "Category",
        isMoney: true,
        link: "/vcat",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />

        ),
        size:federation.length | "0"
            ,        description: "View All Category",
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && ""} {data.size}
        </span>
        <span><NavLink className='link' to={data.link} key={data.id}>{data.description}</NavLink></span>
        

          



      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
