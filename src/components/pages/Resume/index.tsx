import React, { useState, useEffect } from "react";
import * as S from "./resume.styles";
import BodyTitle from "../../common/BodyTitle/bodyTitle";
import Table from "../../common/Table/Table";
import getJsonData, {JsonDataType} from "../../../hooks/getJsonData"
import expensesSubject, { ExpensesObserver } from "../../../hooks/useExpensesObserver";
import incomesSubject, { IncomesObserver } from "../../../hooks/useIncomesObserver";

interface itemObject {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
}

export default function Resume() {
  const [expenses, setExpenses] = useState<Array<itemObject>>([]);
  const [incomes, setIncomes] = useState<Array<itemObject>>([]);

  const [categoryExpenses, setCategoryExpenses] = useState<Array<string>>([])
  const [categoryIncomes, setCategoryIncomes] = useState<Array<string>>([])

  const onExpensesUpdated: ExpensesObserver = (expense: itemObject) => {
    setExpenses([...expenses, expense]);
  }

  const onIncomesUpdated: IncomesObserver = (income: itemObject) => {
    setIncomes([...incomes, income]);
  }

  useEffect(() => {
    let result = getJsonData(JsonDataType.expenses);
    setCategoryExpenses(result as string[]);
    result = getJsonData(JsonDataType.incomes);
    setCategoryIncomes(result as string[]);
  }, [])

  /* -------------------------------------------------------------------------- */
  /*                  useEffect pour récupérer le localStorage                  */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    // On initialise le state en récupérant la data depuis le localstorage
    if (expenses.length !== expensesSubject.getLocalStorageInit().length) {
      setExpenses(expensesSubject.getLocalStorageInit());
    }
    
    // Au montage du component, on subscribe
    expensesSubject.attach(onExpensesUpdated);
    // Au démontage du component, on unsubscribe
    return () => expensesSubject.detach(onExpensesUpdated);
  }, [expenses])
  

  useEffect(() => {
    // On initialise le state en récupérant la data depuis le localstorage
    if (incomes.length !== incomesSubject.getLocalStorageInit().length) {
      setIncomes(incomesSubject.getLocalStorageInit());
    }
    
    // Au montage du component, on subscribe
    incomesSubject.attach(onIncomesUpdated);
    // Au démontage du component, on unsubscribe
    return () => incomesSubject.detach(onIncomesUpdated);
  }, [incomes])

  return (
    <S.ResumePageWrapper>
      <S.ResumeTitleWrapper>
        <S.PageTitle>Resume</S.PageTitle>
      </S.ResumeTitleWrapper>
      <Table data={expenses} category={categoryExpenses} />
      <Table data={incomes} category={categoryIncomes} />
    </S.ResumePageWrapper>
  );
}
