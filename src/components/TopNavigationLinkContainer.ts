import styled from "styled-components"

export const TopNavigationLinkContainer = styled.div`
  display: none;

  a:not(:last-child) {
    margin-right: 18px;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    > a {
      display: flex;
    }
  }
`
