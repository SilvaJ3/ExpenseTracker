import React, { useState, useEffect } from 'react'

interface itemObject {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
};

export default function useExpenses() {

  // let expenses: itemObject[] = [];
  const [expenses, setExpenses] = useState<Array<itemObject>>([]);

  const getLocalStorage = () => {
    if (localStorage.getItem("expenses")) {
      const localStore = localStorage.getItem("expenses");
      const parseStore = JSON.parse(localStore!);
      if (parseStore[0]) {
        setExpenses(parseStore)
        return expenses
      }
    }
  }

  const setLocalStorage = (item: itemObject) => {
    console.log(item);
    setExpenses([...expenses, item])
    console.log("expenses : " , expenses);
    
    localStorage.setItem("expenses", JSON.stringify(expenses));
    // return getLocalStorage();
  }

  return {
    expenses, setLocalStorage, getLocalStorage
  }
}
