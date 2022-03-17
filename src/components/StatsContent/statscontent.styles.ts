import styled from "styled-components"

export const StatsWrapper = styled.div`
  display: flex;
  width: 100%;
  @media(max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`

export const ChartWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 15px;
`