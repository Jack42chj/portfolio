import React from "react";

import type { TooltipContentProps } from "recharts";

import { TOOLTIP_DATA } from "@/constants/skill";

import * as S from "./ChartTooltip.styled";
import ChartGauge from "../gauge/ChartGauge";

const ChartTooltip = ({ active, payload, label }: TooltipContentProps) => {
  const isVisible = active && payload?.[0] != null;
  const tooltip = TOOLTIP_DATA.find((item) => item.subject === label);
  const topPx =
    label === "Testing\n& Tooling" || label === "Database\n& Storage"
      ? 105
      : 80;

  return (
    <S.ChartTooltip style={{ visibility: isVisible ? "visible" : "hidden" }}>
      {isVisible && tooltip && (
        <>
          <S.Title>
            <tooltip.icon css={S.icon(tooltip.color)} />
            <S.Label>{label}</S.Label>
          </S.Title>
          <ChartGauge color={tooltip.color} value={tooltip.value * 20} />
          <S.CountWrapper topPx={topPx}>
            <S.Count>{tooltip.value}</S.Count>
            <S.Skill>Skills</S.Skill>
          </S.CountWrapper>
          <S.TagWrapper>
            {tooltip.skills.map((item) => (
              <S.Tag key={item}>{item}</S.Tag>
            ))}
          </S.TagWrapper>
        </>
      )}
    </S.ChartTooltip>
  );
};

export default ChartTooltip;
