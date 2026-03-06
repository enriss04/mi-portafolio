import { Experience, Project, SkillCategory, PersonalInfo } from '@/types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Enrique Sánchez Santiago",
  role: "Desarrollador Full Stack | Backend & DevOps Specialist",
  email: "enriquesanchezsantiago01@gmail.com",
  linkedin: "https://www.linkedin.com/in/enrique-s%C3%A1nchez-santiago-56a397383",
  github: "https://github.com/enriss04",
  cellphone: "527443541292"
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Apleeks",
    role: "Desarrollador Full Stack",
    period: "Junio 2024 - Febrero 2026",
    description: [
      "Dirección técnica, revisión de código y mentoría de residentes profesionales.",
      "Plataforma Zucess: Integración de agentes IA usando DeepSeek para gestión de citas, procesos inteligentes y soporte en tiempo real.",
      "Plataforma The Pierre & Diamonds: administración y control de ventas inmobiliarias de alta gama",
      "Plataforma Feria Empresarial Canacintra: Sistema integral para patrocinios y control de accesos en eventos masivos",
      "Plataforma Las Brisas: Sistema de gestión de pedidos de hospitalidad y tiempos de entrega para el hotel",
      "Plataforma Greenddie: Módulo para la administración de membresías de los clientes."
    ]
  },
  {
    company: "Secretaría de Turismo (SECTUR)",
    role: "Desarrollador Full Stack / DevOps",
    period: "Marzo 2022 - Junio 2024",
    description: [
      "Despliegue en servidores VPS mediante Docker y gestión de dominios con NGINX.",
      "Administración RH: Creación de sistema para control de trámites administrativos y expedientes digitales de Recursos Humanos.",
      "Sistemas de Capacitación: Diseño y ejecución de plataforma para administración de cursos técnicos Otis 2023.",
      "Desarrollo Georeferenciado: Plataforma web para el control y geolocalización de hoteles inclusivos en Acapulco."
    ]
  }
];

export const FREELANCE_PROJECTS: Project[] = [
  {
    title: "Acapulco arena y mar",
    description: "Plaforma web para venta y renta de propiedades en Acapulco.",
    stack: ["Vue.js", "Laravel", "Docker"],
    link: "https://acapulcoarenamar.com"
  },
  {
    title: "Novedades juanita",
    description: "Plataforma web para la administracion de inventario y ventas.",
    stack: ["Vue.js", "Laravel", "Docker"],
    link: "https://novedadesjuanita.devsmex.com"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "Monitor",
    items: [
      { name: "Next.js", icon: "Code" },
      { name: "React.js", icon: "Atom" },
      { name: "Vue.js", icon: "Code" },
      { name: "Tailwind CSS", icon: "Palette" }
    ]
  },
  {
    category: "Backend",
    icon: "Server",
    items: [
      { name: "Laravel", icon: "Code" },
      { name: "Express.js", icon: "Code" }
    ]
  },
  {
    category: "Base de datos",
    icon: "Database",
    items: [
      { name: "PostgreSQL", icon: "Database" },
      { name: "MySQL", icon: "Database" },
      { name: "SQL Server", icon: "Database" },
      { name: "MongoDB", icon: "Database" },
      { name: "Firebase", icon: "Cloud" },
      { name: "Chroma DB (Vectorial)", icon: "Database" }
    ]
  },
  {
    category: "DevOps",
    icon: "Settings",
    items: [
      { name: "Docker", icon: "Container" },
      { name: "NGINX", icon: "Globe" },
      { name: "Linux", icon: "Terminal" },
      { name: "Git/Bitbucket", icon: "GitBranch" },
      { name: "FTP (FileZilla)", icon: "Upload" }
    ]
  },
  {
    category: "IA / Integraciones",
    icon: "Brain",
    items: [
      { name: "DeepSeek API", icon: "Search" },
      { name: "Gemini (Embeddings)", icon: "Sparkles" },
      { name: "ElevenLabs", icon: "Mic" },
      { name: "Meta API (Facebook, Messenger, WhatsApp)", icon: "MessageCircle" },
      { name: "WebSockets (Baileys)", icon: "MessageCircle" }
    ]
  }
];