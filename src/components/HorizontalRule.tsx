import styled from "styled-components"

export const HorizontalRule = styled.hr`
  /* bootstrap resets */
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  /* bootstrap resets end */
  border: none;
  border-bottom: 2px dotted ${props => props.theme.colors.grays[1]};
`
