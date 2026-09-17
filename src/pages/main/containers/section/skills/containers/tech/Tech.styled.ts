import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: 100%;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    ${theme.font.bold_16};
    color: ${theme.color.white};
  `}
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-row-gap: 24px;
  grid-column-gap: 16px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8px;
`;

export const icon = (color: string) => css`
  width: 100%;
  aspect-ratio: 1 / 1;
  max-width: 72px;

  & > path {
    fill: ${color};
  }
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_16};
    color: ${theme.color.white};
  `}
`;
