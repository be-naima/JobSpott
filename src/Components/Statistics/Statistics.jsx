
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    id:1,
    name:"Assignment-1",
    marks:60
},
{
    id:2,
    name:"Assignment-2",
    marks:58
},
{
    id:3,
    name:"Assignment-3",
    marks:60
},
{
    id:4,
    name:"Assignment-4",
    marks:60
},
{
    id:5,
    name:"Assignment-5",
    marks:60
},
{
    id:6,
    name:"Assignment-6",
    marks:60
},
{
    id:7,
    name:"Assignment-7",
    marks:60
},
{
    id:8,
    name:"Assignment-8",
    marks:60
}
];

export default function App() {
  return (
        <ResponsiveContainer width="100%" aspect={3} >
           
           <AreaChart
             width={400}
             height={400}
             data={data}
             margin={{
               top: 10,
               right: 30,
               left: 0,
               bottom: 0
               
             }} className="h-100 pt-5 pb-5 text-center"
           >
             <CartesianGrid strokeDasharray="3 3" />
             <XAxis dataKey="name" />
             <YAxis />
             <Tooltip />
            
             <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
           </AreaChart>
        </ResponsiveContainer>
        
  );
}
