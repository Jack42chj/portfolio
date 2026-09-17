import React from "react";

import { theme } from "@/styles";

interface ChartGaugeProps {
  color: string;
  value: number;
}

const ChartGauge = ({ color, value }: ChartGaugeProps) => {
  const RADIUS = 55;
  const ARC_LENGTH = Math.PI * RADIUS;

  return (
    <svg width="220" height="100" viewBox="0 0 160 90">
      <path
        d="M25 75 A55 55 0 0 1 135 75"
        fill="none"
        stroke={theme.color.chart_black}
        strokeWidth="12"
        strokeLinecap="square"
      />
      <path
        d="M25 75 A55 55 0 0 1 135 75"
        fill="none"
        stroke={color}
        strokeWidth="12"
        strokeLinecap="square"
        strokeDasharray={ARC_LENGTH}
        strokeDashoffset={(Math.PI * 55 * (100 - value)) / 100}
      />
    </svg>
  );
};

export default ChartGauge;
