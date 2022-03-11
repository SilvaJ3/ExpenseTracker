import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from "recharts";
import getJsonData, {JsonDataType} from "../../hooks/getJsonData"

interface dataCharts {
  name: string,
  value: number
}

export default function DashboardCharts (datainfo: any) {
  
  const [data, setData] = useState([]);
  const [colors, setColors] = useState<Array<string>>([]);

  useEffect(() => {
    setData(datainfo.datainfo);
    const result = getJsonData(JsonDataType.colors);
    setColors(result as string[]);
  }, [datainfo])


  return (
    <ResponsiveContainer width="100%" height="50%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={130}
            innerRadius={60}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
  )
}