import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  aspect-ratio: 1 / 1;

  @media (min-width: 640px) {
    aspect-ratio: auto;
  }
`;
