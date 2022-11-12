import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const Blog = ({image, title, subtitle, text, status}) => {
  return (
    <Card>
      <CardImg alt="Card image cap" src={image} />
      <CardBody className="p-2">
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardSubtitle>Status: {status}</CardSubtitle>
        <CardText className="mt-3">{text}</CardText>
        <Button color={"primary"}>
          View
        </Button>{" "}
        <Button color={"info"}>Edit</Button>{" "}
        <Button color={"danger"}>Delete</Button>
      </CardBody>
    </Card>
  );
};

export default Blog;
