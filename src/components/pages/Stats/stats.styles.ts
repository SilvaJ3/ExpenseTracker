import styled from "styled-components"

export const Stats_Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`

export const ToggleBtnWrapper = styled.div`
  display: flex;
`

export const ToggleBtn = styled.button`
  font-size: 20px;
  margin: 20px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  border: solid 1px black;
  :hover {
    background-color: rgb(242, 236, 225);
  }
`

export const StatsContentWrapper = styled.div`
  margin-top: 30px;
`