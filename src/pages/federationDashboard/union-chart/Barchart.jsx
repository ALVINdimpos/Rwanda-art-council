import React from 'react'
import { data,data1 } from '../unionDetails';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LabelList,
  } from 'recharts';
export default function Barchart() {
    const renderCustomizedLabel = (props) => {
        const { x, y, width, height, value } = props;
        const radius = 10;
      
        return (
          <g>
            <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
            <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
              {value.split(' ')[1]}
            </text>
          </g>
        );
      };
  return (
    <>
            <BarChart
          width={400}
          height={160}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#C5801A" minPointSize={5}>
            <LabelList dataKey="name" content={renderCustomizedLabel} />
          </Bar>
          <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
        </BarChart>
    </>
    )
}
