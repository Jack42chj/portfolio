import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin: 0 auto;
  margin-top: 48px;
  padding: 64px 24px;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    max-width: 1140px;
    margin-top: 64px;
  }
`;
