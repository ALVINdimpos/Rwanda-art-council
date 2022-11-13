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

const ProjectTables = ({ tableData, title, tableHeaders }) => {
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
          <CardTitle tag="h5">{title}</CardTitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                {tableHeaders.map((item) => {
                  return <th>{item.header}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <h6>{tdata.name}</h6>
                    </div>
                  </td>
                  <td>{tdata.tinNumber}</td>
                  <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{tdata.email}</td>
                  <td>
                    <ButtonGroup>
                      <Link to={`/viewFederation/federationId=${tdata.id}`}>
                        <Button color="primary" size="sm">
                          <i class="bi bi-eye-fill"></i>
                        </Button>
                      </Link>
                      <Button color="success" size="sm">
                        <i class="bi bi-pencil-fill"></i>
                      </Button>
                      <Button color="danger" size="sm">
                        <i class="bi bi-trash-fill"></i>
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
