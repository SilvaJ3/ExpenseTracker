import React, { useState, useEffect } from 'react'
import * as S from "./expense_list.styles"
import ExpensesForm from "../ExpensesForm"
import Expense from "../Expense";
import { v4 as uuidv4 } from 'uuid'
import { item_action } from '../Expense/expense.styles';

type expenseObject = {
  id: string,
  description: string,
  value: number,
  category: string,
  date: string
}

export function ExpenseList() {

  const [expenses, setExpenses] = useState<Array<expenseObject>>([]);

  const [displayForm, setDisplayForm] = useState<boolean>(true);

  const handleSubmitForm = (item: expenseObject) => {

    console.log(item);

    const expense_content:expenseObject = {
      id: uuidv4(),
      description: item.description,
      value: item.value,
      category: item.category,
      date: item.date
    }
    
    setExpenses([...expenses, expense_content]);
  }

  const onDeleteItem = (id: string): void => {
    const filteredExpenses = expenses.filter(item => item.id != id);
    setExpenses(filteredExpenses);
  }

  return (
    <S.ExpenseWrapper>
      <S.AddExpenseWrapper>
        <S.AddExpenseBtn onClick={() => setDisplayForm(!displayForm)}>Nouvelle dépense</S.AddExpenseBtn>
        {
        displayForm && <ExpensesForm handleSubmitForm={handleSubmitForm}/>
        }
      </S.AddExpenseWrapper>
      <S.ExpenseListWrapper>
        {
          expenses && expenses.map((item: expenseObject, index: number) => {
            return (
              <Expense 
              description={item.description} 
              value={item.value}
              category={item.category}
              date={item.date}
              key={index}
              id={item.id}
              onDeleteItem={onDeleteItem}
              />
            )
          })
        }
      </S.ExpenseListWrapper>
    </S.ExpenseWrapper>
  )
}