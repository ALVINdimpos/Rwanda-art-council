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
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Register a new event
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="eventTitle">Event title</Label>
                <Input
                  id="eventTitle"
                  name="eventTitle"
                  placeholder="Name of the event"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="eventLocation">Event Location</Label>
                <Input
                  id="eventLocation"
                  name="eventLocation"
                  placeholder="Enter where the evnt will take place"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="eventDateAndTime">Event date and time</Label>
                <Input
                  id="eventDateAndTime"
                  name="eventDateAndTime"
                  placeholder="Enter the time and date of the event"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Decription</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Enter description of the event"
                  type="textarea"
                />
              </FormGroup>
              <FormGroup>
                <Label for="imageFile">Upload image</Label>
                <Input id="imageFile" name="imageFile" type="file" />
                <FormText>
                  Upload an image of the event
                </FormText>
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
