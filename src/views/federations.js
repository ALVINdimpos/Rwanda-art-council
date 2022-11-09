import { Col, Row, Button } from "reactstrap";
import ProjectTables from "../components/dashboard/ProjectTable";
import { Link } from "react-router-dom";

const tableData = [
  {
    id: 1,
    name: "Test federation 1",
    email: "testfederation1@gmail.com",
    tinNumber: "126565836182312",
    status: "pending",
  },
  {
    id: 2,
    name: "Test federation 2",
    email: "testfederation2@gmail.com",
    tinNumber: "986842933623763",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
];

const Federations = () => {
  return (
    <div>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <ProjectTables tableData={tableData} />
        </Col>
        <Col lg="12">
          <Button color="primary" className="mt-3">
            <Link
              className="text-decoration-none text-light"
              to="/registerFederation"
            >
              Add Federation
            </Link>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Federations;
