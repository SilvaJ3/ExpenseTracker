import React from 'react';
import * as S from "./home.styles";
import { DashboardList } from '../../DashboardList';
import DashboardResume from '../../DashboardResume';


export default function Home() {
  return (
    <S.Dashboard_Wrapper>
      <DashboardResume />
      <DashboardList />
    </S.Dashboard_Wrapper>
  )
}