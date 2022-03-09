import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px black;
  width: 50vw;
  height: 80vh;
  background-color: white;
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