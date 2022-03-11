import styled from "styled-components"

type ColorItem = {
  bgColor: string;
}

export const StatsDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  @media(max-width: 1024px) {
    align-items: center;
  }
`

export const StatsDetailsList = styled.ul`
  list-style-type: none;
  border: solid 1px black;
  border-radius: 5px;
  padding-left: 0;
  min-width: 300px;
`

export const StatsDetailsListItem = styled.li<ColorItem>`
  border-bottom: solid 1px black;
  padding: 5px 10px;
  text-align: right;
  background-color: ${props => (props.bgColor)}
`