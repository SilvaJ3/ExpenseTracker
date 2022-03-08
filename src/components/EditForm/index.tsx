import React, { useEffect, useRef, useState } from "react";
import { Input } from "../common/Input/Input.styles";
import { item_action } from "../Income/income.styles";
import * as S from "./editform.styles";

export interface ItemObject {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
}

interface EditFormProps {
  handleEditForm: (editedItem: ItemObject) => void;
  item: ItemObject;
}

export default function EditForm(props: any) {
  let form = useRef<HTMLFormElement>(null);
  let description_input = useRef<HTMLInputElement>(null);
  let value_input = useRef<HTMLInputElement>(null);
  let category_input = useRef<HTMLSelectElement>(null);
  let date_input = useRef<HTMLInputElement>(null);

  const [categories, setCategories] = useState<Array<string>>([
    "Autres",
    "Alimentation",
    "Assurance",
    "Banque",
    "Energie",
    "Loisirs",
    "Loyer",
    "Santé",
    "Sports",
  ]);

  useEffect(() => {
    description_input.current!.value = props.item.description;
    value_input.current!.value = props.item.value;
    date_input.current!.value = props.item.date;
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      description_input.current!.value != "" &&
      value_input.current!.value != "" &&
      category_input.current!.value != "" &&
      date_input.current!.value != ""
    ) {
      const editedItem = {
        id: props.item.id,
        description: description_input.current!.value,
        value: parseInt(value_input.current!.value),
        category: category_input.current!.value,
        date: date_input.current!.value,
      };

      console.log(editedItem);

      props.handleEditForm(editedItem);
    }
  };

  return (
    <S.EditForm
      ref={form}
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
    >
      <Input name="description" type="text" ref={description_input} />
      <Input name="value" type="number" placeholder="42" ref={value_input} />
      <select ref={category_input} name="category">
        {categories &&
          categories.map((item: string, index: number) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
      </select>
      <Input name="date" type="date" ref={date_input} />
      <button type="submit">Valider</button>
    </S.EditForm>
  );
}
