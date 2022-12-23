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
} from "reactstrap";

const RegisterEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Register a new event
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="eventTitle">Event title</Label>
                <input
                  id="eventTitle"
                  name="eventTitle"
                  placeholder="Name of the event"
                  className={Style.inputText}
                  type="text"
                  {...register("title", { required: true })}
                />
              </FormGroup>
              <FormGroup>
                <Label for="eventLocation">Event Location</Label>
                <input
                  id="eventLocation"
                  name="eventLocation"
                  className={Style.inputText}
                  placeholder="Enter where the event will take place"
                  type="text"
                  {...register("location", { required: true })}
                />
              </FormGroup>
              <FormGroup>
                <Label for="eventDateAndTime">Event date and time</Label>
                <input
                  id="eventDateAndTime"
                  name="eventDateAndTime"
                  placeholder="Enter the time and date of the event"
                  className={Style.inputText}
                  type="text"
                  {...register("at", { required: true })}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Decription</Label>
                <input
                  id="description"
                  name="description"
                  placeholder="Enter description of the event"
                  className={Style.inputText}
                  type="textarea"
                  {...register("description", { required: true })}
                />
              </FormGroup>
              <FormGroup>
                <Label for="imageFile">Upload image</Label>
                <Input
                  id="imageFile"
                  name="imageFile"
                  className={Style.inputText}
                  type="file"
                  {...register("ev_image", { required: true })}
                />
                <FormText>Upload an image of the event</FormText>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default RegisterEvent;
