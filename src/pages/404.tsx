import React from "react"
import { Link } from "../components/Link"
import { css } from "styled-components"

const ErrorPage = () => (
  <div
    css={css`
      padding: 1rem;
      background: ${props => props.theme.colors.grays[100]};
      color: ${props => props.theme.colors.grays[700]};
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: ${props => props.theme.font.families.body};
      font-weight: 400;
    `}
  >
    <div
      css={css`
        max-width: 450px;
      `}
    >
      <svg
        fill="#47494e"
        height="90"
        viewBox="0 0 48 48"
        width="90"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" />
      </svg>
      <div
        css={css`
          font-size: 1.5rem;
          color: ${props => props.theme.colors.grays[700]};
          margin-bottom: 8px;
        `}
      >
        Page not found
      </div>
      <Link to="/">Go back home</Link>
    </div>
  </div>
)

export default ErrorPage
