/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style.css'
import { NavLink} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/photos/Logo.png";
import { route } from "../../utils/header";
const Index = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>
      <nav className="main-nav">
        <input type="checkbox" id="check" />
        <label for="check" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <a class="logo">
        <img src={Logo} alt="logo" onClick={()=>{navigate("/")}} style={{cursor:"pointer"}}/>
        </a>
        <ul className="navlinks">
        {route?.map((element, index) => (
            <li key={index}>
              <NavLink
                to={element.link}
              >
                {element.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default Index
