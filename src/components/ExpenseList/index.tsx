import React, { useState, useRef, useEffect } from 'react'
import * as S from "./expense_list.styles"
import { Input } from '../common/Input/Input.styles';
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
  const [categories, setCategories] = useState<Array<string>>([
    "Autres",
    "Alimentation",
    "Assurance",
    "Banque",
    "Energie",
    "Loisirs",
    "Loyer",
    "Santé",
    "Sports"
  ]);

  const [displayForm, setDisplayForm] = useState<boolean>(true);

  const expense_form = useRef<HTMLFormElement>(null);
  const description_input = useRef<HTMLInputElement>(null);
  const value_input = useRef<HTMLInputElement>(null);
  const category_input = useRef<HTMLSelectElement>(null);
  const date_input = useRef<HTMLInputElement>(null);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const expense_content:expenseObject = {
      id: uuidv4(),
      description: description_input.current!.value,
      value: parseInt(value_input.current!.value),
      category: category_input.current!.value,
      date: date_input.current!.value
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
        displayForm && <S.AddExpenseForm ref={expense_form} onSubmit={(e) => handleSubmitForm(e)}>
          <Input name="description" type="text" placeholder="Description de votre dépense..." ref={description_input}/>
          <Input name="value" type="number" placeholder="42" ref={value_input}/>
          <select ref={category_input} name="category">
            {
              categories && categories.map((item: string, index: number) => {
                return (
                  <option value={item} key={index}>{item}</option>
                )
              })
            }
          </select>
          <Input name="date" type="date" ref={date_input}/>
          <button type="submit">Valider</button>
        </S.AddExpenseForm>
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