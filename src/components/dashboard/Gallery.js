import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, Button } from "reactstrap";
import { deleteOneInGallery } from "../../redux/actions/gallery";

const GalleryCard = ({ image, text, id }) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <img
        width={300}
        height={200}
        className="h-1"
        alt="Card image cap"
        src={image}
      />
      <CardBody className="p-2">
        <Button
          color={"danger"}
          onClick={() => {
            dispatch(deleteOneInGallery(id));
          }}
        >
          Delete
        </Button>
      </CardBody>
    </Card>
  );
};

export default GalleryCard;
