import styled, { css } from "styled-components"

export const UnorderedList = styled.ul<{
  unstyled?: boolean
}>`
  padding-left: 20px;
  margin: 0;
  list-style: circle;
  ${({ unstyled = true }) =>
    unstyled &&
    css`
      list-style: none;
      padding-left: 0;
    `}
`
