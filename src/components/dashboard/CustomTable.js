import {
  Card,
  CardBody,
  CardTitle,
  Table,
  ButtonGroup,
  Button,
} from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const CustomTable = ({
  tableData,
  action = "federations" || "unions",
  tableHeaders,
}) => {
  // make states for multiple dropdown menus that are being mapped with dynamic data
  const [dropdownOpen, setDropdownOpen] = useState([]);

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

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">
            {action === "federations" ? "Federations List" : "Union Lists"}
          </CardTitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                {tableHeaders.map((item, index) => {
                  return <th key={index}>{item.header}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {tableData &&
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
                          <Link to={`/viewFederation/${tdata.id}`}>
                            <Button color="#C5801A" size="sm">
                              <i className="bi bi-eye-fill"></i>
                            </Button>
                          </Link>
                          <Link to={`/editFederation/${tdata.id}`}>
                            <Button color="success" size="sm">
                              <i className="bi bi-pencil-fill"></i>
                            </Button>
                          </Link>
                          <Button color="danger" size="sm">
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
                          <Link to={`/viewUnion/${tdata.id}`}>
                            <Button
                              style={{
                                backgroundColor: "#C5801A",
                              }}
                              size="sm"
                            >
                              <i className="bi bi-eye-fill"></i>
                            </Button>
                          </Link>
                          <Link to={`/editUnion/${tdata.id}`}>
                            <Button color="success" size="sm">
                              <i className="bi bi-pencil-fill"></i>
                            </Button>
                          </Link>
                          <Button color="danger" size="sm">
                            <i className="bi bi-trash-fill"></i>
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default CustomTable;
