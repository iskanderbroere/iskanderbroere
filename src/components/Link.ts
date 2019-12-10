import styled, { css } from "styled-components"
import { Link as GatsbyLink } from "gatsby"

interface LinkProps {
  important?: boolean
  navLink?: boolean
}

export const sharedLinkStyles = ({
  important = false,
  navLink = false,
}: LinkProps = {}) => css`
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
  color: ${props => props.theme.colors.grays[900]};
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  font-weight: ${props => props.theme.font.weights.bold};
  transition: color 0.2s ease-in-out, text-decoration 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.primary.main};
    text-decoration: ${navLink ? "none" : "underline"};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 2px 2px ${props => props.theme.colors.primary.main};
  }
  ${important &&
    css`
      color: ${props => props.theme.colors.primary.main};
      &:hover {
        color: ${props => props.theme.colors.primary.dark};
      }
      &:focus {
        outline: 0;
        box-shadow: 0 0 2px 2px ${props => props.theme.colors.primary.main};
      }
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
