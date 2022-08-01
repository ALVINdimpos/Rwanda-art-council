import React from "react";
import Button from "../Button/Index";
import NavStyle from "./Style.module.css";
import Logo from "../../assets/photos/Logo.png";
import { NavLink } from "react-router-dom";
import { route } from "../../utils/header";
import { useNavigate } from "react-router-dom";


function Index() {
  const navigate = useNavigate();
  const loginHandler = (event)=>{
event.preventDefault()
navigate('/Login')
  }
  return (
    <header className={NavStyle.headerStyle}>
      <img src={Logo} className={NavStyle.mainLogo} alt="description of photo"/>
      <div>
        <ul className={NavStyle.NavBar}>
        {route?.map((element,index)=> <li key={index}>
            <NavLink to={element.link} className={isActive =>
    "nav-link" + (!isActive ? " unselected" : "")
  }>
           {element.name}
            </NavLink>
          </li>

        )}
         
        
        </ul>
      </div>
       <Button name="Login" onClick={loginHandler} />
    </header >
  );
}

export default Index;
