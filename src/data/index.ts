import { Experience, Project, SkillCategory, PersonalInfo } from '@/types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Enrique Sánchez Santiago",
  role: "Desarrollador Full Stack | Backend & DevOps Specialist",
  email: "enriquesanchezsantiago01@gmail.com",
  linkedin: "https://linkedin.com/in/enrique-sanchez-santiago",
  github: "https://github.com/tu-usuario",
  portfolio: "https://devsmex.com"
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Apleeks",
    role: "Líder de Proyecto / Desarrollador Full Stack",
    period: "Junio 2024 - Febrero 2026",
    description: [
      "Dirección técnica, revisión de código y mentoría de residentes profesionales.",
      "Integración de agentes de IA con DeepSeek y ElevenLabs para soluciones de voz.",
      "Desarrollo de módulos de chat y administración de funnels con WebSockets y Baileys.",
      "Proyectos clave: The Pierre & Diamonds, Canacintra y hotel Las Brisas."
    ]
  },
  {
    company: "Secretaría de Turismo (SECTUR)",
    role: "Programador Full Stack / DevOps",
    period: "Marzo 2022 - Junio 2024",
    description: [
      "Despliegue en servidores VPS mediante Docker y gestión de dominios con NGINX.",
      "Desarrollo de plataformas de geolocalización de hoteles y administración de RH.",
      "Optimización de consultas SQL para reportes estadísticos y sistemas Otis 2023."
    ]
  }
];

export const FREELANCE_PROJECTS: Project[] = [
  {
    title: "Proyecto Propio 1",
    description: "Sistema escalable con arquitectura de microservicios.",
    stack: ["Next.js", "Laravel", "Docker"],
    link: "https://proyecto1.enriquesanchez.dev"
  },
  {
    title: "Proyecto Propio 2",
    description: "Integración de IA para procesamiento de lenguaje natural.",
    stack: ["React", "Node.js", "DeepSeek"],
    link: "https://proyecto2.enriquesanchez.dev"
  },
  {
    title: "Proyecto Propio 3",
    description: "Dashboard administrativo con métricas en tiempo real.",
    stack: ["Vue.js", "PostgreSQL", "WebSockets"],
    link: "https://proyecto3.enriquesanchez.dev"
  }
];

export const SKILLS: SkillCategory[] = [
  { category: "Backend", items: ["PHP (Laravel)", "Node.js", "SQL Server", "PostgreSQL"] },
  { category: "Frontend", items: ["Next.js", "React.js", "Vue.js", "Tailwind CSS"] },
  { category: "DevOps", items: ["Docker", "NGINX", "Linux", "Git/Bitbucket"] },
  { category: "IA & Integraciones", items: ["DeepSeek API", "ElevenLabs", "WebSockets"] }
];