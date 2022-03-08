import React, { useState, useEffect } from 'react'
import * as S from "./dashboardresume.styles"
import BodyTitle from '../common/BodyTitle/bodyTitle'
import Text from "../common/Text/Text"
import DashboardCharts from "../DashboardCharts/index"
import _ from "lodash"
import useExpenses from '../../hooks/useExpenses'
import useIncomes from '../../hooks/useIncomes'

type itemObject = {
  id: string,
  description: string,
  value: number,
  category: string,
  date: string
}

export default function DashboardResume () {

  const [expenseTotal, setExpenseTotal] = useState<number>(0);
  const {expenses} = useExpenses();
  const {incomes, setIncomes} = useIncomes();
  const [incomeTotal, setIncomeTotal] = useState<number>(0);

  let value = 0;

  const getDataExpensesIncomes = () => {
    const totalExpenses = _.sumBy(expenses, function(item) {return item.value});
    setExpenseTotal(totalExpenses);

    const totalIncomes = _.sumBy(incomes, function(item) {return item.value});
    setIncomeTotal(totalIncomes);
  }

  useEffect(() => {

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