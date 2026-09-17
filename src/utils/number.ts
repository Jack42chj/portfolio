import type { Point } from "@/types";

export const getBoundedValue = (
  value: number,
  min: number,
  max: number,
): number => Math.min(Math.max(value, min), max);

export const getRandomPoint = (range: Point): Point => ({
  x: (Math.random() * 2 - 1) * range.x,
  y: (Math.random() * 2 - 1) * range.y,
});
