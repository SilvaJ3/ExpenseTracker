import styled from "styled-components";

export const ExpenseWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const AddExpenseWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const AddExpenseBtn = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  background-color: black;
  font-weight: bold;
  font-size: 20px;
`

export const ExpenseListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 0;
  padding: 0 5%;
`