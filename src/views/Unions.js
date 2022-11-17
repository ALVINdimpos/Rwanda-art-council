import { Col, Row, Button } from "reactstrap";
import ProjectTables from "../components/dashboard/ProjectTable";
import { Link } from "react-router-dom";

const tableData = [
  {
    id: 1,
    name: "Test Unions 1",
    email: "Unions@gmail.com",
    tinNumber: "126565836182312",
    status: "pending",
  },
  {
    id: 2,
    name: "Test Unions 2",
    email: "Unions@gmail.com",
    tinNumber: "986842933623763",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
];

const tableHeaders = [
  {
    key: 1,
    header: "Union name",
  },
  {
    key: 2,
    header: "TIN Number",
  },
  {
    key: 3,
    header: "Email",
  },
  {
    key: 4,
    header: "Actions",
  },
];

const Unions = () => {
  return (
    <div>
      <Row>
        <Col lg="12">
          <ProjectTables
            tableData={tableData}
            title={"Unions List"}
            tableHeaders={tableHeaders}
            viewButton={"/viewUnion/"}
            editButton={"/editUnion/"}
          />
        </Col>
        <Col lg="12">
          <Button color="primary" className="mt-3">
            <Link
              className="text-decoration-none text-light"
              to="/registerUnion"
            >
              Add Union
            </Link>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Unions;
