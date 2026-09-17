import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Card = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 100%;
    border: 2px solid ${theme.color.gray};
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      background-color: ${theme.color.gray_10};
      transition: opacity 0.2s ease;
      pointer-events: none;
      opacity: 0;
      inset: 0;
    }

    &:hover {
      border: 2px solid ${theme.color.green};

      &::after {
        opacity: 0.2;
      }

      & > img {
        transform: scale(1.05);
        transition: transform 0.35s;
      }
    }
  `}
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 8px 8px 0 0;
  aspect-ratio: 1200 / 630;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 24px;
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

export const Title = styled.span`
  ${({ theme }) => css`
    ${theme.font.bold_16};
    color: ${theme.color.white};
  `}
`;

export const Description = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    color: ${theme.color.white};
    word-break: keep-all;
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
    color: ${theme.color.white};
    background-color: ${theme.color.gray};
  `}
`;
