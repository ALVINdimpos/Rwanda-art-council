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

const AddTestimonial = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Add a new testimonial
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="testimonial">Testimonial</Label>
                <Input
                  id="testimonial"
                  name="testimonial"
                  placeholder="Enter testimonial here"
                  type="textarea"
                />
              </FormGroup>
              <FormGroup>
                <Label for="imageFile">Upload image</Label>
                <Input id="imageFile" name="imageFile" type="file" />
                <FormText>Upload an image of the testimonial giver</FormText>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default AddTestimonial;
