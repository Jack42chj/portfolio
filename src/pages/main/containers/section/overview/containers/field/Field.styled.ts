import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_16};
    color: ${theme.color.gray_10};
  `}
`;

export const Text = styled.span`
  ${({ theme }) => css`
    ${theme.font.bold_16};
    letter-spacing: -0.5px;
    color: ${theme.color.white};
  `}
`;

export const FieldSvg = styled.svg`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 444 / 324;
`;
