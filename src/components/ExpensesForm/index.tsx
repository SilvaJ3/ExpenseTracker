import React, { useEffect, useRef, useState } from "react";
import * as S from "./expensesform.styles";
import { Input } from "../common/Input/Input.styles";
import { v4 as uuidv4 } from "uuid";
import getJsonData, { JsonDataType } from "../../hooks/getJsonData";

type Props = {
  handleSubmitFormExpense: (item: expenseObject) => void;
};

type expenseObject = {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
};

export default function ExpensesForm({ handleSubmitFormExpense }: Props) {
  const expense_form = useRef<HTMLFormElement>(null);
  const description_input = useRef<HTMLInputElement>(null);
  const value_input = useRef<HTMLInputElement>(null);
  const category_input = useRef<HTMLSelectElement>(null);
  const date_input = useRef<HTMLInputElement>(null);

  const [category, setCategory] = useState<Array<string>>([]);

  useEffect(() => {
    const result = getJsonData(JsonDataType.expenses);
    setCategory(result as string[]);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      description_input.current!.value !== "" &&
      value_input.current!.value !== "" &&
      category_input.current!.value !== "" &&
      date_input.current!.value !== ""
    ) {
      const item = {
        id: uuidv4(),
        description: description_input.current!.value,
        value: parseInt(value_input.current!.value),
        category: category_input.current!.value,
        date: date_input.current!.value,
      };

      handleSubmitFormExpense(item);

      description_input.current!.value = "";
      value_input.current!.value = "";
      category_input.current!.value = "";
      date_input.current!.value = "";
    }
  };

  return (
    <S.AddExpenseForm
      ref={expense_form}
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
    >
      <S.Form_block>
        <Input
          name="description"
          type="text"
          placeholder="Description de votre dépense..."
          ref={description_input}
          maxLength={30}
        />
        <Input name="value" type="number" placeholder="42" ref={value_input} />
      </S.Form_block>
      <S.Form_block>
        <select ref={category_input} name="category">
          {category &&
            category.map((item: string, index: number) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
        </select>
        <Input name="date" type="date" ref={date_input} />
      </S.Form_block>
      <S.Form_confirm_block>
        <S.confirm_Btn type="submit">Valider</S.confirm_Btn>
      </S.Form_confirm_block>
    </S.AddExpenseForm>
  );
}
