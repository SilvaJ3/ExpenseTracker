import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px black;
  width: 35vw;
  height: 80vh;
  background-color: #E6E6E6;
  box-shadow: 10px 10px 0px 0px gray;
  @media (max-width: 1024px) {
    width: 80vw
  }
`

export const ToggleListBtn = styled.button`
  padding: 5px;
  margin: 20px 0;
  :hover {
    background-color: rgb(242, 236, 225);
  }
`