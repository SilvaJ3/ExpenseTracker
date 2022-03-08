import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from "recharts";
import useColors from "../../hooks/useColors"

interface dataCharts {
  name: string,
  value: number
}

export default function DashboardCharts (datainfo: any) {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(datainfo.datainfo);
  }, [datainfo])

  const {COLORS} = useColors();

  return (
    <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            // label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
  )
}