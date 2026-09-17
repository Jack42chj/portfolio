import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Track = styled.div<{ index: number }>`
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  transform: ${({ index }) => `translateX(calc(-${index} * (100% + 24px)))`};
  transition: transform 0.3s ease;

  @media (min-width: 540px) {
    transform: ${({ index }) =>
      `translateX(calc(-${index} * ((100% - 24px) / 2 + 24px)))`};
  }

  @media (min-width: 720px) {
    transform: ${({ index }) =>
      `translateX(calc(-${index} * ((100% - 48px) / 3 + 24px)))`};
  }
`;

export const CardWrapper = styled.div`
  flex: 0 0 100%;
  align-items: stretch;

  @media (min-width: 540px) {
    flex: 0 0 calc((100% - 24px) / 2);
  }

  @media (min-width: 720px) {
    flex: 0 0 calc((100% - 48px) / 3);
  }
`;
