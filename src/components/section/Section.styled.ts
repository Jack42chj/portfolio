import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.color.gray};
  `}
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 36px;
  max-width: 1140px;
  margin: 0 auto;
  padding: 36px 24px;

  @media (min-width: 640px) {
    padding: 48px 24px;
  }
`;

export const Title = styled.span`
  ${({ theme }) => css`
    ${theme.font.bold_20};
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
