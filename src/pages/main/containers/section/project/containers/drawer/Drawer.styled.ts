import type { Theme } from "@emotion/react";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Drawer = styled.dialog`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 65%;
    margin: 0 8px;
    border: 1px solid ${theme.color.green};
    border-bottom: none;
    border-radius: 12px 12px 0 0;
    box-sizing: border-box;
    box-shadow: ${theme.boxShadow.drawer_shadow};
    background-color: ${theme.color.black_10};
    animation: 0.65s forwards ${slideUp};

    @media (min-width: 640px) {
      width: 40%;
      height: 99%;
      margin: 0;
      margin-right: 4px;
      border-bottom: 1px solid ${theme.color.green};
      border-radius: 12px;
      animation: 0.65s forwards ${slideIn};
    }
  `}
`;

export const DrawerHeader = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: 640px) {
      flex-shrink: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      border-bottom: 1px solid ${theme.color.gray};
      padding: 8px;
    }
  `}
`;

export const button = (theme: Theme) => css`
  display: flex;
  align-items: center;
  border-radius: 999px;
  padding: 8px;

  & > svg {
    width: 24px;
    height: 24px;

    & > path {
      stroke: ${theme.color.white};
    }
  }

  &:hover {
    background-color: ${theme.color.gray};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  row-gap: 16px;
  padding: 16px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 16px;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    ${theme.font.bold_20};
    color: ${theme.color.white};
  `}
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    ${theme.font.bold_14};
    width: fit-content;
    border-radius: 4px;
    padding: 4px 8px;
    color: ${theme.color.green};
    background-color: ${theme.color.green_10};
  `}
`;

export const Desc = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    color: ${theme.color.white_10};
  `}
`;

export const SubTitle = styled.span`
  ${({ theme }) => css`
    ${theme.font.bold_16};
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${theme.color.white};

    &::before {
      content: "";
      width: 2px;
      height: 1em;
      background: ${theme.color.green};
    }
  `}
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Skill = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    border-radius: 4px;
    padding: 4px 8px;
    color: ${theme.color.white_10};
    background-color: ${theme.color.gray};
  `}
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 8px;
  word-break: keep-all;
`;

export const List = styled.li`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    position: relative;
    padding-left: 20px;
    color: ${theme.color.white_10};

    &::before {
      content: "";
      position: absolute;
      top: 55%;
      left: 1%;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: ${theme.color.white};
      transform: translate(-50%, -50%);
    }
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 8px;
  padding: 0 16px 16px 16px;
`;

export const Link = styled.a`
  ${({ theme }) => css`
    ${theme.font.bold_16};
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
    border: 2px solid ${theme.color.green_10};
    border-radius: 8px;
    padding: 8px 0;
    color: ${theme.color.green};
    background-color: ${theme.color.black_10};
    cursor: pointer;

    & > svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background-color: ${theme.color.green_10};
    }
  `}
`;
