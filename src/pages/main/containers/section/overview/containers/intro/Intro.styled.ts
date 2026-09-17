import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
  width: 100%;
  padding-left: 12px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.font.bold_48};
    color: ${theme.color.white};
  `}
`;

export const Job = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_24};
    color: ${theme.color.green};
  `}
`;

export const Description = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_16};
    color: ${theme.color.white};
    word-break: keep-all;
  `}
`;

export const IconButton = styled.a`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    display: flex;
    align-items: center;
    column-gap: 12px;
    width: fit-content;
    border-radius: 999px;
    padding: 12px 12px 12px 20px;
    color: ${theme.color.white};
    background-color: #272b2f;

    &:hover {
      background-color: #22262a;

      & > span > span {
        :first-of-type {
          transform: translateY(-100%);
        }

        :last-of-type {
          transform: translateY(-100%);
        }
      }

      & > div > svg {
        :first-of-type {
          transform: translateX(24px);
        }

        :last-of-type {
          transform: translateX(0);
        }
      }
    }
  `}
`;

export const Text = styled.span`
  position: relative;
  display: block;
  height: 20px;
  overflow: hidden;

  & > span {
    display: block;
    transition: transform 0.35s ease;

    :first-of-type {
      transform: translateY(0);
    }

    :last-of-type {
      position: absolute;
      top: 100%;
      left: 0;
      transform: translateY(0);
    }
  }
`;

export const IconContent = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 32px;
`;

export const IconText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
`;

export const icon = (theme: Theme) => css`
  width: 20px;
  height: 20px;

  & > path {
    stroke: ${theme.color.white};
  }
`;

export const ArrowIcon = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 999px;
    overflow: hidden;
    background-color: ${theme.color.black};

    & > svg {
      position: absolute;
      left: 8px;
      width: 16px;
      height: 16px;
      transition: transform 0.35s ease;

      :first-of-type {
        transform: translateX(0);
      }

      :last-of-type {
        transform: translateX(-24px);
      }

      & > path {
        stroke: ${theme.color.green};
        stroke-width: 2px;
      }
    }
  `}
`;
