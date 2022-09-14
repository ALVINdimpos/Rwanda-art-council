import React from "react";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Navbar from "../../components/nav/Navbar";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Event from '../eventTable/Event';
import Sidebar from "../../components/sidebar/Sidebar";
import { Container } from "@mui/system";

const HomeDash = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar />
      <Container>
      <div className="widgets">
          <Widget type="arts" />
          <Widget type="art" />
          <Widget type="feration" />
          <Widget type="category" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Recently Registered Federation" aspect={2 / 1} />
        </div> 
        </Container>      
      </div>
  
    </div>
  );
};

export default HomeDash;
