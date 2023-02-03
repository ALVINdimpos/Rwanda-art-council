import {
  Card,
  CardBody,
  CardTitle,
  Table,
  ButtonGroup,
  Button,
  Alert,
} from "reactstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../layouts/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFederation,
  getAllFederation,
} from "../../redux/actions/federation";
import { deleteUnion, getAllUnions } from "../../redux/actions";

const CustomTable = ({
  tableData,
  action = "federations" || "unions",
  tableHeaders,
}) => {
  const dispatch = useDispatch();
  // make states for multiple dropdown menus that are being mapped with dynamic data
  const [dropdownOpen, setDropdownOpen] = useState([]);
  const [message, setMessage] = useState("");
  const {
    deleteFederation: { loading, success, errors },
    deleteUnion: {
      loading: unionLoading,
      success: unionSuccess,
      errors: unionErrors,
    },
  } = useSelector((state) => state);

  // toggle function for dropdown
  const toggle = (index) => {
    const newArray = dropdownOpen.map((element, dropdownIndex) => {
      if (index === dropdownIndex) {
        return !element;
      }
      return element;
    });
    setDropdownOpen(newArray);
  };
  useEffect(() => {
    if (success) {
      dispatch(getAllFederation());
      setMessage("Federation deleted");
    }
  }, [dispatch, success]);

  useEffect(() => {
    if (unionSuccess) {
      dispatch(getAllUnions());
      setMessage("Union deleted");
    }
  }, [dispatch, unionSuccess]);
  if (success || unionSuccess) {
    setTimeout(() => {
      setMessage("");
    }, 2000);
  }
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">
            {action === "federations" ? "Federations List" : "Union Lists"}
          </CardTitle>
          {message !== "" && <Alert>{message}</Alert>}
          {/* {errors && <Alert color="danger">{errors}</Alert>} */}

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                {tableHeaders.map((item, index) => {
                  return <th key={index}>{item.header}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {tableData ? (
                tableData.map((tdata, index) =>
                  action === "federations" ? (
                    <tr key={index} className="border-top">
                      <td>
                        <div className="d-flex align-items-center p-2">
                          <h6>{tdata.fed_name}</h6>
                        </div>
                      </td>
                      <td>{tdata.fed_no}</td>
                      <td>{tdata.email}</td>
                      <td>
                        <ButtonGroup>
                          <Link to={`/dashboard/viewFederation/${tdata.id}`}>
                            <Button color="#C5801A" size="sm">
                              <i className="bi bi-eye-fill"></i>
                            </Button>
                          </Link>
                          <Link to={`/dashboard/editFederation/${tdata.id}`}>
                            <Button color="success" size="sm">
                              <i className="bi bi-pencil-fill"></i>
                            </Button>
                          </Link>
                          <Button
                            color="danger"
                            size="sm"
                            onClick={() => {
                              dispatch(deleteFederation(tdata.id));
                            }}
                          >
                            <i className="bi bi-trash-fill"></i>
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ) : (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center p-2">
                          <h6>{tdata.name}</h6>
                        </div>
                      </td>
                      <td>{tdata.uni_no}</td>
                      <td>{tdata.email}</td>
                      <td>
                        <ButtonGroup>
                          <Link to={`/dashboard/viewUnion/${tdata.id}`}>
                            <Button
                              style={{
                                backgroundColor: "#C5801A",
                              }}
                              size="sm"
                            >
                              <i className="bi bi-eye-fill"></i>
                            </Button>
                          </Link>
                          <Link to={`/dashboard/editUnion/${tdata.id}`}>
                            <Button color="success" size="sm">
                              <i className="bi bi-pencil-fill"></i>
                            </Button>
                          </Link>
                          <Button
                            color="danger"
                            size="sm"
                            onClick={() => {
                              dispatch(deleteUnion(tdata.id));
                            }}
                          >
                            <i className="bi bi-trash-fill"></i>
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  )
                )
              ) : (
                <Loader />
              )}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default CustomTable;
