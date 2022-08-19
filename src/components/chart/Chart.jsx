import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  LineChart,

  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Total: 100 },
  { name: "February", Total: 200 },
  { name: "March", Total: 340 },
  { name: "April", Total: 180 },
  { name: "May", Total: 100 },
  { name: "June", Total: 45 },
];

const Chart = () => {
  return (
    <>
    <div className="chart">
      {/* <div className="title">{title}</div> */}
      {/* <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer> */}

      {/* <ResponsiveContainer width="100%" height="100%">
        <LineChart width={150} height={30} data={data}>
          <Line type="monotone" dataKey="total" className="charts" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer> */}

      <span>Graphicall Dashboard</span>
      {/* <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer> */}
      
    </div>

    {/* another session */}

    
    </>
  );
};

export default Chart;
