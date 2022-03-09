import styled from "styled-components";

export const ExpenseModalEdition = styled.div`
  position: absolute;
  top: 2%;
  left: calc(40% - 15%);
  width: 50%;
  background-color: white;
  height: 170px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 1024px) {
    top: calc(95%);
  }
`

export const CloseModalBtn = styled.div`
  position: absolute;
`