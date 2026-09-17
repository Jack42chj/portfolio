import type { ComponentType, SVGProps } from "react";

export interface InterestItem {
  desc: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
}

export interface ContactItem {
  desc: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  link?: string;
}

export interface PersonalItem {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
}
