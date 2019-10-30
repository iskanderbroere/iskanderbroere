import styled from "styled-components"

export const BottomNavigation = styled.footer`
  position: fixed;
  bottom: 0;
  width: calc(100% - 30px);
  background-color: ${props => props.theme.colors.grays[100]};
  border-top: 2px dotted ${props => props.theme.colors.grays[700]};
  display: flex;
  align-items: center;
  height: ${props => props.theme.elements.bottomNavigation.height};

  a:not(:last-child) {
    margin-right: 10px;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`
