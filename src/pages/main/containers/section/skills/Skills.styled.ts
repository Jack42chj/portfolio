import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 48px;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
