import React, { useState, useEffect } from "react";
import * as S from "./resume.styles";
import BodyTitle from "../../common/BodyTitle/bodyTitle";
import Table from "../../common/Table/Table";
import getJsonData, {JsonDataType} from "../../../hooks/getJsonData"

interface itemObject {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
}

export default function Resume() {
  const [expenses, setExpenses] = useState<Array<itemObject>>([]);
  const [incomes, setIncomes] = useState<Array<itemObject>>([]);

  const [categoryExpenses, setCategoryExpenses] = useState<Array<string>>([])
  const [categoryIncomes, setCategoryIncomes] = useState<Array<string>>([])

  useEffect(() => {
    let result = getJsonData(JsonDataType.expenses);
    setCategoryExpenses(result as string[]);
    result = getJsonData(JsonDataType.incomes);
    setCategoryIncomes(result as string[]);
  }, [])

  const getLocalStorage = (item: string) => {
    if (item == "expenses") {
      if (localStorage.getItem(item)) {
        const localStore = localStorage.getItem(item);
        const parseStore = JSON.parse(localStore!);
        if (parseStore[0]) {
          setExpenses(parseStore);
        }
      }
    } else {
      if (localStorage.getItem(item)) {
        const localStore = localStorage.getItem(item);
        const parseStore = JSON.parse(localStore!);
        if (parseStore[0]) {
          setIncomes(parseStore);
        }
      }
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                  useEffect pour récupérer le localStorage                  */
  /* -------------------------------------------------------------------------- */

  // useEffect(() => {
  //   getLocalStorage("expenses");
  //   getLocalStorage("incomes");
  // }, []);

  return (
    <S.ResumePageWrapper>
      <BodyTitle text={"Resume"} />
      <Table data={expenses} category={categoryExpenses} />
      <Table data={incomes} category={categoryIncomes} />
    </S.ResumePageWrapper>
  );
}
