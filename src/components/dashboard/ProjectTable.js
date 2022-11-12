import {
  Card,
  CardBody,
  CardTitle,
  Table,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import { useState } from "react";

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
                {tableHeaders.map((item)=>{
                  return <th>{item.header}</th>
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
                    <ButtonDropdown
                      data-toggle="dropdown"
                      key={index}
                      isOpen={dropdownOpen[index]}
                      toggle={() => toggle(index)}
                    >
                      <DropdownToggle
                        className="btn btn-primary btn-sm"
                        caret
                        color="primary"
                      >
                        Actions
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>View</DropdownItem>
                        <DropdownItem>Edit</DropdownItem>
                        <DropdownItem>Delete</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
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
