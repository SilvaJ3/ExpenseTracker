import React, { BaseSyntheticEvent } from "react";
import * as S from "./expense.styles";
import BodyTitle from "../common/BodyTitle/bodyTitle";
import Text from "../common/Text/Text";

type ExpenseProps = {
  description: string;
  value: number;
  category: string;
  date: string;
  id: string;
  onDeleteItem: (arg: string) => void;
  onEditItem: (arg: string) => void;
};

export default function Expense({
  description,
  value,
  category,
  date,
  id,
  onDeleteItem,
  onEditItem,
}: ExpenseProps) {
  return (
    <S.expenseItem>
      <S.item_content>
        <Text text={`Dépense du ${date} d'une valeur de ${value} €`} />
        <Text text={`Description : ${description}`} />
        <Text text={`Catégorie : ${category}`} />
      </S.item_content>
      <S.item_action>
        <button onClick={() => onDeleteItem(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M12 12h2v12h-2zm6 0h2v12h-2z"/><path fill="currentColor" d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z"/></svg>
        </button>
        <button onClick={() => onEditItem(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"/><path fill="currentColor" d="m469.952 554.24l52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"/></svg>
        </button>
      </S.item_action>
    </S.expenseItem>
  );
}
