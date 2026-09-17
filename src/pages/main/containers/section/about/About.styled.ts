import styled from "@emotion/styled";

export const Section = styled.section`
  max-width: 1140px;
  margin: 0 auto;
  padding: 48px 24px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;
