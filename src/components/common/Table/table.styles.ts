import { type } from "os"
import styled from "styled-components"

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const Category_List = styled.ul`
  list-style-type: none;
  margin-right: 30px;
`
type PropsLiActive = {
  active?: string;
}

export const Category_List_item = styled.li<PropsLiActive>`
  margin-top: 10px;
  cursor: pointer;
  border: solid 1px black;
  padding: 5px 10px;
  min-width: 140px;
  min-height: 25px;
  box-shadow: 15px 15px 0px 0px #000000A6;
  background-color: #D7D7D7;
  background: ${props => (props.active)} !important;
  text-align: center;
`

export const TableElement = styled.table`
  /* max-height: 20vh; */
  min-width: 50vw;
  border-collapse: separate; 
  border-spacing: 0 20px;
  padding: 0 50px;
  display: inline-table;
  `

export const TableHead = styled.thead`
  background-color: white;
  `

export const TableRow = styled.tr`
  `

export const TableRow_Th = styled.th`
  padding: 20px 0;
  `

export const TableBody = styled.tbody`
  background-color: #D7D7D7;
  overflow-y: scroll;
  :-webkit-scrollbar {
    display: hidden;
  }
`

