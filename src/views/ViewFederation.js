import { Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
const ViewFederation = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Row>
      <Col sm="12">
        <p>View single federation {id}</p>
      </Col>
    </Row>
  );
};

export default ViewFederation;
