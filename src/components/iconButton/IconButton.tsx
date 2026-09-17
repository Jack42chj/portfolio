import React, { FC, SVGProps } from "react";

import * as S from "./IconButton.styled";

interface IconButtonProps {
  className?: string;
  ariaLabel: string;
  disabled: boolean;
  Icon: FC<SVGProps<SVGSVGElement>>;
  handleButtonClick: (e: React.MouseEvent) => void;
}

const IconButton = ({
  className,
  ariaLabel,
  disabled,
  Icon,
  handleButtonClick,
}: IconButtonProps) => {
  return (
    <S.Button
      className={className}
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={handleButtonClick}
    >
      <Icon />
    </S.Button>
  );
};

export default IconButton;
