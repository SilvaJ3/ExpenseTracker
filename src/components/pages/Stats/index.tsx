import React, { useState, useEffect } from "react";
import * as S from "./stats.styles";
import BodyTitle from "../../common/BodyTitle/bodyTitle";
import StatsContent from "../../StatsContent";

interface itemObject {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
}

export default function Stats() {
  const [toggleStats, setToggleStats] = useState<boolean>(true);

  const [expenses, setExpenses] = useState<Array<itemObject>>([]);
  const [incomes, setIncomes] = useState<Array<itemObject>>([]);

  /* -------------------------------------------------------------------------- */
  /*                  useEffect pour récupérer le localStorage                  */
  /* -------------------------------------------------------------------------- */

  const getLocalStorage = (item: string): void => {
    if (item === "expenses") {
      if (localStorage.getItem(item)) {
        const localStore = localStorage.getItem(item);
        const parseStore = JSON.parse(localStore!);
        if (parseStore[0]) {
          setExpenses(parseStore);
        }
      }
    } else {
      if (localStorage.getItem(item)) {
        const localStore = localStorage.getItem(item);
        const parseStore = JSON.parse(localStore!);
        if (parseStore[0]) {
          setIncomes(parseStore);
        }
      }
    }
  }

  useEffect(() => {
    getLocalStorage("expenses")
    getLocalStorage("incomes")
  }, []);

  function displayStats() {
    if (toggleStats) {
      return (
        <S.StatsContentWrapper>
          Dépenses
          <StatsContent data={expenses} />
        </S.StatsContentWrapper>
      );
    } else {
      return (
        <S.StatsContentWrapper>
          Recettes
          <StatsContent data={incomes} />
        </S.StatsContentWrapper>
      );
    }
  }

  return (
    <S.Stats_Wrapper>
      <BodyTitle text={"Statistiques"} />
      <S.ToggleBtnWrapper>
        <S.ToggleBtn onClick={() => setToggleStats(true)}>Dépenses</S.ToggleBtn>
        <S.ToggleBtn onClick={() => setToggleStats(false)}>
          Recettes
        </S.ToggleBtn>
      </S.ToggleBtnWrapper>
      {displayStats()}
    </S.Stats_Wrapper>
  );
}
