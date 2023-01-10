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
} from "reactstrap";
import { registerUnion } from "../redux/actions";
import { useDispatch } from "react-redux";

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

  const handlerChange = (key, value) => {
    setUnionData((prevCred) => ({ ...prevCred, [key]: value }));
  };
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const handleSubmit = () => {
    const data = createFormData(unionData);
    dispatch(registerUnion(data));
  };
  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Register a new union
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
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
              <FormGroup>
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
              <FormGroup>
                <Label for="unionLeaderLastName">Union leader last name</Label>
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
              <FormGroup>
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
              <FormGroup>
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
              <FormGroup>
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
              <FormGroup>
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
              <FormGroup>
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
              <FormGroup>
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
              <FormGroup>
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
              <FormGroup>
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
              <FormGroup>
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
              <FormGroup>
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
              <FormGroup>
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
              <FormGroup>
                <Label for="imageFile">Upload image</Label>
                <Input
                  id="imageFile"
                  name="imageFile"
                  type="file"
                  onChange={({ target: { value } }) => {
                    handlerChange("logo", value);
                  }}
                />
                <FormText>Upload an image of your union's logo</FormText>
              </FormGroup>
              <Button onClick={handleSubmit}>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default RegisterUnion;
