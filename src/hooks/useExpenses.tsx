

interface itemObject {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
};

export default function useExpenses() {

  let expenses: itemObject[] = [];

  const getLocalStorage = () => {
    if (localStorage.getItem("expenses")) {
      const localStore = localStorage.getItem("expenses");
      const parseStore = JSON.parse(localStore!);
      expenses = parseStore;
      console.log(expenses);
      return expenses
    }
  }

  const setLocalStorage = (item: itemObject) => {
    
    debugger; let newData = expenses.push(item);
    console.log("expenses : " , newData);
    
    localStorage.setItem("expenses", JSON.stringify(newData));
    return getLocalStorage();
  }

  return {
    expenses, setLocalStorage, getLocalStorage
  }
}
