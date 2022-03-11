import styled from "styled-components";

export const ResumeWrapper = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: solid 1px black;
  width: 30vw;
  height: 80vh;
  background-color: #E6E6E6;
  box-shadow: 10px 10px 0px 0px gray;
  @media (max-width: 1024px) {
    width: 60vw
  }
`

export const RecapChartWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const RecapChartLine = styled.div`
  width: 60%;
  height: 20px;
  background-color: white;
  display: flex;
`

type ColorItem = {
  bgColor: string;
  width: number
}

export const RecapChartItem = styled.div<ColorItem>`
  background-color: ${props => (props.bgColor)};
  width: ${props => (props.width)}%;
  height: 20px;
`
