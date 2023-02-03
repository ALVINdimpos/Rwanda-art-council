import { useParams } from "react-router-dom";
import { Row, Col, Card, CardTitle, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleArtist } from "../redux/actions/artists";

const ViewArtist = () => {
  const [artist, setArtist] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleArtist(id));
  }, [id]);

  const { singleArtist } = useSelector((state) => state.singleArtist);

  useEffect(() => {
    if (singleArtist.length > 0) {
      setArtist(singleArtist[0]);
    }
  }, [singleArtist]);

  console.log(artist);
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
                <p>First name: {artist.fname}</p>
                <p>Last name: {artist.lname}</p>
                <p>Date of birth: {artist.dob}</p>
                <p>Artist number: {artist.artist_no}</p>
                <p>Email: {artist.email}</p>
                <p>Phone: {artist.phone}</p>
                <p>Country: {artist.country}</p>
                <p>Province: {artist.province}</p>
                <p>District: {artist.district}</p>
                <p>Sector: {artist.sector}</p>
                <p>Cell: {artist.cell}</p>
                <p>Village: {artist.village}</p>
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
                <img width={200} height={200} src={artist.profile} />
                {artist.status == 2 ? (
                  <>
                    <p>QR Code</p>
                    <img width={200} height={200} src={artist.qrcode} />
                  </>
                ) : null}
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ViewArtist;
