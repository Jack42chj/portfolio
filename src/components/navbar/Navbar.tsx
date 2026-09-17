import React from "react";

import { NAVS } from "@/constants/navbar";

import * as S from "./Navbar.styled";

const Navbar = () => {
  return (
    <S.Nav>
      {NAVS.map((item) => (
        <S.NavItem key={item.id} href={item.id}>
          <S.Bar />
          <S.Label>{item.content}</S.Label>
        </S.NavItem>
      ))}
    </S.Nav>
  );
};

export default Navbar;
