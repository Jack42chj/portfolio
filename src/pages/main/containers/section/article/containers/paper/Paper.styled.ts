import type { FilterType } from "@/types";
import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Paper = styled.a`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    row-gap: 12px;
    border: 1px solid ${theme.color.black_20};
    border-radius: 12px;
    padding: 24px;
    overflow: hidden;
    background-color: ${theme.color.black_10};
    aspect-ratio: 1 / 1;

    &:hover {
      background-color: ${theme.color.gray};

      & > span:first-of-type {
        text-decoration: underline;
        text-decoration-color: ${theme.color.white};
      }
    }
  `}
`;

export const IconTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 12px;
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    ${theme.font.medium_14};
    border-radius: 99px;
    padding: 6px 12px;
    color: ${theme.color.green};
    background-color: ${theme.color.green_10};
    border-color: ${theme.color.green_10};
  `}
`;

export const Icon = styled.div<{ type: FilterType }>`
  ${({ theme, type }) => {
    const iconStyle = {
      react: css`
        fill: ${theme.color.tooltip_blue_10};
      `,
      web: css`
        stroke: ${theme.color.tooltip_blue_10};
      `,
      html: css`
        stroke: ${theme.color.orange};
      `,
      etc: css`
        stroke: ${theme.color.white};
      `,
    };

    return css`
      display: flex;
      align-items: center;
      border-radius: 999px;
      padding: 8px;
      background-color: ${theme.color.black};

      & > svg {
        width: 24px;
        height: 24px;

        & > path {
          ${iconStyle[type]}
        }
      }
    `;
  }}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    ${theme.font.bold_16};
    color: ${theme.color.white};
  `}
`;

export const Desc = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    overflow: hidden;
    color: ${theme.color.gray_10};
  `}
`;

export const icon = (theme: Theme) => css`
  position: absolute;
  right: 5%;
  bottom: 5%;
  width: 16px;
  height: 16px;

  & > path {
    stroke: ${theme.color.green};
  }
`;
