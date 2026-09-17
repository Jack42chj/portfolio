import type { Player } from "@/types";

export const PLAYERS_DATA: Player[] = [
  {
    id: "gk",
    x: 20,
    y: 150,
    role: "GK",
    range: { x: 10, y: 20 },
  },
  {
    id: "lb",
    x: 90,
    y: 60,
    role: "DEF",
    range: { x: 20, y: 20 },
  },
  {
    id: "cb",
    x: 90,
    y: 150,
    role: "DEF",
    range: { x: 20, y: 20 },
  },
  {
    id: "rb",
    x: 90,
    y: 240,
    role: "DEF",
    range: { x: 20, y: 20 },
  },
  {
    id: "lcm",
    x: 210,
    y: 90,
    role: "MID",
    range: { x: 40, y: 40 },
  },
  {
    id: "rcm",
    x: 210,
    y: 220,
    role: "MID",
    range: { x: 40, y: 40 },
  },
  {
    id: "st",
    x: 320,
    y: 150,
    role: "FW",
    range: { x: 50, y: 35 },
  },
];
