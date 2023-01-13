import { useForm } from "react-hook-form";
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
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerEvent } from "../redux/actions";

const createFormData = (body) => {
  const data = new FormData();
  for (const [key, value] of Object.entries(body)) {
    data.append(key, value);
  }

  return data;
};

const RegisterEvent = () => {
  const dispatch = useDispatch();
  const [eventData, setEventData] = React.useState();
  const { success } = useSelector((state) => state.registerEvent);

  const handlerChange = (key, value) => {
    setEventData((prevCred) => ({ ...prevCred, [key]: value }));
  };
  const eventRegistration = () => {
    const data = createFormData(eventData);
    dispatch(registerEvent(data));
  };
  if (success) {
    setTimeout(() => {
      window.location.href = "#/dashboard/events";
      window.location.reload(true);
    }, 2000);
  }

  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Register a new event
          </CardTitle>
          <CardBody>
            {success && <Alert>Event Registered</Alert>}
            <Form>
              <FormGroup>
                <Label for="eventTitle">Event title</Label>
                <Input
                  id="eventTitle"
                  name="eventTitle"
                  placeholder="Event title"
                  type="text"
                  onChange={({ target: { value } }) => {
                    handlerChange("title", value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="eventLocation">Event Location</Label>
                <Input
                  id="eventLocation"
                  name="eventLocation"
                  placeholder="Event location"
                  type="text"
                  onChange={({ target: { value } }) => {
                    handlerChange("location", value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="eventDateAndTime">Event date and time</Label>
                <Input
                  id="eventDateAndTime"
                  name="eventDateAndTime"
                  placeholder="Event date and time"
                  type="date"
                  onChange={({ target: { value } }) => {
                    handlerChange("at", value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Decription</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Event descrition"
                  type="text"
                  onChange={({ target: { value } }) => {
                    handlerChange("description", value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="imageFile">Upload image</Label>
                <Input
                  id="imageFile"
                  name="imageFile"
                  className={Style.inputText}
                  type="file"
                  onChange={({ target: { value } }) => {
                    handlerChange("ev_image", value);
                  }}
                />
                <FormText>Upload an image of the event</FormText>
              </FormGroup>
              <Button onClick={eventRegistration}>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default RegisterEvent;
