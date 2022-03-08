import React, { useState, useEffect } from 'react'
import * as S from "./stats.styles"
import BodyTitle from '../../common/BodyTitle/bodyTitle'
import StatsContent from '../../StatsContent';

interface itemObject {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
};

export default function Stats () {

  const [toggleStats, setToggleStats] = useState<boolean>(true)

  const [expenses, setExpenses] = useState<Array<itemObject>>([]);
  const [incomes, setIncomes] = useState<Array<itemObject>>([]);

  /* -------------------------------------------------------------------------- */
  /*                  useEffect pour récupérer le localStorage                  */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    
    if (localStorage.getItem("expenses")) {
      const localStore = localStorage.getItem("expenses");
      const parseStore = JSON.parse(localStore!);
      if (parseStore[0]) {
        setExpenses(parseStore);
      }
    }
    if (localStorage.getItem("incomes")) {
      const localStore = localStorage.getItem("incomes");
      const parseStore = JSON.parse(localStore!);
      if (parseStore[0]) {
        setIncomes(parseStore)
      }
    }
  }, []);

  function displayStats(){
    if (toggleStats) {
      return (
        <S.StatsContentWrapper>
          Dépenses
          <StatsContent data={expenses}/>
        </S.StatsContentWrapper>
      )
    } else {
      return (
        <S.StatsContentWrapper>
          Recettes
          <StatsContent data={incomes}/>
        </S.StatsContentWrapper>
      )
    }
  }

  return (
    <S.Stats_Wrapper>
      <BodyTitle text={"Statistiques"}/>
      <S.ToggleBtnWrapper>
        <S.ToggleBtn onClick={() => setToggleStats(true)}>Dépenses</S.ToggleBtn>
        <S.ToggleBtn onClick={() => setToggleStats(false)}>Recettes</S.ToggleBtn>
      </S.ToggleBtnWrapper>
      {
        displayStats()
      }
    </S.Stats_Wrapper>
  )
}