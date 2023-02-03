import { Row, Col, Card, CardTitle, CardBody, Button, Alert } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { getSingleFederation } from "../redux/actions/federation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFederationUnions } from "../redux/actions/union";

const Federation = {
  id: 1,
  name: "Remera Arts Federation",
  leaderFName: "John",
  leaderLName: "Doe",
  email: "federation@gmail.com",
  phone: "123456789",
  tin: "567887543876",
  description:
    "This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description ",
};

const ViewFederation = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    singleFederation: { singleFederation },
    fedUnions: { fedUnions },
  } = state;

  useEffect(() => {
    dispatch(getSingleFederation(id));
    dispatch(getFederationUnions(id));
  }, [dispatch, id]);

  return (
    <Row>
      <Col sm="12">
        {singleFederation && (
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Federation Name: {singleFederation.fed_name}
            </CardTitle>
            <CardBody>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p>Leader first name: {singleFederation.fname}</p>
                  <p>Leader last name: {Federation.leaderLName}</p>
                  <p>TIN Number: {singleFederation.fed_no}</p>
                  <p>Email: {singleFederation.email}</p>
                  <p>Phone: {singleFederation.phone}</p>
                  <p>Description: {singleFederation.description}</p>
                  {/* <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Link to={`/dashboard/editFederation/${id}`}>
                      <Button
                        style={{
                          backgroundColor: "#C5801A",
                        }}
                        className="mr-5"
                      >
                        Edit
                      </Button>
                    </Link>
                    <Button color="danger">Delete</Button>
                  </div> */}
                </div>
                <div>
                  <img width={200} height={200} src={singleFederation.logo} />
                </div>
              </div>
            </CardBody>
          </Card>
        )}
        <Card>
          <div
            // style={{
            //   display: "flex",
            //   flexDirection: "row",
            //   justifyContent: "space-between",
            // }}
            className="border-bottom p-3 mb-0"
          >
            <h6>Unions in the federation</h6>
            {/* <Link to={`/dashboard/registerUnion`}>
              <Button
                style={{
                  backgroundColor: "#C5801A",
                }}
              >
                Add Union
              </Button>
            </Link> */}
          </div>
          <CardBody>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              {fedUnions ? (
                fedUnions.map((union, index) => {
                  return (
                    <Card key={union.id}>
                      <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        {union.name}
                      </CardTitle>
                      <CardBody>
                        <p
                          style={{
                            textAlign: "center",
                            width: "20vw",
                          }}
                        >
                          {union.slogan}
                        </p>
                        <Link to={`/dashboard/viewUnion/${union.id}`}>
                          <Button
                            style={{
                              backgroundColor: "#C5801A",
                            }}
                          >
                            View details
                          </Button>
                        </Link>
                      </CardBody>
                    </Card>
                  );
                })
              ) : (
                <Alert>No unions yet</Alert>
              )}
            </div>
          </CardBody>
        </Card>
        {/* <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            className="border-bottom p-3 mb-0"
          >
            <h6>Teams in the federation</h6>
            <Link to={`/dashboard/addFederationTeam`}>
              <Button
                style={{
                  backgroundColor: "#C5801A",
                }}
              >
                Add Team
              </Button>
            </Link>
          </div>
          <CardBody>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  name: "Team 1",
                  id: 1,
                  image:
                    "https://www.incimages.com/uploaded_files/image/1920x1080/getty_504271344_205161.jpg",
                },
                {
                  name: "Team 2",
                  id: 2,
                  image:
                    "https://img.freepik.com/free-photo/successful-happy-business-team_53876-74892.jpg?w=2000",
                },
                {
                  name: "Team 3",
                  id: 3,
                  image:
                    "https://www.incimages.com/uploaded_files/image/1920x1080/getty_504271344_205161.jpg",
                },
                {
                  name: "Team 4",
                  id: 4,
                  image:
                    "https://www.incimages.com/uploaded_files/image/1920x1080/getty_504271344_205161.jpg",
                },
                {
                  name: "Team 5",
                  id: 5,
                  image:
                    "https://www.incimages.com/uploaded_files/image/1920x1080/getty_504271344_205161.jpg",
                },
                {
                  name: "Team 6",
                  id: 6,
                  image:
                    "https://www.betterup.com/hubfs/Blog%20Images/developing-teams-team-collaborating.jpg",
                },
                {
                  name: "Team 7",
                  id: 7,
                  image:
                    "https://biz30.timedoctor.com/images/2017/07/Great-team-member.jpg",
                },
              ].map((item, index) => {
                return (
                  <Card className="mr-5" key={item.id}>
                    <img
                      width={300}
                      height={200}
                      className="p-2"
                      src={item.image}
                    />
                    <CardBody>
                      <CardTitle tag="h6" className="border-bottom pb-2 mb-0">
                        {item.name}
                      </CardTitle>
                      <Link to={`/dashboard/viewFederationTeam/${item.id}`}>
                        <Button
                          style={{
                            backgroundColor: "#C5801A",
                          }}
                        >
                          View details
                        </Button>
                      </Link>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </CardBody>
        </Card> */}
      </Col>
    </Row>
  );
};

export default ViewFederation;
