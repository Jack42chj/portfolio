export const color = {
  /* Chart */
  chart_black: "#24282D",
  chart_green: "#39FF14",
  chart_stroke_black: "#FFFFFF1F",
  /* Tooltip */
  tooltip_blue: "#3182F6",
  tooltip_blue_10: "#34B1C0",
  tooltip_green: "#32AA60",
  tooltip_pink: "#CC4E70",
  tooltip_purple: "#854BDB",
  tooltip_yellow: "#F5AE1B",
  /* Common */
  black_10: "#171A1D",
  black_20: "#2A3138",
  black: "#0B0D0F",
  gray_10: "#A1A1AA",
  gray: "#2A2D31",
  green_10: "#1D3B14",
  green: "#7CFF4E",
  orange: "#E34F26",
  white_10: "#D1D5DB",
  white: " #FFFFFF",
} as const;

export type ColorType = typeof color;
