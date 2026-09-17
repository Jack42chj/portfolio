import {
  BrushIcon,
  CircleStackIcon,
  CodeBracketIcon,
  DesktopIcon,
  GitIcon,
  MswIcon,
  NextjsIcon,
  ReactIcon,
  StorybookIcon,
  TypescriptIcon,
  UsersIcon,
  VitestIcon,
  WrenchScrewdriverIcon,
  ZustandIcon,
} from "@/assets";
import type { RadarItem, TechItem, TooltipItem } from "@/types";
import { theme } from "@/styles";

export const RADAR_DATA: RadarItem[] = [
  { subject: "Frontend", value: 80 },
  { subject: "Language", value: 80 },
  { subject: "Styling", value: 80 },
  { subject: "Collaboration", value: 60 },
  { subject: "Testing\n& Tooling", value: 60 },
  { subject: `Database\n& Storage`, value: 60 },
];

export const TECK_DATA: TechItem[] = [
  { color: "#61DAFB", icon: ReactIcon, name: "React" },
  { color: "#3178C6", icon: TypescriptIcon, name: "TypeScript" },
  { color: "#FFFFFF", icon: NextjsIcon, name: "Next" },
  { color: "#7A4E2D", icon: ZustandIcon, name: "Zustand" },
  { color: "#F03C2E", icon: GitIcon, name: "Git" },
  { color: "", icon: VitestIcon, name: "Vitest" },
  { color: "#FF4785", icon: StorybookIcon, name: "Storybook" },
  { color: "", icon: MswIcon, name: "MSW" },
];

export const TOOLTIP_DATA: TooltipItem[] = [
  {
    color: theme.color.tooltip_blue,
    icon: DesktopIcon,
    skills: ["React", "Next.js", "Zustand", "Redux"],
    subject: "Frontend",
    value: 4,
  },
  {
    color: theme.color.tooltip_green,
    icon: CodeBracketIcon,
    skills: ["HTML5", "CSS", "JavaScript", "TypeScript"],
    subject: "Language",
    value: 4,
  },
  {
    color: theme.color.tooltip_pink,
    icon: BrushIcon,
    skills: ["Styled-Components", "Emotion", "Tailwind CSS", "MUI"],
    subject: "Styling",
    value: 4,
  },
  {
    color: theme.color.tooltip_yellow,
    icon: WrenchScrewdriverIcon,
    skills: ["Vitest", "MSW", "ESLint"],
    subject: `Testing\n& Tooling`,
    value: 3,
  },
  {
    color: theme.color.tooltip_purple,
    icon: CircleStackIcon,
    skills: ["MySQL", "IndexedDB", "Supabase"],
    subject: `Database\n& Storage`,
    value: 3,
  },
  {
    color: theme.color.tooltip_blue_10,
    icon: UsersIcon,
    skills: ["Git", "Github", "Storybook"],
    subject: "Collaboration",
    value: 3,
  },
];
