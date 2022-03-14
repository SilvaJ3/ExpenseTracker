import styled from "styled-components";

export const expenseItem = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 2%;
  box-shadow: 8.690899848937988px 8.690899848937988px 10.863624572753906px 0px #7069694D;
`

export const item_content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  padding: 0 10px;

`

export const item_content_right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 10px;
`

export const item_action = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  span {
    font-size: 25px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
  }
  span svg {
    pointer-events: none;
  }
`