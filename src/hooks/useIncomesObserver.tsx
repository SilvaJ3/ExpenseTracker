interface itemObject {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
};

// On définit le type qui pourra être passé en commentaire à notre class
export type IncomesObserver = (income: itemObject) => void

class IncomeSubject {

  // Notre observers sera donc un array comprenant des objets de type IncomesObservers
  private observers: IncomesObserver[] = [];

  // La function attach lie les observers à notre méthode (subscribe)
  public attach(observer: IncomesObserver) {
    this.observers.push(observer)
  }

  // La function detach délie les observers (unsubscribe)
  public detach(observer: IncomesObserver) {
    this.observers = this.observers.filter(item => item !== observer)
  }

  // La function de mise à jour de notre donnée incomes qui enclenche également la notification
  public updateIncomes(income: itemObject) {
    let localStore = this.getLocalStorage();
    localStore.push(income);
    const incomeStringify = JSON.stringify(localStore)
    localStorage.setItem("incomes", incomeStringify)
    this.notify(income);
  }

  // La récupération de notre data depuis le localStorage
  private getLocalStorage() {
    const localStore = localStorage.getItem("incomes");
    const parsedStore = JSON.parse(localStore!);
    return parsedStore
  }

  public getLocalStorageInit() {
    return this.getLocalStorage();
  }

  // Function de notification 
  private notify(expense: itemObject) {
    this.observers.forEach(observer => observer(expense));
  }

}

const incomesSubject = new IncomeSubject();

export default incomesSubject;