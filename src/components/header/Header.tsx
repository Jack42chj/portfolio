import React from "react";

import IconButton from "@/components/iconButton/IconButton";
import { LogoIcon, MenuIcon, XMarkIcon } from "@/assets";
import { NAVS } from "@/constants/navbar";
import useToggle from "@/hooks/useToggle";

import * as S from "./Header.styled";

const Header = () => {
  const { isToggle, handleToggle } = useToggle(false);

  const handleLogoClick = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <S.Header>
      <S.Wrapper>
        <LogoIcon css={S.logo} onClick={handleLogoClick} />
        <IconButton
          css={S.icon}
          ariaLabel={isToggle ? "메뉴 닫기" : "메뉴 열기"}
          disabled={false}
          Icon={isToggle ? XMarkIcon : MenuIcon}
          handleButtonClick={handleToggle}
        />
      </S.Wrapper>
      <S.ColumnTab isOpen={isToggle}>
        {NAVS.map((item) => (
          <li key={item.id}>
            <S.NavItem href={item.id} onClick={handleToggle}>
              {item.content}
            </S.NavItem>
          </li>
        ))}
      </S.ColumnTab>
    </S.Header>
  );
};

export default Header;
