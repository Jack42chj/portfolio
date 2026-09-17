import React from "react";

import { ArrowIcon } from "@/assets";
import { VELOG_LINK } from "@/constants/link";

import * as S from "./ExternalLinkButton.styled";

const ExternalLinkButton = () => {
  return (
    <S.IconLinkButton
      href={VELOG_LINK}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span>View All Logs</span>
      <ArrowIcon css={S.icon} />
    </S.IconLinkButton>
  );
};

export default ExternalLinkButton;
