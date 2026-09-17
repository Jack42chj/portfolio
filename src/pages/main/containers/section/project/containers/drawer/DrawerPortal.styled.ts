import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Dim = styled.div`
  ${({ theme }) => css`
    position: fixed;
    display: flex;
    align-items: flex-end;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(1px);
    z-index: ${theme.zIndex.DRAWER};
    inset: 0;

    @media (min-width: 640px) {
      display: flex;
      justify-content: flex-end;
    }
  `}
`;
