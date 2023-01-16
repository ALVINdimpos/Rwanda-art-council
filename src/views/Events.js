import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import Event from "../components/dashboard/Event";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllEvents,
  getPendingEvents,
  getPublishedEvents,
} from "../redux/actions/events";
import { userData } from "../utils/config";

const Events = () => {
  const dispatch = useDispatch();
  const [currentActiveTab, setCurrentActiveTab] = useState(
    userData.role !== "admin" ? "1" : "2"
  );
  const toggle = (tab) => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  };
  const state = useSelector((state) => state);
  const {
    events: { events },
    pendingEvents: { pendingEvents },
    publishedEvents: { publishedEvents },
  } = state;

  useEffect(() => {
    dispatch(getAllEvents());
    dispatch(getPendingEvents());
    dispatch(getPublishedEvents());
  }, [dispatch]);

  console.log(publishedEvents);

  return (
    <div
      style={{
        display: "block",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Nav tabs>
          {userData && userData.role !== "admin" && (
            <NavItem>
              <NavLink
                className={classnames({
                  active: currentActiveTab === "1",
                })}
                style={{
                  cursor: "pointer",
                  color: currentActiveTab === "1" ? "#C5801A" : "#000",
                }}
                onClick={() => {
                  toggle("1");
                }}
              >
                All Events
              </NavLink>
            </NavItem>
          )}
          {userData && userData.role === "admin" && (
            <>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: currentActiveTab === "2",
                  })}
                  style={{
                    cursor: "pointer",
                    color: currentActiveTab === "2" ? "#C5801A" : "#000",
                  }}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Pending events
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: currentActiveTab === "3",
                  })}
                  style={{
                    cursor: "pointer",
                    color: currentActiveTab === "3" ? "#C5801A" : "#000",
                  }}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  Published Events
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
        <Button
          style={{
            backgroundColor: "#C5801A",
          }}
        >
          <Link
            className="text-decoration-none text-light"
            to="/dashboard/registerEvent"
          >
            Add new Event
          </Link>
        </Button>
      </div>

      <TabContent activeTab={currentActiveTab}>
        <TabPane tabId="1" className="pt-3">
          <Row>
            {events &&
              events.map((event, index) => (
                <Col sm="6" lg="6" xl="3" key={index}>
                  <Event
                    image={event.ev_image}
                    title={event.title}
                    status={event.status}
                    subtitle={event.subtitle}
                    text={event.description}
                    id={event.id}
                  />
                </Col>
              ))}
          </Row>
        </TabPane>
        <TabPane tabId="2" className="pt-3">
          <Row>
            {pendingEvents ? (
              pendingEvents.map((event, index) => (
                <Col sm="6" lg="6" xl="3" key={index}>
                  <Event
                    image={event.ev_image}
                    title={event.title}
                    status={event.status}
                    subtitle={event.subtitle}
                    text={event.description}
                    id={event.id}
                  />
                </Col>
              ))
            ) : (
              <h1>No pending events</h1>
            )}
          </Row>
        </TabPane>
        <TabPane tabId="3" className="pt-3">
          <Row>
            {publishedEvents ? (
              publishedEvents.map((event, index) => (
                <Col sm="6" lg="6" xl="3" key={index}>
                  <Event
                    image={event.ev_image}
                    title={event.title}
                    status={event.status}
                    subtitle={event.subtitle}
                    text={event.description}
                    id={event.id}
                  />
                </Col>
              ))
            ) : (
              <h1>No published events</h1>
            )}
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Events;
