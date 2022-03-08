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

export const Category_List_item = styled.li`
  margin-top: 10px;
  cursor: pointer;
  border: solid 1px black;
  padding: 5px 10px;
  min-width: 140px;
  border-radius: 5px;
`

export const TableElement = styled.table`
  border: solid 1px black;
  max-height: 30vh;
`

export const TableHead = styled.thead`
  border: solid 1px black;
`

export const TableRow = styled.tr`
  border: solid 1px black;
`

export const TableRow_Th = styled.th`
  border: solid 1px black;
`

export const TableBody = styled.tbody`
  border: solid 1px black;
  overflow-y: scroll;
  :-webkit-scrollbar {
    display: hidden;
  }
`

