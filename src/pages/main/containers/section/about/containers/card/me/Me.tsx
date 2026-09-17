import React from "react";

import { PERSONAL_DATA } from "@/constants/about";

import * as S from "./Me.styled";

const Me = () => {
  return (
    <S.Wrapper>
      <S.Title>ABOUT ME</S.Title>
      <S.Desc>
        자신의 역할에 충실하면서도, 필요한 순간에는 다양한 역할을 수행할 수 있는{" "}
        <b>&apos;만능&apos;</b>이라는 수식어를 좋아합니다.
      </S.Desc>
      <S.List>
        {PERSONAL_DATA.map((item) => (
          <S.Item key={item.label}>
            <item.icon css={S.icon} />
            <S.Label>{item.label}</S.Label>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  );
};

export default Me;
