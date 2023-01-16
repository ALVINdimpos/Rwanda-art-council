import { Col, Row, Button } from "reactstrap";
import CustomTable from "../components/dashboard/CustomTable";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllFederation } from "../redux/actions/federation";

const tableHeaders = [
  {
    key: 1,
    header: "Federation name",
  },
  {
    key: 2,
    header: "RAC Number",
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

const FederationDashboard = () => {
  const [tableData, setTableData] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    federation: { federations },
    login: { user },
  } = state;

  useEffect(() => {
    if (user) {
      dispatch(getAllFederation());
    }
  }, [dispatch, user]);
  useEffect(() => {
    if (federations) setTableData(federations);
  }, [federations]);

  return (
    <div>
      <Row>
        <Col lg="12">
          <CustomTable
            tableData={tableData}
            action="federations"
            tableHeaders={tableHeaders}
          />
        </Col>
        <Col lg="12">
          <Button
            style={{
              backgroundColor: "#C5801A",
            }}
            className="mt-3"
          >
            <Link
              className="text-decoration-none text-light"
              to="/dashboard/registerFederation"
            >
              Add Federation
            </Link>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default FederationDashboard;
