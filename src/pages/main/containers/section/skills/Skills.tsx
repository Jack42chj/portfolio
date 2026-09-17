import React from "react";

import Section from "@/components/section/Section";

import * as S from "./Skills.styled";
import ChartRadar from "./containers/radar/ChartRadar";
import Tech from "./containers/tech/Tech";

const Skills = () => {
  return (
    <Section id="skills" title="SKILLS OVERVIEW">
      <S.Wrapper>
        <ChartRadar />
        <Tech />
      </S.Wrapper>
    </Section>
  );
};

export default Skills;
