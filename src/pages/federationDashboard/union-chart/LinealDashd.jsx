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
          <Line type="monotone" dataKey="uv" stroke="#C5801A" />
          <Area type="monotone" dataKey="uv" stroke="#C5801A" fill="#C5801A" />

        </ComposedChart>

</>

    )
}
