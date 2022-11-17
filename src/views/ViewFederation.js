import { Row, Col, Card, CardTitle, CardBody, Button } from "reactstrap";
import { Link, useParams } from "react-router-dom";

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
  console.log(id);
  return (
    <Row>
      <Col sm="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Federation Name: {Federation.name}
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
                <p>Leader first name: {Federation.leaderFName}</p>
                <p>Leader last name: {Federation.leaderLName}</p>
                <p>TIN Number: {Federation.tin}</p>
                <p>Email: {Federation.email}</p>
                <p>Phone: {Federation.phone}</p>
                <p>Description: {Federation.description}</p>
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
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            className="border-bottom p-3 mb-0"
          >
            <h6>Unions in the federation</h6>
            <Link to={`/addUnion/${id}`}>
              <Button color="primary">Add Union</Button>
            </Link>
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
              {[
                { name: "Union 1", id: 1 },
                { name: "Union 2", id: 2 },
                { name: "Union 3", id: 3 },
                { name: "Union 4", id: 4 },
                { name: "Union 5", id: 5 },
                { name: "Union 6", id: 6 },
                { name: "Union 7", id: 7 },
              ].map((item, index) => {
                return (
                  <Card key={item.id}>
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                      {item.name}
                    </CardTitle>
                    <CardBody>
                      <p
                        style={{
                          textAlign: "center",
                          width: "20vw",
                        }}
                      >
                        Description of the union in few words
                      </p>
                      <Link to={`/viewUnion/${item.id}`}>
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
