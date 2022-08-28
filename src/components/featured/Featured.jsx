import "./featured.scss";
import "react-circular-progressbar/dist/styles.css";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Janu',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Featured = () => {

  return (
    <div className="featured">
         <ResponsiveContainer width="100%" height="100%">

        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="url(#total)" />
          <XAxis dataKey="name" stroke="gray" />
        </BarChart>
      </ResponsiveContainer>

      
    </div>
  );
};

export default Featured;
