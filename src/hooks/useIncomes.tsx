import React, { useState, useEffect } from 'react'

interface itemObject {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
};

export default function useIncomes() {

  const [incomes, setIncomes] = useState<Array<itemObject>>([]);

  const getLocalStorage = () => {
    if (localStorage.getItem("incomes")) {
      const localStore = localStorage.getItem("incomes");
      const parseStore = JSON.parse(localStore!);
      if (parseStore[0]) {
        setIncomes(parseStore);
      }
    }
  }
  
  useEffect(() => {
    getLocalStorage();
  }, [localStorage.getItem("incomes")?.length])

  const updateLocalStorage = () => {
    localStorage.setItem("incomes", JSON.stringify(incomes));
  }
  useEffect(() => {
    updateLocalStorage();
  }, [incomes])

  return {
    incomes, setIncomes
  }
}
