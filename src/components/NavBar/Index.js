/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Button from "../Button/Index";
import NavStyle from "./Style.module.css";
import Logo from "../../assets/photos/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { route } from "../../utils/header";
import { useNavigate } from "react-router-dom";
import { MDBIcon } from "mdbreact";

function Index() {
  const navigate = useNavigate();
  const loginHandler = (event) => {
    event.preventDefault();
    navigate("/Login");
  };
  return (
    <header className={NavStyle.headerStyle}>
      <Link to="/Home">
        <img
          src={Logo}
          className={NavStyle.mainLogo}
          alt="description of photo"
        />
      </Link>

      <div>
        <ul className={NavStyle.NavBar}>
          {route?.map((element, index) => (
            <li key={index}>
              <NavLink
                to={element.link}
                className={NavStyle.items}
              >
                {element.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={NavStyle.Button }> <Button name="Login" onClick={loginHandler} /></div>
     
      <MDBIcon fas icon="bars" className={NavStyle.hamburger} />
    </header>
  );
}

export default Index;
