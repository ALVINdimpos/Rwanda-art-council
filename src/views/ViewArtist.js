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
                <p>Date of birth: 11/11/1970</p>
                <p>Artist code: 1970</p>
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
                  <Link to={`/dashboard/editArtist/${id}`}>
                    <Button
                      style={{
                        backgroundColor: "#C5801A",
                      }}
                      className="mr-5"
                    >
                      Edit Artist
                    </Button>
                  </Link>
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
                    "https://chart.apis.google.com/chart?cht=qr&chl=Artist%20Number%3A%08010030%0AFirst%20Name%3A%20Izihirwe%0ALast%20Name%3A%20Perfect%20Gift%0AEmail%3A%20perfectgiftizihire@gmail.com%0APhone%20number%3A%200727648416%0ACountry%3A%20Rwanda%0AProvince%3A%20Kigali%20City%0ADistrict%3A%20Kigali%0ASector%3A%20Gatenga%0ACell%3A%20Nyanza%0AVillage%3A%20Cyeza%0ADate%20of%20birth%3A%202023-01-29&chs=248"
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
