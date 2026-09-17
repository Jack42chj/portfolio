import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Track = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const Line = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 6px;
    right: 0;
    left: 6px;
    width: 1px;
    height: 100%;
    background: ${theme.color.gray_10};

    @media (min-width: 640px) {
      left: 0;
      width: 100%;
      height: 1px;
    }
  `}
`;

export const Item = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  word-break: keep-all;

  @media (min-width: 640px) {
    flex-direction: column;
  }
`;

export const Dot = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 12px;
    height: 12px;
    margin-top: 6px;
    border-radius: 50%;
    background: ${theme.color.green};
    z-index: ${theme.zIndex.DOT};

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${theme.color.white};
      transform: translate(-50%, -50%);
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 12px;
      width: 10px;
      height: 1px;
      background: ${theme.color.gray_10};
      transform: translateY(-50%);
    }

    @media (min-width: 640px) {
      margin-top: 0;

      &::after {
        content: "";
        position: absolute;
        top: 12px;
        left: 50%;
        width: 1px;
        height: 10px;
        background: ${theme.color.gray_10};
        transform: translateX(-50%);
      }
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin: 0 0 48px 28px;

  @media (min-width: 640px) {
    row-gap: 8px;
    margin: 24px 0 0 4px;
  }
`;

export const Year = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    color: ${theme.color.gray_10};
  `}
`;

export const Role = styled.span`
  ${({ theme }) => css`
    ${theme.font.bold_16};
    color: ${theme.color.white};
  `}
`;

export const Place = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    color: ${theme.color.gray_10};
  `}
`;

export const Details = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  margin-top: 8px;
`;

export const List = styled.li`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    position: relative;
    padding-left: 8px;
    color: ${theme.color.gray_10};

    &::before {
      content: "";
      position: absolute;
      top: 55%;
      left: 0%;
      width: 2px;
      height: 2px;
      border-radius: 50%;
      background: ${theme.color.white};
      transform: translate(-50%, -50%);
    }
  `}
`;
