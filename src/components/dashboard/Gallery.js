import { Link } from "react-router-dom";
import { Card, CardBody, CardText, Button } from "reactstrap";

const GalleryCard = ({ image, text, id }) => {
  return (
    <Card
      style={{
        width: "14rem",
      }}
    >
      <img height={180} className="h-1" alt="Card image cap" src={image} />
      <CardBody className="p-2">
        <Button color={"danger"}>Delete</Button>
      </CardBody>
    </Card>
  );
};

export default GalleryCard;
