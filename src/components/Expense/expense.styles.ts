import styled from "styled-components";

export const expenseItem = styled.li`
  list-style-type: none;
  display: flex;
  border: solid 1px black;
  border-radius: 15px;
  padding: 2%;
`

export const item_content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
`

export const item_action = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;
`