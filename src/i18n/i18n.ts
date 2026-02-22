import type { ImageMetadata } from "astro";
import myImage from "@assets/me.jpeg";
import aboutImg from "@assets/setup.jpg";
import MVE from "@assets/projects/mividaenespera.jpg";
import SMC from "@assets/projects/smcopilot.jpg";

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

export interface DictSchema {
  lang: string;
  titleSections: {
    tech: string;
    xp: string;
    subxp: string;
    about: string;
  };
  meta: {
    title: string;
    desc: string;
  };
  langVer: {
    text: string;
    versions: string[];
  };
  theme: {
    initial: string;
    toDark: string;
    toLight: string;
  };
  share: {
    aria: string;
    text: string;
    denied: string;
    noscript: string;
  };
  links: {
    cv: string;
    tel: string;
    mail: string;
  };
  hero: {
    desc: string[];
    Img: ImageMetadata;
    altImg: string;
    openToWork: string;
    resume: string;
  };
  projects: {
    title: string;
    subtitle: string;
    link?: string;
    linkText?: string;
    codeLink?: string;
    codeText?: string;
    Img: ImageMetadata;
    alt: string;
    tags: string[];
    desc: string[];
    cite?: string;
  }[];
  about: {
    Img: ImageMetadata;
    altImg: string;
    text: string[];
    cite?: string;
  };
  footer: {
    text: string;
    code: string;
  };
}

export const LOCALES: Record<string, DictSchema> = {
  en: {
    lang: `en`,
    titleSections: {
      tech: "Technologies",
      xp: "Experience",
      subxp: "+1 year at StartUp Minded, products developed:",
      about: "About Me",
    },
    meta: {
      title: `Sergi Conejo · Frontend Developer Portfolio`,
      desc: `Frontend developer specialized in performance and UX`,
    },
    langVer: {
      text: `Languages`,
      versions: ["English version", "Spanish version"],
    },
    theme: {
      initial: "Toggle light/dark theme",
      toDark: "Switch to dark mode",
      toLight: "Switch to light mode",
    },
    share: {
      aria: "Share website",
      text: "URL copied",
      denied: "Action not available",
      noscript: "JavaScript disabled",
    },
    links: {
      cv: "CV-en.pdf",
      tel: "+34 613 00 46 71",
      mail: "contact@sergiconejo.dev",
    },
    hero: {
      desc: [
        "Self-taught frontend developer with +1 year experience in remote.",
        "Focused on performance, SEO, accessibility and user experience.",
        "I value feedback and care about the details that make a difference.",
      ],
      Img: myImage,
      altImg: "",
      openToWork: "Open to Work",
      resume: "View resume",
    },
    projects: [
      {
        title: "Mi vida en espera",
        subtitle:
          "Web application of personal use for a final client like TikTok / Instagram Reels.",
        link: "https://mividaenespera.es",
        linkText: "View website",
        Img: MVE,
        alt: "",
        tags: [
          "TAILWIND",
          "REACT",
          "NEXT",
          "AUTH",
          "NODEMAILER",
          "SQLITE",
          "TURSO",
        ],
        desc: [
          "Includes advanced search with filters, likes, nested comments, notifications and user profile with history, saved posts and options to chnage username, email, password and delete account.\n\n",
          "Authentication (username or email) and password recovery using Auth.js, Google OAuth and email verification via Nodemailer.\n\n",
          "Implements progressive loading with infinite scroll, protected dashboard routes and SQLite3 database (Turso) managed with better-sqlite3.\n\n",
        ],
        cite: "Project developed individually for and end client.",
      },
      {
        title: "SM Copilot",
        subtitle:
          "SaaS product for guiding and validating startups using specialized AI agents.",
        Img: SMC,
        alt: "",
        tags: ["TAILWIND", "ASTRO", "SOLID", "AUTH"],
        desc: [
          "Built with a hybrid architecture (Astro + Solid), combining static rendering with an interactive private dashboard using Astro Islands.\n\n",
          "Includes project management (CRUD), keyboard-navigable search and text noramlization, multi-step forms with persistent state and exportable chat.\n\n",
          "Google OAuth authentication using Auth.js and auth-astro, with freemium access without registration and server session control.\n\n",
          "Client-side validations, non-intrusive notifications and optimistic UI updates with automatic rollback.\n\n",
        ],
        cite: "Frontend developed individually for the startup.",
      },
    ],
    about: {
      Img: aboutImg,
      altImg:
        "My workspace with my treadmil, height adjustable desk, ultrawide monitor and a vertical monitor",
      text: [
        `I have always enjoyed understanding how things work.
        I started assembling computers and ended up building software.\n\n`,
        `I trained as a fullstack developer building a real-time chat application and later specialized in UI/UX design.
        Starting as a designer and QA helped me understand every part of the product and its impact.
        I see frontend as a strategic layer: architecture, scalability and purpose.\n\n`,
        `Beyond development, i participated in organizational decisions, seeing far away from the code:
        Interviewed candidates, defined roles and delivery documentation.
        Proposed improvements after delivery to enhance team comunication and efficiency.
        Deciding and planning architectures with their technologies.\n\n`,
        `I care about technical detail as much as user experience.
        I work with a critical mindset and open to feedback.`,
      ],
    },
    footer: {
      text: "Developed with Astro",
      code: `See the code`,
    },
  },

  es: {
    lang: `es`,
    titleSections: {
      tech: "Tecnologías",
      xp: "Experiencia",
      subxp: "+1 año en StartUp Minded, productos desarrollados:",
      about: "Sobre Mi",
    },
    meta: {
      title: `Sergi Conejo · Portfolio Desarrollador Frontend`,
      desc: `Desarrollador frontend especializado en rendimiento y UX`,
    },
    langVer: {
      text: `Idiomas`,
      versions: ["Versión inglesa", "Versión española"],
    },
    theme: {
      initial: `Cambiar a tema claro/oscuro`,
      toDark: `Cambiar a tema oscuro`,
      toLight: `Cambiar a tema claro`,
    },
    share: {
      aria: `Compartir web`,
      text: `URL copiada`,
      denied: `Acción no disponible`,
      noscript: `JavaScript desactivado`,
    },
    links: {
      cv: "CV-es.pdf",
      tel: "+34 613 00 46 71",
      mail: "contact@sergiconejo.dev",
    },
    hero: {
      desc: [
        `Soy desarrollador frontend autodidacta con +1 año de experiencia en remoto.`,
        `Enfocado en rendimiento, SEO, accesibilidad y experiencia de usuario.`,
        `Me gusta recibir feedback y cuidar los detalles que marcan la diferencia.`,
      ],
      Img: myImage,
      altImg: "",
      openToWork: "Disponible para Trabajar",
      resume: `Ver Currículum`,
    },
    projects: [
      {
        title: "Mi vida en espera",
        subtitle: `Aplicación web de uso personal para cliente final estilo TikTok / Instagram Reels.`,
        link: "https://mividaenespera.es",
        linkText: "Ver web",
        Img: MVE,
        alt: "",
        tags: [
          "TAILWIND",
          "REACT",
          "NEXT",
          "AUTH",
          "NODEMAILER",
          "SQLITE",
          "TURSO",
        ],
        desc: [
          `Incluye búsqueda avnzada con filtros, likes, comentarios anidados, notificaciones y perfil de usuario con historial, guardados y opción de cambiar nombre, correo, contraseña y eliminar cuenta.\n\n`,
          `Autenticación (nombre de usuario o correo) y recuperación de contraseña mediante Auth.js con Google OAuth y verificación por correo con Nodemailer.\n\n`,
          `Implementa carga progresiva de infinite scroll y paginación, dashboard con rutas protegidas y base de datos SQLite3 (Turso) gestionada con better-sqlite3.`,
        ],
        cite: "Proyecto desarrollado individualmente para cliente final.",
      },
      {
        title: "SM Copilot",
        subtitle: `Producto SaaS para la guía y validación de startups con IAs especializadas en cada profesión.`,
        Img: SMC,
        alt: "",
        tags: ["TAILWIND", "ASTRO", "SOLID", "AUTH"],
        desc: [
          `Construido con arquitectura híbrida (Astro + Solid), combina renderizado estático con dashboard interactivo de acceso privado y rutas dinámicas.\n\n`,
          `Incluye gestión de proyectos (CRUD), buscador con navegación por teclado y normalización de texto, formularios multipaso con persistencia de estado y chat exportable.\n\n`,
          `Autenticación con Google OAuth mediante Auth.js y auth-astro, con acceso freemium sin registro y control de sesión en servidor.\n\n`,
          `Implementa validaciones preventivas en cliente, notificaciones no intrusivas y actualizaciones optimistas con rollback automático.`,
        ],
        cite: "Desarrollé el frontend de forma individual para la startup.",
      },
    ],
    about: {
      Img: aboutImg,
      altImg:
        "Mi espacio de trabajo con cinta de andar, mesa elevable, pantalla ultrawide y secundaria vertical",
      text: [
        `Siempre me ha gustado entender cómo funcionan las cosas.
      Empecé montando ordenadores y acabé creando software.\n\n`,
        `Me formé como fullstack desarrollando un chat en tiempo real y me especialicé en diseño UI/UX.
      Empezando como diseñador y QA, comprendiendo todas las partes del producto y su impacto.
      Entiendo el frontend como una parte estratégica: arquitectura, escalabilidad y propósito.\n\n`,
        `En mi experiencia participé en desarrollo y decisiones organizativas, viendo más allá del código.
      Realicé entrevistas, definí procesos y documentación de entrega.
      Sugerí  mejoras post-entrega mejorando la comunicación y eficiencia del equipo.
      Decidiendo y planeando arquitecturas con sus tecnologías.\n\n`,
        `Me importa el detalle técnico tanto como la experiencia de usuario.
      Trabajo con mentalidad crítica, abierto al feedback y a nuevas ideas.`,
      ],
    },
    footer: {
      text: `Desarrollado con Astro`,
      code: `Ver el código`,
    },
  },
};

export const settings = {
  domain: "https://sergiconejo.dev",
  defaultLang: "en",
  langs: Object.keys(LOCALES),
  myName: "Sergi Conejo Monfort",
  twitter: "@sergi_conejo_",
  profession: "Frontend Developer",
  techs: [
    "Git",
    "GitHub",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind",
    "Astro",
    "Solid",
    "React",
    "Next",
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/sergiconejo",
    github: "https://github.com/sergiconejo",
  },
  footer: {
    link: "https://github.com/sergiconejo/portfolio",
    SvgText: ASTRO,
    SvgLink: GITHUB,
  },
  knowsAbout: [
    "Astro",
    "Solid",
    "React",
    "Next",
    "Tailwind CSS",
    "Web Performance",
    "Accessibility",
    "SEO",
  ],
  country: "ES",
  occupationLocation: "Spain",
};

export default LOCALES;
