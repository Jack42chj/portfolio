import React from "react";

import { CONTACT_DATA } from "@/constants/about";

import * as S from "./Contact.styled";

const Contact = () => {
  return (
    <S.Wrapper>
      <S.Title>CONTACT</S.Title>
      {CONTACT_DATA.map((item) => (
        <S.Container key={item.label}>
          <item.icon css={S.icon} />
          <S.Item href={item.link} rel="noopener noreferrer" target="_blank">
            <S.Label>{item.label}</S.Label>
            <S.Desc>{item.desc}</S.Desc>
          </S.Item>
        </S.Container>
      ))}
    </S.Wrapper>
  );
};

export default Contact;
