import React from "react";

import { ChevronIcon } from "@/assets";

import * as S from "./IconButton.styled";

interface IconButtonProps {
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
  handleNext: () => void;
  handlePrev: () => void;
}

const IconButton = ({
  isNextDisabled,
  isPrevDisabled,
  handleNext,
  handlePrev,
}: IconButtonProps) => {
  return (
    <S.IconButton>
      <button
        type="button"
        aria-label="이전 프로젝트"
        disabled={isPrevDisabled}
        onClick={handlePrev}
      >
        <ChevronIcon
          css={S.icon({ direction: "left", disabled: isPrevDisabled })}
        />
      </button>
      <button
        type="button"
        aria-label="다음 프로젝트"
        disabled={isNextDisabled}
        onClick={handleNext}
      >
        <ChevronIcon
          css={S.icon({ direction: "right", disabled: isNextDisabled })}
        />
      </button>
    </S.IconButton>
  );
};

export default IconButton;
