import React, { useState, useEffect } from 'react'
import * as S from "./dashboardresume.styles"
import BodyTitle from '../common/BodyTitle/bodyTitle'
import Text from "../common/Text/Text"
import DashboardCharts from "../DashboardCharts/index"
import _ from "lodash"
import useIncomes from '../../hooks/useIncomes'
import expensesSubject, { ExpensesObserver } from "../../hooks/useExpensesObserver";
import incomesSubject, { IncomesObserver } from '../../hooks/useIncomesObserver'

type itemObject = {
  id: string,
  description: string,
  value: number,
  category: string,
  date: string
}

export default function DashboardResume () {

  const [expenseTotal, setExpenseTotal] = useState<number>(0);
  const [expenses, setExpenses] = useState<Array<itemObject>>([]);
  const [incomes, setIncomes] = useState<Array<itemObject>>([]);
  const [incomeTotal, setIncomeTotal] = useState<number>(0);

  const onExpensesUpdated: ExpensesObserver = (expense: itemObject) => {
    setExpenses([...expenses, expense]);
  }

  const onIncomesUpdated: IncomesObserver = (income: itemObject) => {
    setIncomes([...incomes, income])
  }

  useEffect(() => {
    // On initialise le state en récupérant la data depuis le localstorage
    setExpenses(expensesSubject.getLocalStorageInit());

    // Au montage du component, on subscribe
    expensesSubject.attach(onExpensesUpdated);
    // Au démontage du component, on unsubscribe
    return () => expensesSubject.detach(onExpensesUpdated);
  }, [])

  useEffect(() => {
    // On initialise le state en récupérant la data depuis le localstorage
    setIncomes(incomesSubject.getLocalStorageInit());
    
    // Au montage du component, on subscribe
    incomesSubject.attach(onIncomesUpdated);
    // Au démontage du component, on unsubscribe
    return () => incomesSubject.detach(onIncomesUpdated);
  }, [])

  let value = 0;

  const getDataExpensesIncomes = () => {
    console.log(expenses);
    
    const totalExpenses = _.sumBy(expenses, function(item) {return item.value});
    setExpenseTotal(totalExpenses);

    const totalIncomes = _.sumBy(incomes, function(item) {return item.value});
    setIncomeTotal(totalIncomes);
  }

  useEffect(() => {
    setExpenses(expensesSubject.getLocalStorageInit());
    setIncomes(incomesSubject.getLocalStorageInit());
    getDataExpensesIncomes();

  }, [expenses, incomes])

  return (
    <S.ResumeWrapper>
      <BodyTitle text={"Total Dépenses :"}/>
      <Text text={`${expenseTotal} €`}/>
      <BodyTitle text={"Total Recettes :"}/>
      <Text text={`${incomeTotal} €`}/>
      <BodyTitle text={"Balance :"}/>
      <Text text={`${incomeTotal - expenseTotal} €`}/>

      <DashboardCharts datainfo={[{name: "dépenses", value: expenseTotal}, {name: "recettes", value: incomeTotal}]}/>
    </S.ResumeWrapper>
  )
}