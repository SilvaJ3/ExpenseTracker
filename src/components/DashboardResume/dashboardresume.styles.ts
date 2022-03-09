import styled from "styled-components";

export const ResumeWrapper = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  border: solid 1px black;
  width: 30vw;
  height: 80vh;
  background-color: white;
  box-shadow: 10px 10px 0px 0px gray;
  @media (max-width: 1024px) {
    width: 60vw
  }
`