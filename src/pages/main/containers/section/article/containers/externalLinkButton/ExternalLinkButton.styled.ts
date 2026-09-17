import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const IconLinkButton = styled.a`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    position: absolute;
    right: 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 8px;
    color: ${theme.color.white};
  `}
`;

export const icon = (theme: Theme) => css`
  width: 20px;
  height: 20px;

  & > path {
    stroke: ${theme.color.green};
  }
`;
