import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { Link } from "react-router-dom";

import logo from './logo.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo"><img src={logo} alt="logo" className='log-img'/></span>
        </Link>
      </div>
      <div className="center">
      {/* <p className="title">HOME</p> */}

        <ul>
      
          <Link to="/logindash" style={{ textDecoration: "none" }}>
            <li>
            <DashboardIcon className="icon" />
              <span>Home</span>
            </li>
          </Link>
          {/* <p className="title">LISTS</p> */}
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/federation" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Federation</span>
            </li>
          </Link>
      
          <Link to="/booking" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Booking</span>
            </li>
          </Link>
          {/* <p className="title">Quit</p> */}
          
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
 
    </div>
  );
};

export default Sidebar;
