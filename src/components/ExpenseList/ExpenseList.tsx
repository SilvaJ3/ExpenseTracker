import React, { useState } from 'react'
import "./ExpenseList.css"

export function ExpenseList() {

  const [expenses, setExpenses] = useState([])

  return (
    <div className="expenses_container">
      <div className="add_expense_container">

      </div>
    </div>
  )
}