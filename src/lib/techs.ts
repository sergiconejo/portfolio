import type { SvgComponent } from "astro/types";

import GIT from "@assets/tech/Git.svg";
import GITHUB from "@assets/tech/GitHub.svg";
import HTML from "@assets/tech/HTML.svg";
import CSS from "@assets/tech/CSS.svg";
import TAILWIND from "@assets/tech/Tailwind.svg";
import JAVASCRIPT from "@assets/tech/JavaScript.svg";
import ASTRO from "@assets/tech/Astro.svg";
import SOLID from "@assets/tech/Solid.svg";
import REACT from "@assets/tech/React.svg";
import NEXT from "@assets/tech/Next.svg";
import AUTH from "@assets/tech/Auth.svg";
import NODEMAILER from "@assets/tech/NodeMailer.svg";
import SQLITE from "@assets/tech/SQLite3.svg";
import TURSO from "@assets/tech/Turso.svg";

const TECHS: Record<string, { name: string; svg: SvgComponent }> = {
  github: { name: "GitHub", svg: GITHUB },
  git: { name: "Git", svg: GIT },
  html: { name: "HTML", svg: HTML },
  css: { name: "CSS", svg: CSS },
  tailwind: { name: "Tailwind", svg: TAILWIND },
  javascript: { name: "JavaScript", svg: JAVASCRIPT },
  astro: { name: "Astro", svg: ASTRO },
  solid: { name: "Solid", svg: SOLID },
  react: { name: "React", svg: REACT },
  next: { name: "Next", svg: NEXT },
  auth: { name: "Auth", svg: AUTH },
  nodemailer: { name: "NodeMailer", svg: NODEMAILER },
  sqlite: { name: "SQLite3", svg: SQLITE },
  turso: { name: "Turso", svg: TURSO },
};

export default TECHS;
