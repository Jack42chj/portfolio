import React from "react";

import { TECK_DATA } from "@/constants/skill";

import * as S from "./Tech.styled";

const Tech = () => {
  return (
    <S.Panel>
      <S.Title>TECH STACK</S.Title>
      <S.Wrapper>
        {TECK_DATA.map((item) => (
          <S.Item key={item.name}>
            <item.icon css={S.icon(item.color)} />
            <S.Name>{item.name}</S.Name>
          </S.Item>
        ))}
      </S.Wrapper>
    </S.Panel>
  );
};

export default Tech;
