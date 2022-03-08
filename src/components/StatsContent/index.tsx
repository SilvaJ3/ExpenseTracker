import React from "react";
import Chart from "../common/Chart/Chart";
import { ItemObject } from "../EditForm";
import StatsChartDetails from "../StatsChartDetails";
import * as S from "./statscontent.styles";

interface itemObject {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
};

interface iChartProps {
  data: itemObject[] | undefined
}

export default function StatsContent(props: iChartProps) {

  return (
  <S.StatsWrapper>
    <Chart datainfo={props.data}/>
    <StatsChartDetails datainfo={props.data}/>
  </S.StatsWrapper>
  );
}
