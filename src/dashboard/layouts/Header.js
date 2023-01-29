import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import user1 from "../assets/images/users/user1.jpg";
import { logoutUser } from "../redux/actions";
import { API_URL } from "../utils/config";

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const state = useSelector((state) => state);
  const {
    logout: { success },
  } = state;

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  const logout = async () => {
    setLoading(true);
    dispatch(logoutUser());
  };
  useEffect(() => {
    if (success) {
      setLoading(false);
      localStorage.removeItem("user");
      window.location.href = "/";
    }
  }, [success]);
  return (
    <Navbar
      style={{
        backgroundColor: "#C5801A",
      }}
      expand="md"
    >
      <div className="d-flex align-items-center">
        <Button
          style={{
            backgroundColor: "#C5801A",
          }}
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          style={{
            backgroundColor: "#C5801A",
          }}
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>
      <div className="d-flex justify-content-end">
        <Collapse navbar isOpen={isOpen}>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle>
              <img
                src={user1}
                alt="profile"
                className="rounded-circle"
                width="30"
              ></img>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Info</DropdownItem>
              <DropdownItem>My Account</DropdownItem>
              <DropdownItem>Edit Profile</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>My Balance</DropdownItem>
              <DropdownItem>Inbox</DropdownItem>
              <DropdownItem onClick={logout}>Logout</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
