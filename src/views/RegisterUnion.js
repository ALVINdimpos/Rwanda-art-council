import { useState } from "react";
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
import { registerUnion } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const createFormData = (body) => {
  const data = new FormData();
  for (const [key, value] of Object.entries(body)) {
    data.append(key, value);
  }

  return data;
};

const RegisterUnion = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const [unionData, setUnionData] = useState([]);
  const [error, setError] = useState("");
  const { success } = useSelector((state) => state.registerUnion);

  const handlerChange = (key, value) => {
    setError("");
    setUnionData((prevCred) => ({ ...prevCred, [key]: value }));
  };
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const handleSubmit = () => {
    if (!unionData.name) {
      setError("Fill in union name");
      return;
    }
    if (!unionData.fname) {
      setError("Fill in union leader first name");
      return;
    }
    if (!unionData.lname) {
      setError("Fill in union leader last name");
      return;
    }
    if (!unionData.email) {
      setError("Fill in the email");
      return;
    }
    if (!unionData.phone) {
      setError("Fill in union leader phone number");
      return;
    }
    let reg = new RegExp("^[0-9]{10}$");
    if (!reg.test(unionData.phone)) {
      setError("Phone number must be 10 digits and start with 07");
      return;
    }
    if (!unionData.member) {
      setError("Fill in the number of union members");
      return;
    }
    if (!unionData.province) {
      setError("Fill in the province");
      return;
    }
    if (!unionData.district) {
      setError("Fill in the district");
      return;
    }
    if (!unionData.sector) {
      setError("Fill in the sector");
      return;
    }
    if (!unionData.cell) {
      setError("Fill in the cell");
      return;
    }
    if (!unionData.village) {
      setError("Fill in the village");
      return;
    }
    if (!unionData.slogan) {
      setError("Fill in the union slogan");
      return;
    }
    if (!unionData.password) {
      setError("Fill in the password");
      return;
    }
    if (!unionData.password_confirmation) {
      setError("Fill in the confirm password");
      return;
    }
    if (unionData.password !== unionData.password_confirmation) {
      setError("Passwords do not match");
      return;
    }
    if (!unionData.logo) {
      setError("Upload the union logo");
      return;
    }

    const data = createFormData(unionData);
    dispatch(registerUnion(data));
  };

  if (success) {
    setTimeout(() => {
      window.location.href = "#/dashboard/union";
      window.location.reload(true);
    }, 2000);
  }
  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Register a new union
          </CardTitle>
          <CardBody
            style={{
              width: "100%",
            }}
          >
            <Form>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <FormGroup style={{ minWidth: "45%" }}>
                  <Label for="unionName">Union name</Label>
                  <Input
                    id="unionName"
                    name="unionName"
                    placeholder="Name of the union"
                    type="text"
                    onChange={({ target: { value } }) => {
                      handlerChange("name", value);
                    }}
                  />
                </FormGroup>
                <FormGroup style={{ marginLeft: "5%", minWidth: "45%" }}>
                  <Label for="unionLeaderFirstName">
                    Union leader first name
                  </Label>
                  <Input
                    id="unionLeaderFirstName"
                    name="unionLeaderFirstName"
                    placeholder="union leader first name"
                    type="text"
                    onChange={({ target: { value } }) => {
                      handlerChange("fname", value);
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
                <FormGroup style={{ minWidth: "45%" }}>
                  <Label for="unionLeaderLastName">
                    Union leader last name
                  </Label>
                  <Input
                    id="unionLeaderLastName"
                    name="unionLeaderLastName"
                    placeholder="union leader last name"
                    type="text"
                    onChange={({ target: { value } }) => {
                      handlerChange("lname", value);
                    }}
                  />
                </FormGroup>
                <FormGroup style={{ marginLeft: "5%", minWidth: "45%" }}>
                  <Label for="phoneNumber">Phone number</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone number"
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
                <FormGroup style={{ minWidth: "45%" }}>
                  <Label for="emailAddress">Email Address</Label>
                  <Input
                    id="emailAddress"
                    name="emailAddress"
                    placeholder="Email Address"
                    type="email"
                    onChange={({ target: { value } }) => {
                      handlerChange("email", value);
                    }}
                  />
                </FormGroup>
                <FormGroup style={{ marginLeft: "5%", minWidth: "45%" }}>
                  <Label for="numberofmembers">Total number of members</Label>
                  <Input
                    id="numberofmembers"
                    name="numberofmembers"
                    placeholder="Number of artists/members under the union"
                    type="number"
                    onChange={({ target: { value } }) => {
                      handlerChange("member", value);
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
                <FormGroup style={{ minWidth: "45%" }}>
                  <Label for="province">Province</Label>
                  <Input
                    id="province"
                    name="province"
                    placeholder="Province where the union is located"
                    type="text"
                    onChange={({ target: { value } }) => {
                      handlerChange("province", value);
                    }}
                  />
                </FormGroup>
                <FormGroup style={{ marginLeft: "5%", minWidth: "45%" }}>
                  <Label for="district">District</Label>
                  <Input
                    id="district"
                    name="district"
                    placeholder="District where the federation is located"
                    type="text"
                    onChange={({ target: { value } }) => {
                      handlerChange("district", value);
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
                <FormGroup style={{ minWidth: "45%" }}>
                  <Label for="sector">Sector</Label>
                  <Input
                    id="sector"
                    name="sector"
                    placeholder="Sector where the federation is located"
                    type="text"
                    onChange={({ target: { value } }) => {
                      handlerChange("sector", value);
                    }}
                  />
                </FormGroup>
                <FormGroup style={{ marginLeft: "5%", minWidth: "45%" }}>
                  <Label for="cell">Cell</Label>
                  <Input
                    id="cell"
                    name="cell"
                    placeholder="Cell where the federation is located"
                    type="text"
                    onChange={({ target: { value } }) => {
                      handlerChange("cell", value);
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
                <FormGroup style={{ minWidth: "45%" }}>
                  <Label for="village">Village</Label>
                  <Input
                    id="village"
                    name="village"
                    placeholder="Village where the federation is located"
                    type="text"
                    onChange={({ target: { value } }) => {
                      handlerChange("village", value);
                    }}
                  />
                </FormGroup>
                <FormGroup style={{ marginLeft: "5%", minWidth: "45%" }}>
                  <Label for="slogan">Union slogan</Label>
                  <Input
                    id="slogan"
                    name="slogan"
                    placeholder="Enter the slogan of the union"
                    type="textarea"
                    onChange={({ target: { value } }) => {
                      handlerChange("slogan", value);
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
                <FormGroup style={{ minWidth: "45%" }}>
                  <Label for="password">Password</Label>
                  <div className={Style.carddetails}>
                    <Input
                      id="password"
                      name="password"
                      placeholder="********"
                      type={passwordShown ? "text" : "password"}
                      onChange={({ target: { value } }) => {
                        handlerChange("password", value);
                      }}
                    />
                    <span>
                      <small
                        className="fa fa-eye-slash passcode"
                        onClick={togglePassword}
                      />
                    </span>
                  </div>
                </FormGroup>
                <FormGroup style={{ marginLeft: "5%", minWidth: "45%" }}>
                  <Label for="confirmPassword">Confirm Password</Label>
                  <div className={Style.carddetails}>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="*********"
                      type={passwordShown ? "text" : "password"}
                      onChange={({ target: { value } }) => {
                        handlerChange("password_confirmation", value);
                      }}
                    />
                    <span>
                      <small
                        className="fa fa-eye-slash passcode"
                        onClick={togglePassword}
                      />
                    </span>
                  </div>
                </FormGroup>
              </div>
              <FormGroup>
                <Label for="imageFile">Upload image</Label>
                <Input
                  id="imageFile"
                  name="imageFile"
                  type="file"
                  onChange={({ target: { files } }) => {
                    handlerChange("logo", files[0]);
                  }}
                />
                <FormText>Upload an image of your union's logo</FormText>
              </FormGroup>
              {success && <Alert>Union Registered</Alert>}
              {error && <Alert color="danger">{error}</Alert>}
              <Button onClick={handleSubmit}>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default RegisterUnion;
