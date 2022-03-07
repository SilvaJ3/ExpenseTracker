import styled from "styled-components";

export const IncomeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const AddIncomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const AddIncomeBtn = styled.button`
  padding: 5px 10px;
  border-radius: 15px;
  color: white;
  background-color: black;
  font-weight: bold;
  font-size: 20px;
`

export const IncomeListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  gap: 5px;
  padding: 0 5%;
`