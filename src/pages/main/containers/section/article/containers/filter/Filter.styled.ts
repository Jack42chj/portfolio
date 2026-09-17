import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
`;

export const Chip = styled.button<{ isActive: boolean }>`
  ${({ theme, isActive }) => css`
    ${theme.font.medium_14};
    border: 1px solid;
    border-radius: 99px;
    padding: 6px 12px;
    color: ${isActive ? theme.color.green : theme.color.gray_10};
    border-color: ${isActive ? theme.color.green : theme.color.black_20};
    background-color: ${isActive ? theme.color.green_10 : theme.color.black_10};

    ${!isActive &&
    css`
      &:hover {
        color: ${theme.color.white_10};
        border-color: ${theme.color.gray};
        background-color: ${theme.color.gray};
      }
    `}
  `}
`;
