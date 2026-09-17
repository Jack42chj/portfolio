import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.color.black_10};
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 24px;
  max-width: 1140px;
  margin: 0 auto;
  padding: 60px 40px;
`;

export const logo = css`
  width: auto;
  height: 24px;
`;

export const Text = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    color: ${theme.color.gray_10};
  `}
`;
