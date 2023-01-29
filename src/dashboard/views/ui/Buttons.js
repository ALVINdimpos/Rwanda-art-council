import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

const Buttons = () => {
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);

  const onRadioBtnClick = (rSelected) => {
    setRSelected(rSelected);
  };

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };

  return (
    <Card>
      <CardTitle tag="h6" className="border-bottom p-3 mb-0">
        Artists
      </CardTitle>
    </Card>
  );
};

export default Buttons;
