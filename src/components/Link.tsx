import styled, { css } from "styled-components"
import { Link as GatsbyLink } from "gatsby"

interface LinkProps {
  important?: boolean
  navLink?: boolean
  iconLink?: boolean
}

const sharedLinkStyles = ({
  important = false,
  navLink,
  iconLink,
}: LinkProps) => css`
  /* bootstrap resets */
  :not([href]):not([tabindex]) {
  color: inherit;
  text-decoration: none;
  }
  :not([href]):not([tabindex]):hover,
  :not([href]):not([tabindex]):focus {
  color: inherit;
  text-decoration: none;
  }
  :not([href]):not([tabindex]):focus {
  outline: 0;
  }
  /* end bootstrap resets */
  color: ${props => props.theme.colors.grays[2]};
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  font-weight: 700;
  transition: color 0.2s ease-in-out, text-decoration 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.primary.main};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary.main};
  }

  ${iconLink &&
    css`
      & > svg {
        display: flex;
        fill: ${props => props.theme.colors.grays[2]};
        width: 30px;
        height: 30px;
        transition: fill 0.2s ease-in-out;
      }
      &:hover > svg {
        fill: ${props => props.theme.colors.primary.main};
      }
      &:focus > svg {
        outline: 0;
        box-shadow: 0 0 0 3px ${props => props.theme.colors.primary.main};
      }
    `}
  ${important &&
    css`
      color: ${props => props.theme.colors.primary.main};
      &:hover {
        color: ${props => props.theme.colors.primary.dark};
      }
      &:focus {
        outline: 0;
        box-shadow: 0 0 0 3px ${props => props.theme.colors.primary.main};
      }
    `}
  ${navLink &&
    css`
      text-transform: uppercase;
      text-decoration: none;
    `}
`

export const ExternalLink = styled.a.attrs(() => ({
  target: "_blank",
}))<LinkProps>`
  ${props => sharedLinkStyles(props)}
`
export const Link = styled(GatsbyLink)<LinkProps>`
  ${props => sharedLinkStyles(props)}
`
