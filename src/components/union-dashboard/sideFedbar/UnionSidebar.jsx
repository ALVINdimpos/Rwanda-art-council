import './union-side.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { Link } from "react-router-dom";

import logo from './logo.png'

const UnionSidebar = () => {
  return (
    <div className="sidebar">

      <div className="center">

        <ul>
      {/* /home-union */}
          <Link to="/home-union" style={{ textDecoration: "none" }}>
            <li>
            <DashboardIcon className="icon" />
              <span>Home</span>
            </li>
          </Link>
          {/* artist-side */}
          <Link to="#" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Artist</span>
            </li>
          </Link>       
          
          <li>
            <ExitToAppIcon className="icon" />
            <span>Exit</span>
          </li>
        </ul>
      </div>
 
    </div>
  );
};

export default UnionSidebar;
