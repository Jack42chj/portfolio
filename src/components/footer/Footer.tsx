import React from "react";

import { LogoIcon } from "@/assets";

import * as S from "./Footer.styled";

const Footer = () => {
  return (
    <S.Footer>
      <S.Wrapper>
        <LogoIcon css={S.logo} />
        <S.Text>
          © 2026 Choi Hojin.
          <br />
          Designed & Developed with React.
        </S.Text>
      </S.Wrapper>
    </S.Footer>
  );
};

export default Footer;
