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

const EditUnion = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Edit union
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
                />
              </FormGroup>
              <FormGroup>
                <Label for="unionLeaderLastName">Union leader last name</Label>
                <Input
                  id="unionLeaderLastName"
                  name="unionLeaderLastName"
                  placeholder="union leader last name"
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
                <Label for="numberofmembers">Total number of members</Label>
                <Input
                  id="numberofmembers"
                  name="numberofmembers"
                  placeholder="Number of artists/members under the union"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <Label for="province">Province</Label>
                <Input
                  id="province"
                  name="province"
                  placeholder="Phone number"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="phoneNumber">District</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone number"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="phoneNumber">Sector</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone number"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="phoneNumber">Cell</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone number"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="phoneNumber">Village</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone number"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="slogan">Union slogan</Label>
                <Input
                  id="slogan"
                  name="slogan"
                  placeholder="Enter the slogan of the union"
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
                <FormText>Upload an image of your union's logo</FormText>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default EditUnion;
