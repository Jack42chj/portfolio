import React from "react";

import * as S from "./About.styled";
import Contact from "./containers/card/contact/Contact";
import Interest from "./containers/card/interest/Interest";
import Me from "./containers/card/me/Me";

const About = () => {
  return (
    <S.Section id="contact">
      <S.CardWrapper>
        <Me />
        <Interest />
        <Contact />
      </S.CardWrapper>
    </S.Section>
  );
};

export default About;
