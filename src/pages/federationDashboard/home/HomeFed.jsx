import React from "react";
import "./home.scss";

import Featured from "../../../components/featured/Featured";
import Chart from "../../../components/chart/Chart";
import FedSidebar from "../sideFedbar/FedSidebar";
import FedNavbar from "../nav/FedNavbar";
import ChartsData from "../charts/ChartsData";
import Artists from "../artists/Artists";
const HomeFed = () => {
  return (
    <div className="home">
      <FedSidebar />
      <div className="homeContainer">
        <FedNavbar />

<div className="charts">
<ChartsData />
</div>

<div>
{/* <Artists/> */}
</div>


        {/* <div className="charts">
          <Featured />
  
          <Chart title="Recently Registered Federation" aspect={2 / 1} />
        </div>       */}
      </div>
  
    </div>
  );
};

export default HomeFed;
