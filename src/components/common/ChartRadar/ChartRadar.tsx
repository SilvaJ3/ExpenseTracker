import React, { useState, useEffect} from 'react'
import * as S from "./chartradar.styles"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
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

interface iChartRadarProps {
  datainfo: itemObject[] | undefined
}

export default function ChartRadar (props: iChartRadarProps) {

  const [data, setData] = useState<Array<dataCharts>>();

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
  }, [])


  return (
    <S.ChartRadarWrapper>
      {
        data && 
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      }
    </S.ChartRadarWrapper>
  )
}