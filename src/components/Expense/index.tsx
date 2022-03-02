import React from 'react'
import * as S from "./expense.styles"

type ExpenseProps = {
  description: string,
}

export default function Expense({description}: ExpenseProps) {
  return (
    <S.expenseItem>
      <p>{description}</p>
    </S.expenseItem>
  )
}