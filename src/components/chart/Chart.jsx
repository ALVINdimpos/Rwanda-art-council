import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
  ResponsiveContainer,
} from "recharts";
// import { Data } from "../../datatablesource";
import { useState,useEffect } from "react";
import { base_uri,convertMonth } from "../token/Token";





const Chart = ({ aspect, title }) => {
  const [row,setRow]=useState([])
  // console.log('Current token',localStorage.getItem('token'))

//the API data
useEffect(()=>{
  fetch(base_uri,{
    method: 'GET',
    headers: {
        'Authorization': 'Bearer '+localStorage.getItem('token'),
        'Content-Type': 'application/json'
    }})
    .then(result=>{
    //  console.log('API Data',result.json())
      return result.json()})
    .then(data=>{setRow(data?.User.Data)})
},[])

// console.log('Rows In API',row)

// console.log('current Token',localStorage.getItem('token'));

//end of API






let registeredMonth=[]
row.forEach(item=>(
 registeredMonth.push(convertMonth(item.created_at))
  )
  )
  let months=["jan","feb","mar","apr","may","june","july","august","sept","oct","nov","dec"];
  for(let i=0;i<registeredMonth.length;i++){
    if(registeredMonth[i]==='January'){
      months[0]=registeredMonth.length
    }
    if(registeredMonth[i]==='February'){
      months[1]=registeredMonth.length
    }
    if(registeredMonth[i]==='March'){
      months[2]=registeredMonth.length
    }
    if(registeredMonth[i]==='April'){
      months[3]=registeredMonth.length
    }
    if(registeredMonth[i]==='May'){
      months[4]=registeredMonth.length
    }
    if(registeredMonth[i]==='June'){
      months[5]=registeredMonth.length
    }
    if(registeredMonth[i]==='July'){
      months[6]=registeredMonth.length
    }
    if(registeredMonth[i]==='August'){
      months[7]=registeredMonth.length
    }
    if(registeredMonth[i]==='September'){
      months[8]=registeredMonth.length
    }
    if(registeredMonth[i]==='October'){
      months[9]=registeredMonth.length
    }
    if(registeredMonth[i]==='November'){
      months[10]=registeredMonth.length
    }
    if(registeredMonth[i]==='December'){
      months[11]=registeredMonth.length
      console.log('Mysterous Size',months[11])
    }

  
  }

 
  
  const data = [
    { name: "Jan", Size: months[0] | "0" },
    { name: "Feb", Size: months[1] | "0"},
    { name: "Mar", Size: months[2] | "0"},
    { name: "Apr", Size: months[3] | "0"},
    { name: "May", Size: months[4] | "0"},
    { name: "June", Size: months[5] | "0"},
    { name: "July", Size: months[6] | "0"},
    { name: "Aug", Size: months[7] | "0"},
    { name: "Sept", Size: months[8] | "0"},
    { name: "Oct", Size: months[9] | "0"},
    { name: "Nov", Size: months[10] | "0"},
    { name: "Dec", Size: months[11] | "0"},
  ];


 
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
 
              <stop offset="5%" stopColor="#C5801A" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#C5801A" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Size"
            stroke="#FFB636"
            fillOpacity={1}
            fill="#FFB636"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
