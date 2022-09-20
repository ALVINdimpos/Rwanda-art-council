import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { Link } from "react-router-dom";
import { useAutho } from "../authenticate/Auths";

import logo from './logo.png'
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const auth=useAutho()
  const navigate=useNavigate()
  const handleLogout=()=>{
      auth.Logout()
      localStorage.removeItem('token')
      navigate("/",{replace:true})
  }
  return (
    <div className="sidebar">

      <div className="center">

        <ul>
      
          <Link to="/logindash" style={{ textDecoration: "none" }}>
            <li>
            <DashboardIcon className="icon" />
              <span>Home</span>
            </li>
          </Link>
          <Link to="/federation" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Federation</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Artists</span>
            </li>
          </Link>
          <Link to="/admunions" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Unions</span>
            </li>
          </Link>
      
          <Link to="/my-event" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Events</span>
            </li>
          </Link>
          
          <li>
            <ExitToAppIcon className="icon" />
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
 
    </div>
  );
};

export default Sidebar;
