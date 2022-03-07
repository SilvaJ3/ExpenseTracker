import React, { useState, useEffect, useRef } from 'react';
import { DashboardList } from './components/DashboardList';
import DashboardResume from './components/DashboardResume';
import * as S from "./App.styles"

function App() {

  return (
    <S.Dashboard_Wrapper>
      <DashboardResume />
      <DashboardList />
    </S.Dashboard_Wrapper>
  );
}

export default App;
