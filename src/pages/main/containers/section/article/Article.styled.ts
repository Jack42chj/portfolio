import styled from "@emotion/styled";

export const PaperWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap: 12px;

  @media (min-width: 376px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1025px) {
    display: flex;
    flex-direction: row;
    column-gap: 12px;
  }
`;
