import styled from "styled-components";

export const WrapperRouterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgb(204, 227, 218);
`

export const NavigationMenu = styled.nav`
  background-color: white;
  box-shadow: 0px 0px 10px black;
  position: fixed;
  z-index: 2;
  width: 100%;
`

export const NavigationList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 20px;
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