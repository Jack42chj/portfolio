export interface ProjectItem {
  description: string;
  image: string;
  skills: string[];
  tag: "team" | "personal";
  title: string;
}

export interface ProjectDetail {
  description: string;
  image: string;
  skills: string[];
  tag: "team" | "personal";
  title: string;
  details: string[];
  github_url: string;
  demo_url: string;
}
