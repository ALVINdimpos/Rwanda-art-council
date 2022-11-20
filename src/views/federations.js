import { Col, Row, Button } from "reactstrap";
import CustomTable from "../components/dashboard/CustomTable";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllFederation } from "../redux/actions/federation";

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

const tableHeaders = [
  {
    key: 1,
    header: "Federation name",
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

const Federations = () => {
  const [tableData, setTableData] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    federation: { federations },
  } = state;

  useEffect(() => {
    dispatch(getAllFederation());
  }, [dispatch]);
  useEffect(() => {
    if (federations) setTableData(federations);
  }, [federations]);

  return (
    <div>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <CustomTable
            tableData={tableData}
            action="federations"
            tableHeaders={tableHeaders}
          />
        </Col>
        <Col lg="12">
          <Button color="primary" className="mt-3">
            <Link
              className="text-decoration-none text-light"
              to="/federations/registerFederation"
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
