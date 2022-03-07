import React, { useState, useEffect } from 'react'
import * as S from "./dashboardresume.styles"
import BodyTitle from '../common/BodyTitle/bodyTitle'
import Text from "../common/Text/Text"
import DashboardCharts from "../DashboardCharts/index"

type itemObject = {
  id: string,
  description: string,
  value: number,
  category: string,
  date: string
}

export default function DashboardResume () {

  const [expenseTotal, setExpenseTotal] = useState<number>(0);
  const [incomeTotal, setIncomeTotal] = useState<number>(0);

  let value = 0;

  useEffect(() => {
    if (localStorage.getItem("incomes")) {
      const localStore = localStorage.getItem("incomes");
      const parseStore = JSON.parse(localStore!);
      
      if (parseStore[0]) {
        parseStore.forEach( (element: itemObject) => {
          value = value + element.value;
        });
        
        setIncomeTotal(value);
        value = 0;
      }
    }

    if (localStorage.getItem("expenses")) {
      const localStore = localStorage.getItem("expenses");
      const parseStore = JSON.parse(localStore!);
      
      if (parseStore[0]) {
        parseStore.forEach( (element: itemObject) => {
          value = value + element.value;
        });
        
        setExpenseTotal(value);
        value = 0;
      }
    }
  }, [])

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