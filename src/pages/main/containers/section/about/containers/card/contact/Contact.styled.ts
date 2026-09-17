import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    row-gap: 24px;
    border: 1px solid ${theme.color.gray};
    padding: 36px;
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    ${theme.font.bold_20};
    color: ${theme.color.white};
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 24px;
`;

export const icon = css`
  width: 24px;
  height: 24px;
`;

export const Item = styled.a`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const Label = styled.span`
  ${({ theme }) => css`
    ${theme.font.bold_14};
    color: ${theme.color.white};
  `}
`;

export const Desc = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    color: ${theme.color.gray_10};
    word-break: break-all;
  `}
`;
