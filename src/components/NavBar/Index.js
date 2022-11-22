/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./style.css";
import Button from "../Button/Index";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/photos/Logo.png";
import { route } from "../../utils/header";
const Index = () => {
  const navigate = useNavigate();
  const loginHandler = (event) => {
    event.preventDefault();
    navigate("/Login");
  };
  return (
    <div>
      <nav>
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars" />
        </label>
        <ul>
          {route?.map((element, index) => (
            <li key={index}>
              <NavLink to={element.link}>{element.name}</NavLink>
            </li>
          ))}
          <div className="navbutton">
            <Button name="Login" onClick={loginHandler} />
          </div>
        </ul>
        <Outlet />
      </nav>
    </div>
  );
};

export default Index;
