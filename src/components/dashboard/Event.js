import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const Event = ({ image, title, subtitle, text, status, id }) => {
  return (
    <Card>
      <img height={180} className="h-1" alt="Card image cap" src={image} />
      <CardBody className="p-2">
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardSubtitle>
          Status: {status === "0" ? "Pending" : "accepted"}
        </CardSubtitle>
        <CardText className="mt-3">{text}</CardText>
        <Link to={`/dashboard/viewEvent/${id}`}>
          <Button
            style={{
              backgroundColor: "#C5801A",
            }}
            color={"primary"}
          >
            View
          </Button>{" "}
        </Link>
        <Link to={`/dashboard/editEvent/${id}`}>
          <Button color={"info"}>Edit</Button>{" "}
        </Link>
        <Button color={"danger"}>Delete</Button>
      </CardBody>
    </Card>
  );
};

export default Event;