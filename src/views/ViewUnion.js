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

const ViewUnion = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Row>
      <Col sm="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Union Name: {Federation.name}
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
                <p>Email: {Federation.email}</p>
                <p>Phone: {Federation.phone}</p>
                <p>Province: {Federation.province}</p>
                <p>District: {Federation.district}</p>
                <p>Sector: {Federation.sector}</p>
                <p>Cell: {Federation.cell}</p>
                <p>Village: {Federation.village}</p>
                <p>Union Slogan: {Federation.description}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Link to={`/editUnion/${id}`}>
                    <Button color="primary" className="mr-5">
                      Edit Union
                    </Button>
                  </Link>
                  <Button color="danger">Delete Union</Button>
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
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Artists List
          </CardTitle>
          <CardBody>
            <Table responsive>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>123456789</td>
                  <td>mark@gmail.com</td>
                  <td>
                    <Link to={`/viewArtist/1`}>
                      <Button color="primary" className="mr-5">
                        View Artist
                      </Button>
                    </Link>
                    </td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>123456789</td>
                  <td>jacon@gmail.com</td>
                  <td>
                    <Link to={`/viewArtist/2`}>
                      <Button color="primary" className="mr-5">
                        View Artist
                      </Button>
                    </Link>
                    </td>
                </tr>
                </tbody>  
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ViewUnion;
