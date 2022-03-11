interface itemObject {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
};

// On définit le type qui pourra être passé en commentaire à notre class
export type ExpensesObserver = (expense: itemObject) => void

class ExpenseSubject {

  // Notre observers sera donc un array comprenant des objets de type ExpensesObservers
  private observers: ExpensesObserver[] = [];

  // La function attach lie les observers à notre méthode (subscribe)
  public attach(observer: ExpensesObserver) {
    this.observers.push(observer)
  }

  // La function detach délie les observers (unsubscribe)
  public detach(observer: ExpensesObserver) {
    this.observers = this.observers.filter(item => item !== observer)
  }

  // La function de mise à jour de notre donnée expenses qui enclenche également la notification
  public updateExpenses(expense: itemObject) {
    let localStore = this.getLocalStorage();
    if (!localStore.some((item: itemObject) => item.id === expense.id)) {
      
      localStore.push(expense);
      const expenseStringify = JSON.stringify(localStore)
      localStorage.setItem("expenses", expenseStringify)
      this.notify(expense);
      
    }
  }

  public editExpenses(expense: itemObject) {
    let localStore = this.getLocalStorage();
    let newData = localStore.filter((item: itemObject) => item.id !== expense.id);
    newData.push(expense);
    const expenseStringify = JSON.stringify(newData);
    localStorage.setItem("expenses", expenseStringify);
  }

  public deleteExpenses(expense: itemObject) {
    let localStore = this.getLocalStorage();
    let newData = localStore.filter((item: itemObject) => item.id !== expense.id);
    const expenseStringify = JSON.stringify(newData);
    localStorage.setItem("expenses", expenseStringify);
  }

  // La récupération de notre data depuis le localStorage
  private getLocalStorage() {
    const localStore = localStorage.getItem("expenses");
    const parsedStore = JSON.parse(localStore!);
    return parsedStore
  }

  public getLocalStorageInit() {
    return this.getLocalStorage();
  }

  // Function de notification 
  private notify(expense: itemObject) {
    
    this.observers.forEach(observer => {
      observer(expense)
    });
  }

}

const expensesSubject = new ExpenseSubject();

export default expensesSubject;