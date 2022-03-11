import React, { useState, useEffect } from "react";
import * as S from "./stats.styles";
import BodyTitle from "../../common/BodyTitle/bodyTitle";
import StatsContent from "../../StatsContent";
import expensesSubject, { ExpensesObserver } from "../../../hooks/useExpensesObserver";
import incomesSubject, { IncomesObserver } from "../../../hooks/useIncomesObserver";


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

  const onExpensesUpdated: ExpensesObserver = (expense: itemObject) => {
    setExpenses([...expenses, expense]);
  }

  const onIncomesUpdated: IncomesObserver = (income: itemObject) => {
    setIncomes([...incomes, income]);
  }

  useEffect(() => {
    // On initialise le state en récupérant la data depuis le localstorage
    // setExpenses(expensesSubject.getLocalStorageInit());

    // Au montage du component, on subscribe
    expensesSubject.attach(onExpensesUpdated);
    // Au démontage du component, on unsubscribe
    return () => expensesSubject.detach(onExpensesUpdated);
  }, [])

  useEffect(() => {
    // On initialise le state en récupérant la data depuis le localstorage
    // setIncomes(incomesSubject.getLocalStorageInit());

    // Au montage du component, on subscribe
    incomesSubject.attach(onIncomesUpdated);
    // Au démontage du component, on unsubscribe
    return () => incomesSubject.detach(onIncomesUpdated);
  }, [])


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
