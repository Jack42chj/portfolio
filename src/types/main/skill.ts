import type { ComponentType, SVGProps } from "react";

export interface RadarItem {
  subject: string;
  value: number;
}

export interface TechItem {
  color: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
}

export interface TooltipItem {
  color: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  skills: string[];
  subject: string;
  value: number;
}
