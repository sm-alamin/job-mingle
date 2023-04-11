import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import Banner from "../Banner/Banner";

const data = [
  {
    name: "A1",
    marks: 60,
  },
  {
    name: "A2",
    marks: 60,
  },
  {
    name: "A3",
    marks: 60,
  },
  {
    name: "A4",
    marks: 60,
  },
  {
    name: "A5",
    marks: 60,
  },
  {
    name: "A6",
    marks: 60,
  },
  {
    name: "A7",
    marks: 60,
  },
  {
    name: "A8",
    marks: 60,
  }
];
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}`}</p>
          <p className="intro">{`got ${payload[0].value} marks`}</p>
          <p className="desc">Out of full marks:60</p>
        </div>
      );
    }
  
    return null;
  };

const AssignmentMarkStatistics =()=> {
  return (
    <div>
      <Banner pageName="Statistics" />
      <div className="text-center text-green-600">
        <h3>Assignment Analytics</h3>
        <p>Average Assignment Marks: 60.00</p>
      </div>
      <div style={{ width: "100%", height: "400px" }}>
        <ResponsiveContainer>
          <ComposedChart
            data={data}
            margin={{
              top: 50,
              right: 50,
              bottom: 50,
              left: 50
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />

            <Legend />
            <Bar dataKey="marks" barSize={20} fill="#B2A4FF" />
            <Line type="monotone" dataKey="marks" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AssignmentMarkStatistics;
