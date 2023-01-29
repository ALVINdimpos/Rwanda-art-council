import { Row, Col, Card, CardTitle, CardBody, Button, Table } from "reactstrap";
import { Link, useParams } from "react-router-dom";

const Federation = {
  id: 1,
  name: "Gatenga arts union",
  leaderFName: "John",
  leaderLName: "Doe",
  email: "federation@gmail.com",
  phone: "123456789",
  province: "Kigali City",
  district: "Kicukiro",
  sector: "Gatenga",
  cell: "Nyanza",
  village: "Cyeza",
  tin: "567887543876",
  description:
    "This is a description This is a description This is a description This is a description This is a description This is a description ",
};

const ViewFederationTeam = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Row>
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          Federation Team Name: {Federation.name}
        </CardTitle>
        <CardBody>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                marginRight: "10px",
              }}
            >
              <p>Email: {Federation.email}</p>
              <p>Position: {Federation.phone}</p>
              <p>Twitter profile: {Federation.province}</p>
              <p>Instagram profile: {Federation.district}</p>
              <p>LinkedIn profile: {Federation.sector}</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <Link to={`/dashboard/EditFedTeamMember/${id}`}>
                  <Button
                    style={{
                      backgroundColor: "#C5801A",
                    }}
                  >
                    Edit Federation Team
                  </Button>{" "}
                </Link>
                <Button color="danger">Delete Federation Team</Button>
              </div>
            </div>
            <img
              width={300}
              height={400}
              src={
                "https://pbs.twimg.com/media/Dfd9sHtXUAEhTzm?format=jpg&name=large"
              }
            />
          </div>
        </CardBody>
      </Card>
    </Row>
  );
};

export default ViewFederationTeam;
