import React from "react";

import { ArrowIcon, ClockIcon, PinIcon } from "@/assets";

import * as S from "./Intro.styled";

const Intro = () => {
  return (
    <S.Panel>
      <S.Content>
        <S.Name>CHOI HOJIN</S.Name>
        <S.Job>Frontend Developer</S.Job>
      </S.Content>
      <S.Description>
        다양한 경험을 통해 배우고 성장하며
        <br />더 나은 경험을 만드는 웹 프론트엔드 개발자입니다.
      </S.Description>
      <S.IconContent>
        <S.IconText>
          <PinIcon css={S.icon} />
          <S.Description>Seoul, KR</S.Description>
        </S.IconText>
        <S.IconText>
          <ClockIcon css={S.icon} />
          <S.Description>1 Year Experience</S.Description>
        </S.IconText>
      </S.IconContent>
      <S.IconButton href="#projects">
        <S.Text>
          <span>View My Work</span>
          <span>View My Work</span>
        </S.Text>
        <S.ArrowIcon>
          <ArrowIcon />
          <ArrowIcon />
        </S.ArrowIcon>
      </S.IconButton>
    </S.Panel>
  );
};

export default Intro;
