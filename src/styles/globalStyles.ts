import { css } from "@emotion/react";

const globalStyles = css`
  *,
  *::before,
  *::after {
    margin: 0;
    border-radius: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    overflow-y: auto;
    font-display: swap;
    background-color: #0b0d0f;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  section {
    scroll-margin-top: 64px;
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;

    &[disabled] {
      cursor: not-allowed;
    }
  }
  svg,
  svg * {
    outline: none;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: #aaaaaa;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #888888;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export default globalStyles;
