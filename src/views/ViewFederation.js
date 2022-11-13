import { Row, Col, Card, CardTitle, CardBody, Button } from "reactstrap";
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Link to={`/editFederation/${id}`}>
                      <Button color="primary" className="mr-5">
                        Edit
                      </Button>
                    </Link>
                    <Button color="danger">Delete</Button>
                  </div>
                </div>
                <div>
                  <img
                    width={200}
                    height={200}
                    src={
                      "https://pbs.twimg.com/media/Dfd9sHtXUAEhTzm?format=jpg&name=large"
                    }
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        )}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Unions in the federation
          </CardTitle>
          <CardBody>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              {fedUnions &&
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
                        <Link to={`/viewUnion/${union.id}`}>
                          <Button color="primary">View details</Button>
                        </Link>
                      </CardBody>
                    </Card>
                  );
                })}
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ViewFederation;
