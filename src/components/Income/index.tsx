import React from "react";
import * as S from "./income.styles";
import Text from "../common/Text/Text";

type IncomeProps = {
  description: string;
  value: number;
  category: string;
  date: string;
  id: string;
  onDeleteIncome: (arg: string) => void;
  onEditItemIncome: (arg: string) => void

};

export default function Income({
  description,
  value,
  category,
  date,
  id,
  onDeleteIncome,
  onEditItemIncome
}: IncomeProps) {
  return (
    <S.incomeItem>
      <S.item_content>
        <Text text={`Dépense du ${date} d'une valeur de ${value} €`} />
        <Text text={`Description : ${description}`} />
        <Text text={`Catégorie : ${category}`} />
      </S.item_content>
      <S.item_action>
        <button onClick={() => onDeleteIncome(id)}>Supprimer</button>
        <button onClick={() => onEditItemIncome(id)}>Modifier</button>
      </S.item_action>
    </S.incomeItem>
  );
}
