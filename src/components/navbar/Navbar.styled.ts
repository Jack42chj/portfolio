import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: none;

    @media (min-width: 1281px) {
      position: fixed;
      top: 50%;
      left: 24px;
      display: flex;
      flex-direction: column;
      row-gap: 4px;
      transform: translateY(-50%);
      z-index: ${theme.zIndex.NAV};
    }
  `}
`;

export const NavItem = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 8px;
    width: fit-content;
    height: 12px;

    &:hover > span:first-of-type {
      width: 36px;
      background-color: ${theme.color.green};
    }

    &:hover > span:last-of-type {
      transform: translateX(0);
      opacity: 1;
    }
  `}
`;

export const Bar = styled.span`
  ${({ theme }) => css`
    width: 16px;
    height: 2px;
    background-color: ${theme.color.gray_10};
    transition: width 0.25s ease;
  `}
`;

export const Label = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    color: ${theme.color.green};
    transform: translateX(-4px);
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
    opacity: 0;
  `}
`;
