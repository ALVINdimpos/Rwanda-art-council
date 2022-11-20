import { useParams } from "react-router-dom";
import { Row, Col, Card, CardTitle, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Federation = {
  id: 1,
  leaderFName: "Bishobokeruwizeye",
  leaderLName: "Aka bisho",
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

const ViewArtist = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Row>
      <Col sm="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Artist infomation details
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
                <p>First name: {Federation.leaderFName}</p>
                <p>Last name: {Federation.leaderLName}</p>
                <p>Date of birth: {Federation.id}</p>
                <p>Email: {Federation.email}</p>
                <p>Phone: {Federation.phone}</p>
                <p>Country: {Federation.province}</p>
                <p>Province: {Federation.province}</p>
                <p>District: {Federation.district}</p>
                <p>Sector: {Federation.sector}</p>
                <p>Cell: {Federation.cell}</p>
                <p>Village: {Federation.village}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Link to={`/editArtist/${id}`}>
                    <Button color="primary" className="mr-5">
                      Edit Artist
                    </Button>
                  </Link>
                  <Button color="danger">Delete Artist</Button>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <img
                  width={200}
                  height={200}
                  src={
                    "https://pbs.twimg.com/media/Dfd9sHtXUAEhTzm?format=jpg&name=large"
                  }
                />
                <p>QR Code</p>
                <img
                  width={200}
                  height={200}
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                  }
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ViewArtist;
