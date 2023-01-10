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
} from "reactstrap";
import { registerFederation } from "../redux/actions";
import { useDispatch } from "react-redux";
// import { useDropzone } from "react-dropzone";

const createFormData = (body) => {
  const data = new FormData();
  // data.append("email", body);
  for (const [key, value] of Object.entries(body)) {
    data.append(key, value);
  }

  return data;
};

const RegisterFederation = () => {
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [fedData, setFedData] = React.useState([]);
  const dispatch = useDispatch();
  const handlerChange = (key, value) => {
    setFedData((prevCred) => ({ ...prevCred, [key]: value }));
  };
  // const onDrop = useCallback((acceptedFiles) => {
  //   acceptedFiles.forEach((file) => {
  //     const reader = new FileReader();

  //     reader.onabort = () => console.log("file reading was aborted");
  //     reader.onerror = () => console.log("file reading has failed");
  //     reader.onload = () => {
  //       // Do whatever you want with the file contents
  //       const binaryStr = reader.result;
  //       console.log(binaryStr);
  //     };
  //     reader.readAsArrayBuffer(file);
  //   });
  // }, []);
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const registerFed = () => {
    const data = createFormData(fedData);
    dispatch(registerFederation(data));
  };
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Register a new federation
          </CardTitle>
          <CardBody>
            <Form onSubmit={() => {}}>
              <FormGroup>
                <Label for="federationName">Federation name</Label>
                <Input
                  id="federationName"
                  name="federationName"
                  placeholder="Name of the federation"
                  type="text"
                  onChange={({ target: { value } }) => {
                    handlerChange("fed_name", value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="federationLeaderFirstName">
                  Federation leader first name
                </Label>
                <Input
                  id="federationLeaderFirstName"
                  name="federationLeaderFirstName"
                  placeholder="Federation leader first name"
                  type="text"
                  onChange={({ target: { value } }) => {
                    handlerChange("fname", value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="federationLeaderLastName">
                  Federation leader last name
                </Label>
                <Input
                  id="federationLeaderLastName"
                  name="federationLeaderLastName"
                  placeholder="Federation leader last name"
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
                <Label for="numberOfUnions">Number of unions</Label>
                <Input
                  id="numberOfUnions"
                  name="numberOfUnions"
                  placeholder="Number of unions under the federation"
                  type="number"
                  onChange={({ target: { value } }) => {
                    handlerChange("union", value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="tinNumber">Tin number</Label>
                <Input
                  id="tinNumber"
                  name="tinNumber"
                  placeholder="Tin number for the federation"
                  type="number"
                  onChange={({ target: { value } }) => {
                    handlerChange("tinNumber", value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="province">Province</Label>
                <Input
                  id="province"
                  name="province"
                  placeholder="Province where the federation is located"
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
                <Label for="description">Decription</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Enter description of the federation"
                  type="textarea"
                  onChange={({ target: { value } }) => {
                    handlerChange("description", value);
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
                    console.log(value);
                    handlerChange("logo", value);
                  }}
                />
                <FormText>
                  TUpload an image of your federation's logo or headquartes
                </FormText>
              </FormGroup>
              <Button onClick={registerFed}>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default RegisterFederation;
