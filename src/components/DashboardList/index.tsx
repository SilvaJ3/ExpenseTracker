import React, { useState, useEffect } from 'react'
import * as S from "./DashboardList.styles"
import { ExpenseList } from '../ExpenseList'
import IncomeList from '../IncomeList'
import Modal from '../Modal/Modal';
import EditForm from "../EditForm";
import { v4 as uuidv4 } from "uuid";
import CloseBtn from '../common/CloseBtn/CloseBtn';
import {useModal} from "../../hooks/useModal"
import expensesSubject, { ExpensesObserver } from "../../hooks/useExpensesObserver"
import incomesSubject, { IncomesObserver } from "../../hooks/useIncomesObserver"

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
  const {displayModal, setDisplayModal} = useModal();

  const onExpensesUpdated: ExpensesObserver = (expense: itemObject) => {
    
    setExpenses([...expenses, expense]);
    console.log(expenses);
    
    expensesSubject.updateExpenses(expense);
  }
  

  const onExpensesEdited: ExpensesObserver = (expense: itemObject) => {
    let expensesToFilter = expenses;
    let filteredExpenses = expensesToFilter.filter((item: itemObject) => item.id !== expense.id);
    filteredExpenses.push(expense);
    
    setExpenses(filteredExpenses);
    expensesSubject.editExpenses(expense);
  }

  const onExpensesDeleted: ExpensesObserver = (expense: itemObject) => {
    let expensesToFilter = expenses;
    let filteredExpenses = expensesToFilter.filter((item: itemObject) => item.id !== expense.id);
    setExpenses(filteredExpenses);
    expensesSubject.deleteExpenses(expense);
  }

  const onIncomesUpdated: IncomesObserver = (income: itemObject) => {
    setIncomes([...incomes, income]);
    incomesSubject.updateIncomes(income);
  }

  const onIncomesDeleted: IncomesObserver = (income: itemObject) => {
    let incomesToFilter = incomes;
    let filteredIncomes = incomesToFilter.filter((item: itemObject) => item.id !== income.id);
    setIncomes(filteredIncomes);
    incomesSubject.deleteIncomes(income);
  }


  const onIncomesEdited: IncomesObserver = (income: itemObject) => {
    let incomesToFilter = incomes;
    let filteredIncomes = incomesToFilter.filter((item: itemObject) => item.id !== income.id);
    filteredIncomes.push(income);
    
    setIncomes(filteredIncomes);
    expensesSubject.editExpenses(income);
  }

  useEffect(() => {
    expensesSubject.attach(onExpensesUpdated);

    // On initialise le state en récupérant la data depuis le localstorage
    if (expenses.length !== expensesSubject.getLocalStorageInit().length) {
      
      setExpenses(expensesSubject.getLocalStorageInit());
    }
    // setIncomes(incomesSubject.getLocalStorageInit());
    console.log("list : " , expenses);

    return () => expensesSubject.detach(onExpensesUpdated)
  }, [expenses])

  const handleSubmitFormExpense = (item: itemObject) => {
    const expense_content: itemObject = {
      id: uuidv4(),
      description: item.description,
      value: item.value,
      category: item.category,
      date: item.date,
    };
    onExpensesUpdated(expense_content);
  };

  const handleSubmitFormIncome = (item: itemObject) => {
    const income_content:itemObject = {
      id: uuidv4(),
      description: item.description,
      value: item.value,
      category: item.category,
      date: item.date
    }
    
    onIncomesUpdated(income_content);
  }

  const onDeleteItem = (id: string): void => {
    const expenseToDelete = expenses.filter((item) => item.id === id);
    onExpensesDeleted(expenseToDelete[0])
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
    onExpensesEdited(editedItem)
    setDisplayModal(false);
  };

  const handleEditFormIncome = (editedItem: itemObject): void => {
    onIncomesEdited(editedItem);
    setDisplayModal(false);
  }

  function displayList() {
    if (toggleList) {
      return (
        <>
          <S.ToggleListBtn onClick={(): void => setToggleList(!toggleList)}>Afficher les Recettes</S.ToggleListBtn>
          <ExpenseList expenses={expenses} handleSubmitFormExpense={handleSubmitFormExpense} onDeleteItem={onDeleteItem} onEditItem={onEditItem}/>
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