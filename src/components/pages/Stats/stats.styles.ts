import styled from "styled-components"

export const Stats_Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  /* padding: 50px 0 0 100px; */
`

export const ToggleBtnWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: start;
  .active {
    border: solid 5px black;
    background-color: #D7D7D7;
  }
`

type BtnProps = {
  borderRadius: string;
}

export const ToggleBtn = styled.button<BtnProps>`
  font-size: 12px;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: ${props => (props.borderRadius)};
  border: solid 1px black;
  background-color: white;
  :hover {
    background-color: rgb(242, 236, 225);
  }

  `

export const StatsContentWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: start;
`

export const ResumeTitleWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: start;
`

export const PageTitle = styled.h1`
  
`