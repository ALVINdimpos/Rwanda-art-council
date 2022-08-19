import './chart.scss';
import React from 'react'
import { BarChart,LineChart,Line,Bar, ResponsiveContainer } from 'recharts';

function Charta() {
    const data = [
        { name: "January", Total: 20050 },
        { name: "February", Total: 200 },
        { name: "March", Total: 340 },
        { name: "April", Total: 180 },
        { name: "May", Total: 100 },
        { name: "June", Total: 45 },
      ];
  return (
    <div className="chart">
    <span className="gr-title">Grapgical BarChart Of category</span>
    <ResponsiveContainer width="90%" height="80%">
    <BarChart 
    width={150} 
    height={30} 
    isAnimationActive={true}
    label
    data={data}>
      <Bar dataKey="value"  className="charts"/>
    </BarChart>
  </ResponsiveContainer>

  {/* <Example/> */}
</div>  )
}

export default Charta