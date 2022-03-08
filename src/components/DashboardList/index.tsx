import React, { useState, useEffect } from 'react'
import * as S from "./DashboardList.styles"
import { ExpenseList } from '../ExpenseList'
import IncomeList from '../IncomeList'
import Modal from '../Modal/Modal';
import EditForm from "../EditForm";
import { v4 as uuidv4 } from "uuid";
import CloseBtn from '../common/CloseBtn/CloseBtn';
import {useModal} from "../../hooks/useModal"
import useExpenses from '../../hooks/useExpenses';
import useIncomes from "../../hooks/useIncomes";

interface itemObject {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
};

export function DashboardList() {

  let {expenses, setLocalStorage, getLocalStorage} = useExpenses();
  const [expensesData, setExpensesData] = useState<Array<itemObject>>([]);
  const {incomes, setIncomes} = useIncomes();
  const [displayForm, setDisplayForm] = useState<boolean>(false);
  const [currentItemEdition, setCurrentItemEdition] = useState<itemObject>();

  const [toggleList, setToggleList] = useState<boolean>(true);
  const {displayModal, setDisplayModal} = useModal();

  useEffect(() => {
    console.log(getLocalStorage());
    
    // setExpensesData(getLocalStorage());
  }, [])

  const handleSubmitFormExpense = (item: itemObject) => {
    const expense_content: itemObject = {
      id: uuidv4(),
      description: item.description,
      value: item.value,
      category: item.category,
      date: item.date,
    };
    setLocalStorage(expense_content);
    // setExpensesData(getLocalStorage());
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
    // setExpenses(filteredExpenses);
    expenses = filteredExpenses;
  };

  const onEditItem = (id: string): void => {
    let item = expenses.find((item) => item.id === id);
    setCurrentItemEdition(item);
    setDisplayModal(true);
  };

  const onEditItemIncome = (id: string): void => {
    let item = incomes.find((item) => item.id === id);
    setCurrentItemEdition(item);
    setDisplayModal(true);
  };

  const onDeleteIncome = (id: string): void => {
    const filteredIncomes = incomes.filter((item) => item.id != id);
    setIncomes(filteredIncomes);
  };

  const handleEditForm = (editedItem: itemObject): void => {
    const filteredExpenses = expenses.filter((item: itemObject) => item.id !== editedItem.id);
    filteredExpenses.push(editedItem);
    // setExpenses(filteredExpenses);
    setDisplayModal(false);
  };

  const handleEditFormIncome = (editedItem: itemObject): void => {
    const filteredIncomes = incomes.filter((item: itemObject) => item.id !== editedItem.id);
    filteredIncomes.push(editedItem);
    setIncomes(filteredIncomes);
    setDisplayModal(false);
  }

  function displayList() {
    if (toggleList) {
      return (
        <>
          <S.ToggleListBtn onClick={(): void => setToggleList(!toggleList)}>Afficher les Recettes</S.ToggleListBtn>
          <ExpenseList expenses={expensesData} handleSubmitFormExpense={handleSubmitFormExpense} onDeleteItem={onDeleteItem} onEditItem={onEditItem}/>
          {
            displayModal && 
              <Modal>
                <CloseBtn/>
                <EditForm item={currentItemEdition} handleEditForm={handleEditForm}/>
              </Modal>
          }
        </>
      )
    } else {
      return (
        <>
          <S.ToggleListBtn onClick={(): void => setToggleList(!toggleList)}>Afficher les Dépenses</S.ToggleListBtn>
          <IncomeList incomes={incomes} handleSubmitFormIncome={handleSubmitFormIncome} onDeleteIncome={onDeleteIncome} onEditItemIncome={onEditItemIncome}/>
          {
            displayModal && 
            <Modal>
                <CloseBtn/>
                <EditForm item={currentItemEdition} handleEditForm={handleEditFormIncome}/>
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