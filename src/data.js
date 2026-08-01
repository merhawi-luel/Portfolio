import {
  SiReact, SiNextdotjs, SiJavascript,
  SiNodedotjs, SiExpress,
  SiPostgresql, SiMongodb,
  SiPython, SiNumpy, SiPandas,
} from "react-icons/si";
import { FiCode } from "react-icons/fi";
import ROADMAPP from "./assets/ROADMAP.png"
import Mentora from "./assets/Mentora.png"
import Weekly from  "./assets/Screenshot 2026-08-01 155215.png"




export const profile = {
  name: "Merhawi Luel",
  role: "Self-Taught Full Stack Developer| Enthusiastic in ML/AI | n8n automation ",
  intro: "I build modern web applications and spend my off-hours going deep on machine learning from first principles.",
  location: "ADDIS ABABA,ETHIOPIA",
  email: "MerhawiLuel63@gmail.com",
  github: "https://github.com/merhawi-luel",
  linkedin: "https://www.linkedin.com/in/merhawi-luel-tafere-712076330",
   telegram: "https://t.me/Merhawi_Luel",
  twitter: "https://x.com/Merhawi_Luel",
  leetcode: "https://leetcode.com/Mera4k/",
};
export const about = {
  paragraphs: [
    "I create scalable web applications, automate business workflows with n8n, and enjoy turning ideas into products that make a real impact.",
    "My current focus is building a strong foundation in machine learning by studying the underlying mathematics and implementing algorithms from scratch rather than relying solely on libraries. Alongside that, I continue to design, build, and deploy full-stack applications that solve real-world problems.",
  ],
};

export const skills = [
  { id: "s1", category: "Frontend", items: ["React", "Next.js", "JavaScript"] },
  { id: "s2", category: "Backend", items: ["Node.js", "Express.js"] },
  { id: "s3", category: "Database", items: ["PostgreSQL", "MongoDB"] },
  { id: "s4", category: "AI & ML", items: ["Python", "NumPy", "Pandas"] },
];

export const navLinks = [
  { id: "n1", label: "About", href: "#about" },
  { id: "n2", label: "Skills", href: "#skills" },
  { id: "n3", label: "Projects", href: "#projects" },
  { id: "n4", label: "Contact", href: "#contact" },
];

 export const projects = [
  {
    id: "p1",
    title: "ROADMAPAPP",
    description: "create a custom made roadmap.",
    stack: ["Next.js", "React", "MongoDB"],
    liveUrl: "https://roadmap-app-1xyt-delta.vercel.app/roadmaps",
    liveLabel: "Try it ",
    githubUrl: "https://github.com/merhawi-luel/ROADMAP_APP",
    screenshot: ROADMAPP
  },
  {
    id: "p2",
    title: "Mentora",
    description: "Find your tutor with choice.",
    stack: ["Next.js", "React", "MongoDB"],
    liveUrl: "not found",
    liveLabel: "Try it ",
    githubUrl: "https://github.com/merhawi-luel/Mentora",
    screenshot: Mentora
  },
   {
    id: "p3",
    title: "WEEKLY",
    description: "WEEKLY PLANNER WITH FINE UI",
    stack: ["Next.js", "React", "MongoDB"],
    liveUrl: "https://weeklly.vercel.app/",
    liveLabel: "Try it ",
    githubUrl: "https://github.com/merhawi-luel/WEEKLY",
    screenshot: Weekly
  }
  // ...your other projects, same shape
];
export const iconMap = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Python: SiPython,
  NumPy: SiNumpy,
  Pandas: SiPandas,
};

export function getIcon(name) {
  return iconMap[name] || FiCode;
}
