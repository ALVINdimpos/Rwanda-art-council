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
import { registerFederation } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
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
  const { success, errors } = useSelector((state) => state.registerFederation);
  const [error, setError] = React.useState("");
  const [fedData, setFedData] = React.useState([]);
  const dispatch = useDispatch();
  const handlerChange = (key, value) => {
    setError("");
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
    //validate fedData
    console.log(fedData);
    if (!fedData.fed_name) {
      setError("Federation name is required");
      return;
    }

    if (!fedData.fname) {
      setError("Federation leader first name is required");
      return;
    }

    if (!fedData.lname) {
      setError("Federation leader last name is required");
      return;
    }

    let reg = new RegExp("^[0-9]{10}$");
    if (!reg.test(fedData.phone)) {
      setError("Phone number must be 10 digits and start with 07");
      return;
    }

    if (!fedData.phone) {
      setError("Phone number is required");
      return;
    }

    if (!fedData.email) {
      setError("Email is required");
      return;
    }

    if (!fedData.union) {
      setError("Number of unions is required");
      return;
    }

    if (!fedData.tinNumber) {
      setError("Tin number is required");
      return;
    }

    if (!fedData.province) {
      setError("Province is required");
      return;
    }

    if (!fedData.district) {
      setError("District is required");
      return;
    }

    if (!fedData.sector) {
      setError("Sector is required");
      return;
    }

    if (!fedData.cell) {
      setError("Cell is required");
      return;
    }

    if (!fedData.village) {
      setError("Village is required");
      return;
    }

    if (!fedData.description) {
      setError("Description is required");
      return;
    }

    if (!fedData.password) {
      setError("Password is required");
      return;
    }

    if (!fedData.password_confirmation) {
      setError("Confirm password is required");
      return;
    }

    if (fedData.password !== fedData.password_confirmation) {
      setError("Passwords do not match");
      return;
    }

    if (!fedData.logo) {
      setError("Logo is required");
      return;
    }

    const data = createFormData(fedData);
    dispatch(registerFederation(data));
  };
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  if (success) {
    setTimeout(() => {
      window.location.href = "#/dashboard/federations";
      window.location.reload(true);
    }, 2000);
  }

  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Register a new federation
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
                <FormGroup style={{ minWidth: "45%" }}>
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
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <FormGroup style={{ minWidth: "45%" }}>
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
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <FormGroup style={{ minWidth: "45%" }}>
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
                <FormGroup style={{ marginLeft: "5%", minWidth: "45%" }}>
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
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <FormGroup style={{ minWidth: "45%" }}>
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
                <FormGroup style={{ marginLeft: "5%", minWidth: "45%" }}>
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
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <FormGroup style={{ minWidth: "45%" }}>
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
                <FormGroup style={{ marginLeft: "5%", minWidth: "45%" }}>
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
              </div>
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
                  onChange={({ target: { value } }) => {
                    console.log(value);
                    handlerChange("logo", value);
                  }}
                />
                <FormText>
                  Upload an image of your federation's logo or headquartes
                </FormText>
              </FormGroup>
              {console.log(errors)}
              {Object.keys(errors).length > 0 && (
                <Alert color="danger">
                  {Object.keys(errors).map((key) => {
                    return <div>{JSON.stringify(errors[key][0])}</div>;
                  })}
                </Alert>
              )}
              {success && <Alert>Federation Registered</Alert>}
              {error && <Alert color="danger">{error}</Alert>}
              <Button onClick={registerFed}>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default RegisterFederation;
