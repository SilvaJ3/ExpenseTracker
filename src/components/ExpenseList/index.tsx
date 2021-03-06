import React, { useState, useEffect } from "react";
import * as S from "./expense_list.styles";
import ExpensesForm from "../ExpensesForm";
import Expense from "../Expense";
import { useForm } from "../../hooks/useForm"

type expenseObject = {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
};

export function ExpenseList(props: any) {

  const {displayForm, setDisplayForm} = useForm();
  const [expensesData, setExpensesData] = useState<Array<expenseObject>>([]);

  useEffect(() => {
    setExpensesData(props.expenses)
  }, [props.expenses])

  return (
    <S.ExpenseWrapper>
      <S.AddExpenseWrapper>
        <S.AddExpenseBtn onClick={() => setDisplayForm(!displayForm)}>
          Nouvelle dépense
        </S.AddExpenseBtn>
        {displayForm && <ExpensesForm handleSubmitFormExpense={props.handleSubmitFormExpense} />}
      </S.AddExpenseWrapper>
      <S.ExpenseListWrapper>
        {expensesData &&
          expensesData.map((item: expenseObject, index: number) => {
            return (
              <Expense
                description={item.description}
                value={item.value}
                category={item.category}
                date={item.date}
                key={index}
                id={item.id}
                onDeleteItem={props.onDeleteItem}
                onEditItem={props.onEditItem}
              />
            );
          })}
      </S.ExpenseListWrapper>
    </S.ExpenseWrapper>
  );
}
