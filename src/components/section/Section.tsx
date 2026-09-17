import React, { ReactNode } from "react";

import * as S from "./Section.styled";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <S.Section id={id}>
      <S.Container>
        <S.Title>{title}</S.Title>
        {children}
      </S.Container>
    </S.Section>
  );
};

export default Section;
