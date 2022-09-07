import './side.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { Link } from "react-router-dom";

import logo from './logo.png'

const FedSidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo"><img src={logo} alt="logo" className='log-img'/></span>
        </Link>
      </div>
      <div className="center">

        <ul>
      
          <Link to="/homefederation" style={{ textDecoration: "none" }}>
            <li>
            <DashboardIcon className="icon" />
              <span>Home</span>
            </li>
          </Link>
          <Link to="/unios" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Union</span>
            </li>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Book Event</span>
            </li>
          </Link>
      
          {/* <Link to="/createEvent" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Create Event</span>
            </li>
          </Link> */}
          
          <li>
            <ExitToAppIcon className="icon" />
            <span>Exit</span>
          </li>
        </ul>
      </div>
 
    </div>
  );
};

export default FedSidebar;
