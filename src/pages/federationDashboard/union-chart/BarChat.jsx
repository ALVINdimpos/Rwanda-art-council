import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { data1 } from '../unionDetails';
export default function BarChat() {
  return (
    <>
     <BarChart width={700} height={140} data={data1}>
          <Bar dataKey="uv" fill="#C5801A" />
          <XAxis dataKey="name" />

        </BarChart>
    </>
    )
}
