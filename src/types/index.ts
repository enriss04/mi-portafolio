// src/types/index.ts

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  link: string;
  github?: string; // Opcional por si decides poner el repo público después
}

export interface SkillCategory {
  category: string;
  icon?: string;
  items: { name: string; icon?: string }[];
}

export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  linkedin: string;
  github: string;
  cellphone: string;
}