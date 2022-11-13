import { Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";

const ViewEvent = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Row>
      <Col sm="12">
        <p>View single event {id}</p>
      </Col>
    </Row>
  );
};

export default ViewEvent;
