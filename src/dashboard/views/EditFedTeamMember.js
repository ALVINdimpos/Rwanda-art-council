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

const EditFedTeamMember = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Add a new team to the federation
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="team">Full name</Label>
                <Input
                  id="team"
                  name="team"
                  placeholder="Enter the full name of the team"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  required="true"
                  name="email"
                  placeholder="Enter the team's email"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="position">Position</Label>
                <Input
                  id="position"
                  required="true"
                  name="position"
                  placeholder="Enter the team's position"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="twitter">Twitter profile</Label>
                <Input
                  id="twitter"
                  name="twitter"
                  placeholder="Enter the team's twitter profile"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="instagram">Instagram profile</Label>
                <Input
                  id="instagram"
                  name="instagram"
                  placeholder="Enter the team's instagram profile"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="linkedin">Linkedin profile</Label>
                <Input
                  id="linkedin"
                  name="linkedin"
                  placeholder="Enter the team's linkedin profile"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="imageFile">Upload team photo</Label>
                <Input id="imageFile" name="imageFile" type="file" />
                <FormText>Upload an image of the team</FormText>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default EditFedTeamMember;
