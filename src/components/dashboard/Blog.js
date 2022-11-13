import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const Blog = ({ image, title, subtitle, text, status, id }) => {
  return (
    <Card>
      <img height={180} className="h-1" alt="Card image cap" src={image} />
      <CardBody className="p-2">
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardSubtitle>Status: {status}</CardSubtitle>
        <CardText className="mt-3">{text}</CardText>
        <Link to={`/viewEvent/${id}`}>
          <Button color={"primary"}>View</Button>{" "}
        </Link>
        <Link to={`/viewEvent/${id}`}>
          <Button color={"info"}>Edit</Button>{" "}
        </Link>
        <Link to={`/viewEvent/${id}`}>
          <Button color={"danger"}>Delete</Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default Blog;
