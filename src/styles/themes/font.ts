import { css } from "@emotion/react";

export const font = {
  regular_14: css`
    font-family: "Inter", sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.429;
  `,
  regular_16: css`
    font-family: "Inter", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
  `,
  regular_24: css`
    font-family: "Inter", sans-serif;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 1.33;
  `,
  medium_14: css`
    font-family: "Inter", sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.429;
  `,
  bold_14: css`
    font-family: "Inter", sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.429;
  `,
  bold_16: css`
    font-family: "Inter", sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
  `,
  bold_20: css`
    font-family: "Inter", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.4;
  `,
  bold_24: css`
    font-family: "Inter", sans-serif;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.33;
  `,
  bold_48: css`
    font-family: "Inter", sans-serif;
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 1.167;
  `,
} as const;

export type FontType = typeof font;
