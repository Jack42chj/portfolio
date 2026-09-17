import React from "react";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { RADAR_DATA } from "@/constants/skill";
import useResizeObserver from "@/hooks/useResizeObserver";
import { theme } from "@/styles";

import * as S from "./ChartRadar.styled";
import ChartTooltip from "./containers/tooltip/ChartTooltip";

const ChartRadar = () => {
  const { ref, currentWidth } = useResizeObserver();
  const isResize = currentWidth <= 380;

  return (
    <S.Wrapper ref={ref}>
      <ResponsiveContainer
        width="100%"
        height="100%"
        style={{ border: "none" }}
      >
        <RadarChart data={RADAR_DATA} cx="50%" cy="50%" outerRadius="80%">
          <PolarGrid stroke={theme.color.chart_stroke_black} radialLines />
          <PolarAngleAxis
            dataKey="subject"
            tick={({ x, y, payload, textAnchor }) => {
              const lines = payload.value.split("\n");

              return (
                <text
                  x={x}
                  y={y}
                  textAnchor={textAnchor}
                  fill={theme.color.white}
                  fontSize={isResize ? 12 : 16}
                >
                  {lines.map((line: string, index: number) => (
                    <tspan key={index} x={x} dy={index === 0 ? 0 : 24}>
                      {line}
                    </tspan>
                  ))}
                </text>
              );
            }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={false}
            axisLine={false}
          />
          <Radar
            dataKey="value"
            stroke={theme.color.chart_green}
            fill={theme.color.chart_green}
            fillOpacity={0.2}
            strokeWidth={2}
            isAnimationActive={false}
          />
          <Tooltip
            cursor={false}
            content={ChartTooltip}
            contentStyle={{
              background: theme.color.chart_black,
              border: `1px solid ${theme.color.chart_green}`,
              borderRadius: 8,
            }}
            labelStyle={{
              color: theme.color.white,
            }}
            itemStyle={{
              color: theme.color.chart_green,
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </S.Wrapper>
  );
};

export default ChartRadar;
