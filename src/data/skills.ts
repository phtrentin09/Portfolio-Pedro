export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Front-end",
    items: ["HTML5", "CSS3", "JavaScript", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Build e automação",
    items: ["Python", "Git", "GitHub", "Vercel"],
  },
  {
    label: "Marketing digital",
    items: ["Google Ads", "Meta Business Suite", "SEO", "WordPress"],
  },
  {
    label: "Design e conteúdo",
    items: ["Identidade visual", "Direção de conteúdo", "Edição de vídeo (CapCut)"],
  },
];
