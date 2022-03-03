import React, { BaseSyntheticEvent } from 'react'
import * as S from "./expense.styles"
import BodyTitle from '../common/BodyTitle/bodyTitle';
import Text from "../common/Text/Text";
import Button from "../common/ButtonAction/ButtonAction"


type ExpenseProps = {
  description: string,
  value: number,
  category: string,
  date: string,
  id: string,
  onDeleteItem: (arg: string) => void
}

export default function Expense({description, value, category, date, id, onDeleteItem}: ExpenseProps) {
  return (
    <S.expenseItem>
      <S.item_content>
        <Text text={`Dépense du ${date} d'une valeur de ${value} €`}/>
        <Text text={`Description : ${description}`} />
        <Text text={`Catégorie : ${category}`}/>
      </S.item_content>
      <S.item_action>
        {/* <Button text={`Edition`}/> */}
        <button onClick={() => onDeleteItem(id)}>Supprimer</button>
      </S.item_action>
    </S.expenseItem>
  )
}