import type { ComponentType, SVGProps } from "react";

export type FilterType = "react" | "web" | "html" | "etc";

export interface ArticleItem {
  desc: string;
  link: string;
  type: FilterType;
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}
