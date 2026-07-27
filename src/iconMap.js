import {
  SiReact, SiNextdotjs, SiJavascript,
  SiNodedotjs, SiExpress,
  SiPostgresql, SiMongodb,
  SiPython, SiNumpy, SiPandas,
} from "react-icons/si";
import { FiCode } from "react-icons/fi";

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