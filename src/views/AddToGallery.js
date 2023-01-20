import React from "react";
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
import { getAllCategories } from "../redux/actions";
import { createNewGallery } from "../redux/actions/gallery";

const createFormData = (body) => {
  const data = new FormData();
  for (const [key, value] of Object.entries(body)) {
    data.append(key, value);
  }
  return data;
};

const AddToGallery = () => {
  const [error, setError] = React.useState("");
  const [galleryData, setGalleryData] = React.useState([]);
  const dispatch = useDispatch();
  const handlerChange = (key, value) => {
    setError("");
    setGalleryData((prevCred) => ({ ...prevCred, [key]: value }));
  };
  const {
    getCategories: { categories },
    createOneInGallery: { success, errors },
  } = useSelector((state) => state);

  React.useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  const addToGallery = () => {
    if (!galleryData.category) {
      setError("Category can't be empty");
      return;
    }
    if (!galleryData.image) {
      setError("Image is required");
      return;
    }
    const data = createFormData(galleryData);
    dispatch(createNewGallery(data));
  };

  // if (success) {
  //   setTimeout(() => {
  //     window.location.href = "#/dashboard/gallery";
  //     window.location.reload(true);
  //   }, 2000);
  // }

  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Add a new artwork to gallery
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Category</Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  onChange={({ target: { value } }) =>
                    handlerChange("category", value)
                  }
                >
                  {categories.map((category) => {
                    return (
                      <option
                        value={category.id}
                        onChange={(val) => console.log(val)}
                      >
                        {category.name}
                      </option>
                    );
                  })}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="imageFile">Upload image/video</Label>
                <Input
                  id="imageFile"
                  name="imageFile"
                  type="file"
                  onChange={({ target: { value } }) => {
                    // console.log(value);
                    handlerChange("image", value);
                  }}
                />
                <FormText>
                  Upload an image you want to add to the gallery
                </FormText>
              </FormGroup>
              {console.log(errors)}
              {Object.keys(errors).length > 0 && (
                <Alert color="danger">
                  {Object.keys(errors).map((key) => {
                    return <div>{JSON.stringify(errors[key][0])}</div>;
                  })}
                </Alert>
              )}
              {success && <Alert>Image added to Gallery</Alert>}
              {error && <Alert color="danger">{error}</Alert>}
              <Button onClick={addToGallery}>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default AddToGallery;
