import styled from "styled-components";

export const ExpenseWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`

export const AddExpenseWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const AddExpenseBtn = styled.button`
  padding: 5px 10px;
  border-radius: 15px;
  color: white;
  background-color: black;
  font-weight: bold;
  font-size: 20px;
`

export const AddExpenseForm = styled.form`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 200px);
  gap: 4px;
`

export const ExpenseListWrapper = styled.ul`
  display: grid;
  grid-template: repeat(2, 200px);
`