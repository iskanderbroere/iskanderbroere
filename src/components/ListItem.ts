import styled, { css } from "styled-components"

export const ListItem = styled.li<{ inline?: boolean }>`
  ${({ inline = false }) =>
    inline &&
    css`
      display: inline;
      :not(:last-child)::after {
        content: " – ";
      }
    `}
`
