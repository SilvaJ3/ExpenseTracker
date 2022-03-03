import React from 'react'
import * as S from "./DashboardList.styles"
import { ExpenseList } from '../ExpenseList'
import IncomeList from '../IncomeList'

export function DashboardList() {
  return (
    <S.ListWrapper>
      <ExpenseList />
      <IncomeList />
    </S.ListWrapper>
  )
}