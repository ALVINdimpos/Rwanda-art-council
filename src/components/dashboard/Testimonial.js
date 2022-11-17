import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardText,
  Button,
} from "reactstrap";

const Testimonial = ({ image, text, id }) => {
  return (
    <Card
      style={{
        width: "14rem",
      }}
    >
      <img height={180} className="h-1" alt="Card image cap" src={image} />
      <CardBody className="p-2">
        <CardText className="mt-3">
          {text}
        </CardText>
        <Link to={`/editTestimonial/${id}`}>
          <Button color={"info"}>Edit</Button>{" "}
        </Link>
        <Button color={"danger"}>Delete</Button>
      </CardBody>
    </Card>
  );
};

export default Testimonial;
