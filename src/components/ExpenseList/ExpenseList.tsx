import React, { useState, useRef, useEffect } from 'react'
import * as S from "./expense_list.styles"
import { Input } from '../common/Input/Input.styles';

type expenseObject = {
  description: string,
  value: number,
  category: string,
  date: string
}

export function ExpenseList() {

  const [expenses, setExpenses] = useState<Array<Object>>([]);
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
      description: description_input.current!.value,
      value: parseInt(value_input.current!.value),
      category: category_input.current!.value,
      date: date_input.current!.value
    }
    
    setExpenses([...expenses, expense_content])
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
        
      </S.ExpenseListWrapper>
    </S.ExpenseWrapper>
  )
}