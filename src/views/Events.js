import React, { useState } from "react";
import {
  Alert,
  UncontrolledAlert,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

const Events = () => {
  // For Dismiss Button with Alert
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
  };

  return (
    <Card>
      <CardTitle tag="h6" className="border-bottom p-3 mb-0">
        Events
      </CardTitle>
    </Card>
  );
};

export default Events;
