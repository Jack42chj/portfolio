import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ChartTooltip = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    border: 1px solid ${theme.color.black_20};
    border-radius: 8px;
    padding: 16px;
    background-color: ${theme.color.black_10};
  `}
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 12px;
`;

export const icon = (color: string) => css`
  width: 24px;
  height: 24px;

  & > path {
    stroke: ${color};
  }
`;

export const Label = styled.span`
  ${({ theme }) => css`
    ${theme.font.bold_16};
    color: ${theme.color.white};
    white-space: pre-line;
  `}
`;

export const CountWrapper = styled.div<{ topPx: number }>`
  position: absolute;
  top: ${({ topPx }) => topPx}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Count = styled.span`
  ${({ theme }) => css`
    ${theme.font.bold_48};
    color: ${theme.color.white};
  `}
`;

export const Skill = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    color: ${theme.color.gray_10};
  `}
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 28px;
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 4px 8px;
    color: ${theme.color.white};
    background-color: ${theme.color.black_20};
  `}
`;
