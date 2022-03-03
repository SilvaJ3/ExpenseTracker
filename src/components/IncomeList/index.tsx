import React, { useState } from 'react'
import * as S from "./incomelist.styles"
import Income from "../Income/index"
import IncomesForm from "../IncomesForm/index"
import { v4 as uuidv4 } from "uuid"

type incomeObject = {
  id: string,
  description: string,
  value: number,
  category: string,
  date: string
}

export default function IncomeList () {

  const [incomes, setIncomes] = useState<Array<incomeObject>>([]);
  const [displayForm, setDisplayForm] = useState<boolean>(true);

  const handleSubmitForm = (item: incomeObject) => {

    console.log(item);

    const income_content:incomeObject = {
      id: uuidv4(),
      description: item.description,
      value: item.value,
      category: item.category,
      date: item.date
    }
    
    setIncomes([...incomes, income_content]);
  }

  const onDeleteItem = (id: string): void => {
    const filteredIncomes = incomes.filter(item => item.id != id);
    setIncomes(filteredIncomes);
  }
  
  return (
    <S.IncomeWrapper>
      <S.AddIncomeWrapper>
        <S.AddIncomeBtn onClick={() => setDisplayForm(!displayForm)}>Nouvelle recette</S.AddIncomeBtn>
        {
        displayForm && <IncomesForm handleSubmitForm={handleSubmitForm}/>
        }
      </S.AddIncomeWrapper>
      <S.IncomeListWrapper>
        {
          incomes && incomes.map((item: incomeObject, index: number) => {
            return (
              <Income 
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
      </S.IncomeListWrapper>
    </S.IncomeWrapper>
  )
}