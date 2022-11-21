import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button,
  Card,
  CardTitle,
  CardText,
} from "reactstrap";
import classnames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import TeamMember from "../components/dashboard/TeamMember";

const TestMembers = () => {
  const [currentActiveTab, setCurrentActiveTab] = useState("1");
  const toggle = (tab) => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  };

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
          <NavItem>
            <NavLink
              className={classnames({
                active: currentActiveTab === "1",
              })}
              style={{ cursor: "pointer" }}
              onClick={() => {
                toggle("1");
              }}
            >
              Executive
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: currentActiveTab === "2",
              })}
              style={{ cursor: "pointer" }}
              onClick={() => {
                toggle("2");
              }}
            >
              Board
            </NavLink>
          </NavItem>
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
            Add new member
          </Link>
        </Button>
      </div>

      <TabContent activeTab={currentActiveTab}>
        <TabPane tabId="1" className="pt-3">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <TeamMember
              image="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
              text="Perfect Gift Izihirwe"
              position="CEO"
            />
            <TeamMember
              image="https://www.adobe.com/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=400&format=jpeg&optimize=medium"
              text="Fiston Alvin"
              position="CMO"
            />
          </div>
        </TabPane>
        <TabPane tabId="2" className="pt-3">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <TeamMember
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fmtO1xNV_yphS6OAtcQuuDzupas7MMZotNVJuyvYIoISmh8L827nvt7anM_ZHsKr8EM&usqp=CAU"
              text="Eloi Chrysanthe"
              position="Chief of Board"
            />
            <TeamMember
              image="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg"
              text="Arci Nael"
              position="Project manager"
            />
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default TestMembers;
