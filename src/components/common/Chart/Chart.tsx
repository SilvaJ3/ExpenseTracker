import React, { useState, useEffect} from 'react'
import * as S from "./chart.styles"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from "recharts";
import getJsonData, { JsonDataType } from '../../../hooks/getJsonData';
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
  const [colors, setColors] = useState<Array<string>>([]);

  const mergeData = () => {
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
  }



  useEffect(() => {
    mergeData();
  }, [props.datainfo])
    
    useEffect(() => {
      const result = getJsonData(JsonDataType.colors);
      setColors(result as string[]);
    }, [])


  return (
    <S.ChartWrapper>
      {
        data && 
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={700} height={700}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={200}
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
      }
    </S.ChartWrapper>
  )
}