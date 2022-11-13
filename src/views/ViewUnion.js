import { Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";

const ViewUnion = () => {
  const {id} = useParams();
  console.log(id);
  return (
    <Row>
      <Col sm="12">
        <p>View single union {id}</p>
      </Col>
    </Row>
  );
};

export default ViewUnion;
