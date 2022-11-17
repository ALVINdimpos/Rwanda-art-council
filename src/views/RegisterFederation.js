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

const RegisterFederation = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Register a new federation
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="federationName">Federation name</Label>
                <Input
                  id="federationName"
                  name="federationName"
                  placeholder="Name of the federation"
                  type="text"
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
                />
              </FormGroup>
              <FormGroup>
                <Label for="phoneNumber">Phone number</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone number"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="emailAddress">Email Address</Label>
                <Input
                  id="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="numberOfUnions">Number of unions</Label>
                <Input
                  id="numberOfUnions"
                  name="numberOfUnions"
                  placeholder="Number of unions under the federation"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Decription</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Enter description of the federation"
                  type="textarea"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="********"
                  type="password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="*********"
                  type="password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="imageFile">Upload image</Label>
                <Input id="imageFile" name="imageFile" type="file" />
                <FormText>
                  TUpload an image of your federation's logo or headquartes
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

export default RegisterFederation;
