import React from "react";

import { INTEREST_DATA } from "@/constants/about";

import * as S from "./Interest.styled";

const Interest = () => {
  return (
    <S.Wrapper>
      <S.Title>INTEREST</S.Title>
      {INTEREST_DATA.map((item) => (
        <S.Container key={item.label}>
          <item.icon css={S.icon} />
          <S.Item>
            <S.Label>{item.label}</S.Label>
            <S.Desc>{item.desc}</S.Desc>
          </S.Item>
        </S.Container>
      ))}
    </S.Wrapper>
  );
};

export default Interest;
