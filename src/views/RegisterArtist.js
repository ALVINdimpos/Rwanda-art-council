import React from "react";
// import { useForm } from "react-hook-form";
import Style from "./style.module.css";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Alert,
} from "reactstrap";
import { registerArtist } from "../redux/actions/artists";
import { useDispatch, useSelector } from "react-redux";

const createFormData = (body) => {
  const data = new FormData();
  for (const [key, value] of Object.entries(body)) {
    data.append(key, value);
  }
  return data;
};

const RegisterArtist = () => {
  const { success, errors } = useSelector((state) => state.registerArtist);
  const [error, setError] = React.useState("");
  const [artistData, setartistData] = React.useState([]);
  const dispatch = useDispatch();
  const handlerChange = (key, value) => {
    setError("");
    setartistData((prevCred) => ({ ...prevCred, [key]: value }));
  };

  const registerFed = () => {
    if (!artistData.fname) {
      setError("Artist first name is required");
      return;
    }

    if (!artistData.lname) {
      setError("Artist last name is required");
      return;
    }

    let reg = new RegExp("^[0-9]{10}$");
    if (!reg.test(artistData.phone)) {
      setError("Phone number must be 10 digits and start with 07");
      return;
    }

    if (!artistData.phone) {
      setError("Phone number is required");
      return;
    }

    if (!artistData.email) {
      setError("Email is required");
      return;
    }

    if (!artistData.country) {
      setError("Country is required");
      return;
    }

    if (!artistData.province) {
      setError("Province is required");
      return;
    }

    if (!artistData.district) {
      setError("District is required");
      return;
    }

    if (!artistData.sector) {
      setError("Sector is required");
      return;
    }

    if (!artistData.cell) {
      setError("Cell is required");
      return;
    }

    if (!artistData.village) {
      setError("Village is required");
      return;
    }
    if (!artistData.dob) {
      setError("Date of birth is required");
      return;
    }
    if (!artistData.nid) {
      setError("National Identification number required");
      return;
    }

    if (!artistData.profile) {
      setError("Profile is required");
      return;
    }

    const data = createFormData(artistData);
    dispatch(registerArtist(data));
  };

  // if (success) {
  //   setTimeout(() => {
  //     window.location.href = "#/dashboard/artists";
  //     window.location.reload(true);
  //   }, 2000);
  // }

  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Register a new artist
          </CardTitle>
          <CardBody
            style={{
              width: "100%",
            }}
          >
            <Form onSubmit={() => {}}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <FormGroup style={{ minWidth: "45%", marginRight: "5%" }}>
                  <Label for="federationName">First name</Label>
                  <Input
                    id="federationName"
                    name="federationName"
                    placeholder="First name of the artist"
                    type="text"
                    onChange={({ target: { value } }) => {
                      handlerChange("fname", value);
                    }}
                  />
                </FormGroup>
                <FormGroup style={{ minWidth: "45%" }}>
                  <Label for="federationLeaderFirstName">Last name</Label>
                  <Input
                    id="federationLeaderFirstName"
                    name="federationLeaderFirstName"
                    placeholder="Last name of the artist"
                    type="text"
                    onChange={({ target: { value } }) => {
                      handlerChange("lname", value);
                    }}
                  />
                </FormGroup>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <FormGroup style={{ marginRight: "5%", minWidth: "45%" }}>
                  <Label for="emailAddress">Email Address</Label>
                  <Input
                    id="emailAddress"
                    name="emailAddress"
                    placeholder="Email Address of the artist"
                    type="email"
                    onChange={({ target: { value } }) => {
                      handlerChange("email", value);
                    }}
                  />
                </FormGroup>
                <FormGroup style={{ minWidth: "45%" }}>
                  <Label for="phoneNumber">Phone number</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone number of the artist"
                    type="text"
                    onChange={({ target: { value } }) => {
                      handlerChange("phone", value);
                    }}
                  />
                </FormGroup>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <FormGroup style={{ marginRight: "5%", minWidth: "45%" }}>
                  <Label for="tinNumber">Country</Label>
                  <Input
                    id="tinNumber"
                    name="tinNumber"
                    placeholder="Country where artist is located"
                    type="text"
                    onChange={({ target: { value } }) => {
                      handlerChange("country", value);
                    }}
                  />
                </FormGroup>
                <FormGroup style={{ minWidth: "45%" }}>
                  <Label for="province">Province</Label>
                  <Input
                    id="province"
                    name="province"
                    placeholder="Province where the artist is located"
                    type="text"
                    onChange={({ target: { value } }) => {
                      handlerChange("province", value);
                    }}
                  />
                </FormGroup>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <FormGroup style={{ marginRight: "5%", minWidth: "45%" }}>
                  <Label for="district">District</Label>
                  <Input
                    id="district"
                    name="district"
                    placeholder="District where the artist is located"
                    type="text"
                    onChange={({ target: { value } }) => {
                      handlerChange("district", value);
                    }}
                  />
                </FormGroup>
                <FormGroup style={{ minWidth: "45%" }}>
                  <Label for="sector">Sector</Label>
                  <Input
                    id="sector"
                    name="sector"
                    placeholder="Sector where the artist is located"
                    type="text"
                    onChange={({ target: { value } }) => {
                      handlerChange("sector", value);
                    }}
                  />
                </FormGroup>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <FormGroup style={{ marginRight: "5%", minWidth: "45%" }}>
                  <Label for="cell">Cell</Label>
                  <Input
                    id="cell"
                    name="cell"
                    placeholder="Cell where the artist is located"
                    type="text"
                    onChange={({ target: { value } }) => {
                      handlerChange("cell", value);
                    }}
                  />
                </FormGroup>
                <FormGroup style={{ minWidth: "45%" }}>
                  <Label for="village">Village</Label>
                  <Input
                    id="village"
                    name="village"
                    placeholder="Village where the artist is located"
                    type="text"
                    onChange={({ target: { value } }) => {
                      handlerChange("village", value);
                    }}
                  />
                </FormGroup>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <FormGroup style={{ marginRight: "5%", minWidth: "45%" }}>
                  <Label for="federationLeaderLastName">Date of birth</Label>
                  <Input
                    id="federationLeaderLastName"
                    name="federationLeaderLastName"
                    placeholder="Date of birth of the artist"
                    type="date"
                    onChange={({ target: { value } }) => {
                      handlerChange("dob", value);
                    }}
                  />
                </FormGroup>
              </div>
              <FormGroup style={{ maxWidth: "95%" }}>
                <Label for="imageFile">National ID</Label>
                <Input
                  id="imageFile"
                  name="imageFile"
                  type="file"
                  onChange={({ target: { files } }) => {
                    handlerChange("nid", files[0]);
                  }}
                />
                <FormText>Upload artist's national ID card image</FormText>
              </FormGroup>
              <FormGroup style={{ maxWidth: "95%" }}>
                <Label for="imageFile">Upload artist's profile image</Label>
                <Input
                  id="imageFile"
                  name="imageFile"
                  type="file"
                  onChange={({ target: { files } }) => {
                    handlerChange("profile", files[0]);
                  }}
                />
                <FormText>Upload an image of the artist</FormText>
              </FormGroup>
              {Object.keys(errors).length > 0 && (
                <Alert color="danger">
                  {Object.keys(errors).map((key) => {
                    return <div>{JSON.stringify(errors[key][0])}</div>;
                  })}
                </Alert>
              )}
              {success && <Alert>Artist Registered Successfuly</Alert>}
              {error && <Alert color="danger">{error}</Alert>}
              <Button onClick={registerFed}>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default RegisterArtist;
