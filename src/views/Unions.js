import { Col, Row, Button } from "reactstrap";
import CustomTable from "../components/dashboard/CustomTable";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllUnions } from "../redux/actions/union";

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
  const [tableData, setTableData] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    unions: { unions },
  } = state;

  useEffect(() => {
    dispatch(getAllUnions());
  }, [dispatch]);
  useEffect(() => {
    if (unions) setTableData(unions);
  }, [unions]);
  return (
    <div>
      <Row>
        <Col lg="12">
          <CustomTable
            tableData={tableData}
            action="unions"
            tableHeaders={tableHeaders}
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
