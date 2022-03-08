import React, { useState, useEffect} from 'react'
import * as S from "./chart.styles"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from "recharts";
import useColors from '../../../hooks/useColors';
import _ from "lodash"

interface dataCharts {
  name: string;
  value: number;
}

interface itemObject {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
};

interface iChartProps {
  datainfo: itemObject[] | undefined
}

export default function Chart (props: iChartProps) {

  const [data, setData] = useState<Array<dataCharts>>();

  useEffect(() => {
    
    let result = _.chain(props.datainfo)
      .groupBy('category')
      .map((item: any | itemObject, category) => {
          return {
              name: category, 
              value: _.sumBy(item, 'value')
          };
      })
      .value();

      setData(result);
    

  }, [props.datainfo])

  const {COLORS} = useColors();

  return (
    <S.ChartWrapper>
      {
        data && 
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
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
      }
    </S.ChartWrapper>
  )
}