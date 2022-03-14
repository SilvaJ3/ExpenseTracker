import styled from "styled-components";

export const AddExpenseForm = styled.form`
  padding: 20px;
  margin-top: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 10px;
  box-shadow: 8.690899848937988px 8.690899848937988px 10.863624572753906px 0px #7069694D;
`

export const Form_block = styled.div`
  display: flex;
  gap: 10px;
  select {
    width: 153px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    height: 32px;
  }
`

export const Form_confirm_block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const confirm_Btn = styled.button`
  background-color: #1990B6;
  color: white;
  border-radius: 15px;
  padding: 8px 30px;
  font-size: 12px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`