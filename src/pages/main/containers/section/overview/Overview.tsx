import React from "react";

import * as S from "./Overview.styled";
import Field from "./containers/field/Field";
import Intro from "./containers/intro/Intro";

const Overview = () => {
  return (
    <S.Section id="overview">
      <Intro />
      <Field />
    </S.Section>
  );
};

export default Overview;
