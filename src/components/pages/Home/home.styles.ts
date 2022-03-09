import styled from "styled-components"

export const Dashboard_Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 5%;
  height: 100%;
  background-color: rgb(204, 227, 218);
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`