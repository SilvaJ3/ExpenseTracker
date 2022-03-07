import React, { useEffect, useRef, useState } from 'react'
import * as S from "./expensesform.styles";
import { Input } from '../common/Input/Input.styles';
import { v4 as uuidv4 } from 'uuid'

type Props = {
  handleSubmitFormExpense: (item: expenseObject) => void
}

type expenseObject = {
  id: string,
  description: string,
  value: number,
  category: string,
  date: string
}

export default function ExpensesForm ({handleSubmitFormExpense}: Props) {

  const expense_form = useRef<HTMLFormElement>(null);
  const description_input = useRef<HTMLInputElement>(null);
  const value_input = useRef<HTMLInputElement>(null);
  const category_input = useRef<HTMLSelectElement>(null);
  const date_input = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    if (description_input.current!.value != "" && value_input.current!.value != "" && category_input.current!.value != "" && date_input.current!.value != "") {
      
      const item = {
        id: uuidv4(),
        description: description_input.current!.value,
        value: parseInt(value_input.current!.value),
        category: category_input.current!.value,
        date: date_input.current!.value
      }
  
      handleSubmitFormExpense(item)
  
      description_input.current!.value = "";
      value_input.current!.value = "";
      category_input.current!.value = "";
      date_input.current!.value = "";
    }

  }


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

  return (
    <S.AddExpenseForm ref={expense_form} onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
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
  )
}