import React from "react";
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
        <BodyTitle text={description}/>
        <Text text={date} color={`#9e9e9e`}/>
      </S.item_content>
      <S.item_content_right>
        <BodyTitle text={`${value} €`} />
        <S.item_action>
          <span onClick={() => onDeleteItem(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M11.5 4a1.5 1.5 0 0 0-3 0h3Zm-4 0a2.5 2.5 0 0 1 5 0H17a.5.5 0 0 1 0 1h-.554l-.484 4.196a5.484 5.484 0 0 0-.987-.176L15.438 5H4.561l1.282 11.115a1 1 0 0 0 .994.885H9.6c.183.358.404.693.657 1h-3.42a2 2 0 0 1-1.987-1.77L3.553 5H3a.5.5 0 0 1-.492-.41L2.5 4.5A.5.5 0 0 1 3 4h4.5ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.646-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 14.5l1.147-1.146Z"/></svg>
          </span>
          <span onClick={() => onEditItem(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" fillOpacity=".15" d="M761.1 288.3L687.8 215L325.1 577.6l-15.6 89l88.9-15.7z"/><path fill="currentColor" d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3l-362.7 362.6l-88.9 15.7l15.6-89z"/></svg>
          </span>
        </S.item_action>
      </S.item_content_right>
    </S.expenseItem>
  );
}
