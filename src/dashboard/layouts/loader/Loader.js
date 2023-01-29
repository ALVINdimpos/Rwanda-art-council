import React from "react";
import "./loader.scss";
import { Spinner } from "reactstrap";

const Loader = () => (
  <div className="fallback-spinner">
    <div className="loading">
      <Spinner
        style={{
          color: "#C5801A",
        }}
      />
    </div>
  </div>
);
export default Loader;
