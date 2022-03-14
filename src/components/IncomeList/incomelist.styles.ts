import styled from "styled-components";

export const IncomeWrapper = styled.div`
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

export const AddIncomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const AddIncomeBtn = styled.button`
  padding: 5px 10px;
  background-color: white;
  color: black;
  border: none;
  box-shadow: 8.690899848937988px 8.690899848937988px 10.863624572753906px 0px #7069694D;
  font-weight: bold;
  font-size: 20px;
`

export const IncomeListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 0;
  padding: 0 5%;
`