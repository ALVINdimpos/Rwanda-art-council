import { Row, Col, Card, CardTitle, CardBody, Button, Table } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUnion } from "../redux/actions/union";

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
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    singleUnion: { union },
    unionArtists: { uniArtists },
  } = state;

  useEffect(() => {
    dispatch(getUnion(id));
  }, [dispatch, id]);
  console.log(uniArtists, "+++++++++++++++++++++++++++");
  return (
    <Row>
      <Col sm="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Union Name: {union.name}
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
                <p>Leader first name: {union.fname}</p>
                <p>Leader last name: {union.lname}</p>
                <p>Email: {union.email}</p>
                <p>Phone: {union.phone}</p>
                <p>Province: {union.province}</p>
                <p>District: {union.district}</p>
                <p>Sector: {union.sector}</p>
                <p>Cell: {union.cell}</p>
                <p>Village: {union.village}</p>
                <p>Union Slogan: {union.slogan}</p>
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
                {uniArtists &&
                  uniArtists.map((artist, idx) => (
                    <tr key={idx}>
                      <td>{artist.fname}</td>
                      <td>{artist.lname}</td>
                      <td>{artist.phone}</td>
                      <td>{artist.email}</td>
                      <td>
                        <Link to={`/viewArtist/${artist.id}`}>
                          <Button color="primary" className="mr-5">
                            View Artist
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ViewUnion;
