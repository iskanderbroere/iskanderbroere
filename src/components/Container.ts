import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 0;
    max-width: 600px;
  }
`
