import React from 'react'
import "./home.scss";
import Widget from '../../components/widget/Widget'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/nav/Navbar'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Example from './Data';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="arts" />
          <Widget type="art" />
          <Widget type="feration" />
          <Widget type="category" />
        </div>
        <div className="charts">
          <Featured />
          <Chart/>
          {/* <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> */}
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          // <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
