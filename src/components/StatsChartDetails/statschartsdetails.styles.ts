import styled from "styled-components"

type ColorItem = {
  bgColor: string;
}

export const StatsDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 60px;
  padding: 10px 20px;
  background-color: #C4C4C4;
  height: 500px;
  overflow-y: scroll;
  box-shadow: 15px 15px 0px 0px #000000A6;
  @media(max-width: 1024px) {
    align-items: center;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`

export const StatsDetailsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const StatsDetailsListItem = styled.li<ColorItem>`
  padding: 5px 10px;
  text-align: right;
  background-color: ${props => (props.bgColor)}
`