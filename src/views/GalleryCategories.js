import { useEffect, useState } from "react";
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
} from "reactstrap";
import {
  getAllCategories,
  deleteCategory,
  createCategory,
} from "../redux/actions/categories";

const GalleryCategories = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const {
    getCategories: { categories },
    createCategory: { success: categoryCreated },
    deleteCategory: { success: categoryDeleted },
  } = useSelector((state) => state);
  const handlerChange = (key, value) => {
    // setError("");
    setData((prevCred) => ({ ...prevCred, [key]: value }));
  };

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch, categoryCreated, categoryDeleted]);
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
                <Input
                  type="text"
                  name="category"
                  id="category"
                  onChange={({ target: { value } }) => {
                    handlerChange("name", value);
                  }}
                />
              </FormGroup>
              <Button
                onClick={() => {
                  dispatch(createCategory(data));
                }}
              >
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Row>
      <Row>
        <Card className="pb-2">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Delete a category from gallery
          </CardTitle>
          {categories?.map((item) => (
            <CategoryCard item={item} key={item.id} />
          ))}
        </Card>
      </Row>
    </Col>
  );
};

export default GalleryCategories;

const CategoryCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Card className="p-2 m-1">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{item.name}</span>
        <Button
          color="danger"
          onClick={() => dispatch(deleteCategory(item.id))}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
};
