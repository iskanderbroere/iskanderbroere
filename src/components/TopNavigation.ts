import styled from "styled-components"

export const TopNavigation = styled.nav`
  width: 100%;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  margin-bottom: 10px;
  border-bottom: 2px dotted ${props => props.theme.colors.grays[700]};
`
