import styled from "styled-components";

export const WrapperRouterContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const NavigationMenu = styled.nav`

`

export const NavigationList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
`

export const NavigationListItem = styled.li`
  a {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
  }
`