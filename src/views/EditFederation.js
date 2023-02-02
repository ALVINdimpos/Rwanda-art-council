import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import Style from "./style.module.css";
import { getSingleFederation, updateFederation } from "../redux/actions";
import { useParams } from "react-router-dom";

const EditFederation = () => {
  const { id: fedId } = useParams();
  const [passwordShown, setPasswordShown] = React.useState(false);
  const {
    singleFederation: { singleFederation },
  } = useSelector((state) => state);
  const [error, setError] = React.useState("");
  const [fedData, setFedData] = React.useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleFederation(fedId));
  }, [dispatch, fedId]);

  useEffect(() => {
    if (singleFederation) {
      const {
        tin_number,
        remember_token,
        email_verified_at,
        fed_no,
        id,
        ...rest
      } = singleFederation;
      setFedData((prevCred) => ({
        ...prevCred,
        ...rest,
        tinNumber: tin_number,
      }));
    }
  }, [singleFederation]);
  const handlerChange = (key, value) => {
    setError("");
    setFedData((prevCred) => ({ ...prevCred, [key]: value }));
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  console.log(fedData);
  console.log(singleFederation);
  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Edit federation
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
                    defaultValue={singleFederation.fed_name}
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
                    defaultValue={singleFederation.fname}
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
                <FormGroup style={{ marginRight: "5%", minWidth: "45%" }}>
                  <Label for="federationLeaderLastName">
                    Federation leader last name
                  </Label>
                  <Input
                    id="federationLeaderLastName"
                    name="federationLeaderLastName"
                    placeholder="Federation leader last name"
                    type="text"
                    defaultValue={singleFederation.lname}
                    onChange={({ target: { value } }) => {
                      handlerChange("lname", value);
                    }}
                  />
                </FormGroup>
                <FormGroup style={{ minWidth: "45%" }}>
                  <Label for="phoneNumber">Phone number</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone number"
                    type="text"
                    defaultValue={singleFederation.phone}
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
                  <Label for="emailAddress">Email Address</Label>
                  <Input
                    id="emailAddress"
                    name="emailAddress"
                    placeholder="Email Address"
                    type="email"
                    defaultValue={singleFederation.email}
                    onChange={({ target: { value } }) => {
                      handlerChange("email", value);
                    }}
                  />
                </FormGroup>
                <FormGroup style={{ minWidth: "45%" }}>
                  <Label for="numberOfUnions">Number of unions</Label>
                  <Input
                    id="numberOfUnions"
                    name="numberOfUnions"
                    placeholder="Number of unions under the federation"
                    type="number"
                    defaultValue={singleFederation.union}
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
                <FormGroup style={{ marginRight: "5%", minWidth: "45%" }}>
                  <Label for="tinNumber">Tin number</Label>
                  <Input
                    id="tinNumber"
                    name="tinNumber"
                    placeholder="Tin number for the federation"
                    type="number"
                    defaultValue={singleFederation.tin_number}
                    onChange={({ target: { value } }) => {
                      handlerChange("tinNumber", value);
                    }}
                  />
                </FormGroup>
                <FormGroup style={{ minWidth: "45%" }}>
                  <Label for="province">Province</Label>
                  <Input
                    id="province"
                    name="province"
                    placeholder="Province where the federation is located"
                    type="text"
                    defaultValue={singleFederation.province}
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
                    placeholder="District where the federation is located"
                    type="text"
                    defaultValue={singleFederation.district}
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
                    placeholder="Sector where the federation is located"
                    type="text"
                    defaultValue={singleFederation.sector}
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
                    placeholder="Cell where the federation is located"
                    type="text"
                    defaultValue={singleFederation.cell}
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
                    placeholder="Village where the federation is located"
                    type="text"
                    defaultValue={singleFederation.village}
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
                  defaultValue={singleFederation.description}
                  onChange={({ target: { value } }) => {
                    handlerChange("description", value);
                  }}
                />
              </FormGroup>
              {/* <FormGroup>
                <Label for="imageFile">Upload image</Label>
                <Input
                  id="imageFile"
                  name="imageFile"
                  type="file"
                  onChange={({ target: { files } }) => {
                    handlerChange("logo", files[0]);
                  }}
                />
                <FormText>
                  Upload an image of your federation's logo or headquartes
                </FormText>
              </FormGroup> */}
              {/* {Object.keys(errors).length > 0 && (
                <Alert color="danger">
                  {Object.keys(errors).map((key) => {
                    return <div>{JSON.stringify(errors[key][0])}</div>;
                  })}
                </Alert>
              )}
              {success && <Alert>Federation Registered</Alert>} */}
              {error && <Alert color="danger">{error}</Alert>}
              <Button
                onClick={() => {
                  dispatch(updateFederation(fedId, fedData));
                }}
              >
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default EditFederation;
