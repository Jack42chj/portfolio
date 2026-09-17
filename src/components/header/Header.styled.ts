import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Header = styled.nav`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid ${theme.color.gray};
    background-color: ${theme.color.black};
    z-index: ${theme.zIndex.HEADER};
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 24px;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 16px 24px;
`;

export const logo = css`
  width: auto;
  height: 32px;
  cursor: pointer;
`;

export const icon = (theme: Theme) => css`
  & > svg > path {
    stroke: ${theme.color.white};
  }

  @media (min-width: 1281px) {
    display: none;
  }
`;

export const ColumnTab = styled.ul<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    display: flex;
    flex-direction: column;
    max-height: ${isOpen ? "360px" : "0px"};
    overflow: hidden;
    transition: max-height 0.35s ease;

    @media (min-width: 1281px) {
      display: none;
    }
  `}
`;

export const NavItem = styled.a`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    display: flex;
    padding: 18px 24px;
    color: ${theme.color.white};

    &:hover {
      background-color: ${theme.color.black_10};
    }

    @media (min-width: 1281px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: fit-content;
      height: 36px;
      border-radius: 4px;
      padding: 0 8px;

      &:hover {
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.08) 0%,
          rgba(255, 255, 255, 0.03) 50%,
          rgba(255, 255, 255, 0.01) 100%
        );
      }
    }
  `}
`;
