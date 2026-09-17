import {
  ChatIcon,
  CommandLineIcon,
  DeveloperIcon,
  EmailIcon,
  GithubIcon,
  GlobeIcon,
  GraphIcon,
  PaletteIcon,
  PinIcon,
  ShieldIcon,
  SoccerIcon,
  VelogIcon,
} from "@/assets";
import { GITHUB_LINK, VELOG_LINK } from "@/constants/link";
import type { ContactItem, InterestItem, PersonalItem } from "@/types";

export const INTEREST_DATA: InterestItem[] = [
  { desc: "축구 경기 시청 및 전술 분석", icon: SoccerIcon, label: "Football" },
  {
    desc: "세계사의 흐름과 이야기 탐구",
    icon: GlobeIcon,
    label: "World History",
  },
  {
    desc: "사용자 경험과 인터랙션 디자인",
    icon: PaletteIcon,
    label: "UI/UX Design",
  },
  {
    desc: "데이터의 시각적 표현",
    icon: GraphIcon,
    label: "Data Visualization",
  },
];

export const CONTACT_DATA: ContactItem[] = [
  { desc: "hojinch99@gmail.com", icon: EmailIcon, label: "Email" },
  {
    desc: "github.com/Jack42chj",
    icon: GithubIcon,
    label: "GitHub",
    link: GITHUB_LINK,
  },
  { desc: "hojiiiin.log", icon: VelogIcon, label: "Velog", link: VELOG_LINK },
  { desc: "Seoul, South Korea", icon: PinIcon, label: "Location" },
];

export const PERSONAL_DATA: PersonalItem[] = [
  { icon: DeveloperIcon, label: "논리적인 문제 해결" },
  { icon: ShieldIcon, label: "끝까지 책임지는 자세" },
  { icon: CommandLineIcon, label: "유지보수 가능한 코드 설계" },
  { icon: ChatIcon, label: "팀과의 원활한 협업" },
];
