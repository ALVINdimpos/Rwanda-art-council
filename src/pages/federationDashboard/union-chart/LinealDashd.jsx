import React from 'react'
import { LineChart, ComposedChart,Line,Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { data1 } from '../unionDetails';
export default function LinealDashd() {
  return (
<>
<ComposedChart
          width={700}
          height={140}
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
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />

        </ComposedChart>

</>

    )
}
