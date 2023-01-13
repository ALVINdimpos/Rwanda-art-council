/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style.css'
import { NavLink ,Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/photos/Logo.png";
import { route } from "../../utils/header";
const Index = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
     <div className="logo">
      <img src={Logo} alt="logo" onClick={()=>{navigate("/")}} style={{cursor:"pointer"}}/>
    </div>
    <input type="checkbox" id="click" />
    <label htmlFor="click" className="menu-btn">
      <i className="fas fa-bars" />
    </label>
    <ul>
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
    <Outlet />
  </nav>
    </div>
  )
}

export default Index
