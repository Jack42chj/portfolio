export type Point = {
  x: number;
  y: number;
};

export type Player = Point & {
  id: string;
  role: "GK" | "DEF" | "MID" | "FW";
  range: Point;
};
