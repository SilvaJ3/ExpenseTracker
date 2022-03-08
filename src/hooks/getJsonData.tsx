import React from 'react'
import expenses from "../data/expenses.json"
import incomes from "../data/incomes.json"
import colors from "../data/colors.json"

export enum JsonDataType {
  expenses = "expenses",
  incomes = "incomes",
  colors = "colors",
}

export default function getJsonData(item: JsonDataType) {

  switch (item) {
    case JsonDataType.expenses:
      return expenses.expenses
    case JsonDataType.incomes:
      return incomes.incomes
    case JsonDataType.colors:
      return colors.COLORS
    default:
      break;
  }

}