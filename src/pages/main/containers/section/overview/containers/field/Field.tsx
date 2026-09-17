import React from "react";

import * as S from "./Field.styled";
import FieldIcon from "./FieldIcon";

const Field = () => {
  return (
    <S.Wrapper>
      <FieldIcon />
      <S.Container>
        <S.TextBox>
          <S.Title>Position</S.Title>
          <S.Text>DEVELOPER</S.Text>
        </S.TextBox>
        <S.TextBox>
          <S.Title>Main Role</S.Title>
          <S.Text>WEB FRONTEND</S.Text>
        </S.TextBox>
      </S.Container>
    </S.Wrapper>
  );
};

export default Field;
