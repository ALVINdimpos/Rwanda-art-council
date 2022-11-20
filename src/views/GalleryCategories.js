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

const GalleryCategories = () => {
  return (
    <Col>
      <Row>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Add a new category to gallery
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="category">Category</Label>
                <Input type="text" name="category" id="category" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Row>
      <Row>
        <Card className="pb-2">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Delete a category from gallery
          </CardTitle>
          <CategoryCard text={"Ubugeni"} />
          <CategoryCard text={"Ibihangano"} />
          <CategoryCard text={"Ubukorikori"} />
          <CategoryCard text={"Ibibumbano"} />
        </Card>
      </Row>
    </Col>
  );
};

export default GalleryCategories;

const CategoryCard = ({text}) => {
  return (
    <Card className="p-2 m-1">
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <span>{text}</span>
        <Button color="danger">Delete</Button>
      </div>
    </Card>
  );
};
