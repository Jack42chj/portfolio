import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const IconButton = styled.div`
  position: absolute;
  right: 2%;
  display: flex;
  flex-direction: row;
  column-gap: 4px;
`;

interface IconProps {
  disabled: boolean;
  direction: "left" | "right";
}

export const icon =
  ({ disabled, direction }: IconProps) =>
  (theme: Theme) => css`
    width: 24px;
    height: 24px;
    transform: rotate(${direction === "right" ? "270deg" : "90deg"});

    & > path {
      stroke: ${disabled ? theme.color.gray_10 : theme.color.green};
    }
  `;
