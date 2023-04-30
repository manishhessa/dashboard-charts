import React from 'react'
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, AreaChart, Area} from "recharts";
import { useEffect, useState } from "react";

export default function voc() {
    const [user, setUser] = useState([]);


  const fetchData = () => {
    return fetch("https://retoolapi.dev/GV94Un/data")
          .then((response) => response.json())
          .then((data) => setUser(data));
        }
        useEffect(() => {
          fetchData();
        },[])
  return (
    <div>
      <div className='linechart'>
    <h1 className='chart-heading'>Line Chart</h1>
        <LineChart
          width={1000}
          height={300}
          data={user}
          margin={{
            top: 5,
            right: 10,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Time" />
          <YAxis domain={[0, 20]}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Node 1" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Node 2" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Node 3" stroke="#d88499" />
          <Line type="monotone" dataKey="Node 4" stroke="#16A5A5" />
        </LineChart>
    
         
    </div>

        
      <div className='barchart'>
      <h1 className='chart-heading'>Stacked Bar Chart</h1>
        <BarChart
          width={1000}
          height={400}
          data={user}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Node 1" stackId="a" fill="#8884d8" />
          <Bar dataKey="Node 2" stackId="a" fill="#82ca9d" />
          <Bar dataKey="Node 3" stackId="a" fill="#d88499" />
          <Bar dataKey="Node 4" stackId="a" fill="#16A5A5" />
        </BarChart>
        </div>

      <div className='areachart'>
      <h1 className='chart-heading'>Stacked Area Chart</h1>
    <AreaChart width={1000} height={200} data={user}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="Node1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="Node2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="Node3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#A54FCD" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#A54FCD" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="Node4" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#3E98B5" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#3E98B5" stopOpacity={0}/>
    </linearGradient>
  </defs>
   <XAxis dataKey="Time" />
    <YAxis domain={[0,30]}/>
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="Node 1" stroke="#8884d8" fillOpacity={1} fill="url(#Node1)" />
    <Area type="monotone" dataKey="Node 2" stroke="#82ca9d" fillOpacity={1} fill="url(#Node2)" />
    <Area type="monotone" dataKey="Node 3" stroke="#A54FCD" fillOpacity={1} fill="url(#Node3)" />
    <Area type="monotone" dataKey="Node 4" stroke="#3E98B5" fillOpacity={1} fill="url(#Node4)" />
  </AreaChart>
  </div>
    </div>
  )
}
