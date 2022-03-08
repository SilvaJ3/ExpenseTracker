import React, { useState, useEffect } from 'react'
import * as S from "./DashboardList.styles"
import { ExpenseList } from '../ExpenseList'
import IncomeList from '../IncomeList'
import Modal from '../Modal/Modal';
import EditForm from "../EditForm";
import { v4 as uuidv4 } from "uuid";
import CloseBtn from '../common/CloseBtn/CloseBtn';

interface itemObject {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
};

export function DashboardList() {

  const [expenses, setExpenses] = useState<Array<itemObject>>([]);
  const [incomes, setIncomes] = useState<Array<itemObject>>([]);
  const [displayForm, setDisplayForm] = useState<boolean>(false);
  const [currentItemEdition, setCurrentItemEdition] = useState<itemObject>();

  const [toggleList, setToggleList] = useState<boolean>(true);
  const [displayModal, setDisplayModal] = useState<boolean>(false);

  /* -------------------------------------------------------------------------- */
  /*                  useEffect pour récupérer le localStorage                  */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    
    if (localStorage.getItem("expenses")) {
      const localStore = localStorage.getItem("expenses");
      const parseStore = JSON.parse(localStore!);
      if (parseStore[0]) {
        setExpenses(parseStore);
      }
    }
    if (localStorage.getItem("incomes")) {
      const localStore = localStorage.getItem("incomes");
      const parseStore = JSON.parse(localStore!);
      if (parseStore[0]) {
        setIncomes(parseStore)
      }
    }
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                    useEffect pour update le localStorage                   */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("incomes", JSON.stringify(incomes))
  }, [expenses, incomes]);

  const handleSubmitFormExpense = (item: itemObject) => {
    const expense_content: itemObject = {
      id: uuidv4(),
      description: item.description,
      value: item.value,
      category: item.category,
      date: item.date,
    };

    setExpenses([...expenses, expense_content]);
  };

  const handleSubmitFormIncome = (item: itemObject) => {
    const income_content:itemObject = {
      id: uuidv4(),
      description: item.description,
      value: item.value,
      category: item.category,
      date: item.date
    }
    
    setIncomes([...incomes, income_content]);
  }

  const onDeleteItem = (id: string): void => {
    const filteredExpenses = expenses.filter((item) => item.id != id);
    setExpenses(filteredExpenses);
  };

  const onEditItem = (id: string): void => {
    let item = expenses.find((item) => item.id === id);
    setCurrentItemEdition(item);
    setDisplayModal(true);
  };

  const onDeleteIncome = (id: string): void => {
    const filteredIncomes = incomes.filter((item) => item.id != id);
    setIncomes(filteredIncomes);
  };

  const handleEditForm = (editedItem: itemObject): void => {
    const filteredExpenses = expenses.filter((item) => item.id !== editedItem.id);
    filteredExpenses.push(editedItem);
    setExpenses(filteredExpenses);
    setDisplayModal(false);
  };

  function displayList() {
    if (toggleList) {
      return (
        <>
          <S.ToggleListBtn onClick={(): void => setToggleList(!toggleList)}>Afficher les Recettes</S.ToggleListBtn>
          <ExpenseList expenses={expenses} handleSubmitFormExpense={handleSubmitFormExpense} onDeleteItem={onDeleteItem} onEditItem={onEditItem}/>
          {
            displayModal && 
              <Modal>
                <CloseBtn />
                <EditForm item={currentItemEdition} handleEditForm={handleEditForm}/>
              </Modal>
          }
        </>
      )
    } else {
      return (
        <>
          <S.ToggleListBtn onClick={(): void => setToggleList(!toggleList)}>Afficher les Dépenses</S.ToggleListBtn>
          <IncomeList incomes={incomes} handleSubmitFormIncome={handleSubmitFormIncome} onDeleteIncome={onDeleteIncome}/>
          {
            displayModal && 
            <Modal>
                {/* <EditForm /> */}
            </Modal>
          }
        </>
      )
    }
  }

  return (
    <S.ListWrapper>
      {
        displayList()
      }
    </S.ListWrapper>
  )
}