import React, { useState } from "react";
import * as S from "./incomelist.styles";
import Income from "../Income/index";
import IncomesForm from "../IncomesForm/index";

type incomeObject = {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
};

export default function IncomeList(props: any) {
  const [displayForm, setDisplayForm] = useState<boolean>(false);

  return (
    <S.IncomeWrapper>
      <S.AddIncomeWrapper>
        <S.AddIncomeBtn onClick={() => setDisplayForm(!displayForm)}>
          Nouvelle recette
        </S.AddIncomeBtn>
        {displayForm && (
          <IncomesForm handleSubmitFormIncome={props.handleSubmitFormIncome} />
        )}
      </S.AddIncomeWrapper>
      <S.IncomeListWrapper>
        {props.incomes &&
          props.incomes.map((item: incomeObject, index: number) => {
            return (
              <Income
                description={item.description}
                value={item.value}
                category={item.category}
                date={item.date}
                key={index}
                id={item.id}
                onDeleteIncome={props.onDeleteIncome}
                onEditItemIncome={props.onEditItemIncome}
              />
            );
          })}
      </S.IncomeListWrapper>
    </S.IncomeWrapper>
  );
}
