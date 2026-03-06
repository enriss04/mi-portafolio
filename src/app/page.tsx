'use client';
import Image from 'next/image';
import { Stars } from '@/components/common/Stars';
import { Contact } from '@/components/common/Contact';
import { ProjectCard } from '@/components/common/ProjectCard';
import { ExperienceCard } from '@/components/common/ExperienceCard';
import { BookOpen, Monitor, Server, Database, Settings, Brain, Code, Atom, Eye, Palette, Zap, Cloud, Container, Globe, Terminal, GitBranch, Upload, Search, Sparkles, Mic, MessageCircle, Phone, Mail } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, FREELANCE_PROJECTS, SKILLS } from '@/data';

const iconMap: Record<string, any> = {
  Monitor,
  Server,
  Database,
  Settings,
  Brain,
  Code,
  Atom,
  Eye,
  Palette,
  Zap,
  Cloud,
  Container,
  Globe,
  Terminal,
  GitBranch,
  Upload,
  Search,
  Sparkles,
  Mic,
  MessageCircle,
};


export default function Home() {
  return (
    <main className="main-gradient-bg relative w-full overflow-x-hidden">

      <Stars />

      {/* 1. INICIO: Hero con Estrellas */}
      <section id="inicio" className="relative min-h-screen flex items-center">
        <div className="section-container w-full grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left z-10 order-2 md:order-1">
            <span className="inline-block px-4 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-widest">
              Ingeniero en Sistemas Computacionales
            </span>
            <h1 className="text-5xl lg:text-8xl font-black text-white leading-[1.1]">
              <span className="text-gradient">Enrique Sánchez Santiago</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 font-medium">
              Especialista en <span className="text-white">Backend & DevOps</span>, integrando Inteligencia Artificial en soluciones escalables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#portafolio" className="px-8 py-3 border border-white/20 text-white rounded-xl font-bold hover:bg-white/10 transition-all text-center">Ver Proyectos</a>
              <a href="#contacto" className="px-8 py-3 border border-white/20 text-white rounded-xl font-bold hover:bg-white/10 transition-all text-center">Hablemos</a>
            </div>
          </div>

          <div className="flex justify-center z-10 order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-orange-500 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image src="/enrique.png" alt={PERSONAL_INFO.name} fill className="object-cover scale-105" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ACERCA DE MÍ */}
      <section id="sobre-mi" className="py-32">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white">Acerca de mí</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Ingeniero en Sistemas Computacionales del Instituto Tecnológico de Acapulco.
                Con 4 años de experiencia en desarrollo Full Stack y arquitectura Backend.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass-card p-6 border-l-4 border-l-orange-500">
                  <h4 className="text-3xl font-black text-white">+4</h4>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Años Experiencia</p>
                </div>
                <div className="glass-card p-6 border-l-4 border-l-purple-500">
                  <h4 className="text-3xl font-black text-white">+10</h4>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Sistemas Desplegados</p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-start glass-card p-8">
              <div className="flex justify-center md:justify-start">
                <div className="p-6 rounded-2xl border border-blue-500/30 flex items-center justify-center min-h-[180px] md:min-h-[200px]" style={{
                  background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))'
                }}>
                  <BookOpen size={80} className="text-blue-400" strokeWidth={1.5} />
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold text-white">Especialidades</h3>
                <p className="text-slate-300 leading-relaxed text-base">
                  Conocimientos en integración de servicios de IA para la automatización de flujos comerciales, cultura DevOps, integracion con plataformas de terceros mediante Webhooks para automatizar flujos de trabajo, despliegue en entornos Linux mediante Docker y
                  optimización de sistemas en tiempo real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HABILIDADES */}
      <section id="habilidades" className="section-container py-32 space-y-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center md:text-left">Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((cat, i) => {
            const CategoryIcon = cat.icon ? iconMap[cat.icon] : null;
            return (
              <div key={i} className="glass-card p-8 hover:border-orange-500/40 transition-all group hover:scale-105 transform duration-300">
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                  {CategoryIcon && <CategoryIcon size={24} className="text-orange-400" />}
                  <h4 className="text-orange-400 font-bold text-lg uppercase tracking-widest">
                    {cat.category}
                  </h4>
                </div>
                <ul className="space-y-4">
                  {cat.items.map((skill, j) => {
                    const SkillIcon = skill.icon ? iconMap[skill.icon] : null;
                    return (
                      <li key={j} className="flex items-center gap-3 group-hover:text-white transition-colors text-slate-400">
                        {SkillIcon ? (
                          <SkillIcon size={18} className="text-purple-500 flex-shrink-0" />
                        ) : (
                          <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></span>
                        )}
                        <span className="text-sm font-medium">{skill.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. PORTAFOLIO */}
      <section id="portafolio" className="py-32">
        <div className="section-container space-y-10">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white">Portafolio</h2>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 glass-card font-bold hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>GitHub
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {FREELANCE_PROJECTS.map((p, i) => <ProjectCard key={i} {...p} />)}
          </div>

          <div className="space-y-8 pt-12">
            <h3 className="text-2xl font-bold text-shadow-white flex items-center gap-4">
              <span className="h-px bg-white/30 flex-1"></span>
              Trayectoria Corporativa
            </h3>

            <div className="grid gap-6">
              {EXPERIENCE.map((exp, i) => (
                <ExperienceCard key={i} {...exp} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACTO (Actualizado con datos de CV) */}
      <Contact />
    </main>
  );
}