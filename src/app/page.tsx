import Image from 'next/image';
import { Stars } from '@/components/common/Stars';
import { ProjectCard } from '@/components/common/ProjectCard';
import { BookOpen } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, FREELANCE_PROJECTS, SKILLS } from '@/data';

export default function Home() {
  return (
    <main className="main-gradient-bg relative w-full overflow-x-hidden">

      <Stars />

      {/* 1. INICIO: Hero con Estrellas */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20">
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

      {/* 3. HABILIDADES (Recuperada) */}
      <section id="habilidades" className="section-container py-32 space-y-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center md:text-left">Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((cat, i) => (
            <div key={i} className="glass-card p-8 hover:border-orange-500/40 transition-all group">
              <h4 className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-6 border-b border-white/10 pb-2">
                {cat.category}
              </h4>
              <ul className="text-slate-400 space-y-3">
                {cat.items.map(skill => (
                  <li key={skill} className="flex items-center gap-2 group-hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PORTAFOLIO */}
      <section id="portafolio" className="py-32">
        <div className="section-container space-y-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white">Portafolio</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FREELANCE_PROJECTS.map((p, i) => <ProjectCard key={i} {...p} />)}
          </div>

          <div className="space-y-8 pt-12">
            <h3 className="text-2xl font-bold text-emerald-400 flex items-center gap-4">
              <span className="h-px bg-emerald-400/30 flex-1"></span>
              Trayectoria Corporativa
            </h3>
            <div className="grid gap-6">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="glass-card p-6 md:p-10 hover:bg-white/10 transition-colors">
                  <div className="flex flex-col md:flex-row justify-between mb-6 gap-2">
                    <h4 className="text-2xl font-bold text-white">{exp.role} <span className="text-orange-500">@ {exp.company}</span></h4>
                    <span className="text-slate-500 font-mono text-sm">{exp.period}</span>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {exp.description.map((desc, j) => (
                      <li key={j} className="text-slate-400 text-sm flex items-start gap-2 italic">
                        <span className="text-orange-500 mt-1">▹</span> {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACTO (Actualizado con datos de CV) */}
      <section id="contacto" className="py-40">
        <div className="section-container text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-black text-white">¿Hablamos?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8">
            <div className="glass-card p-8 space-y-2">
              <p className="text-orange-400 font-bold uppercase text-xs tracking-widest">Teléfono</p>
              <p className="text-white text-lg">744 354 1292</p>
            </div>
            <div className="glass-card p-8 space-y-2">
              <p className="text-orange-400 font-bold uppercase text-xs tracking-widest">Email</p>
              <p className="text-white text-lg break-all">{PERSONAL_INFO.email}</p>
            </div>
            <div className="glass-card p-8 space-y-2">
              <p className="text-orange-400 font-bold uppercase text-xs tracking-widest">Ubicación</p>
              <p className="text-white text-lg">Acapulco, Guerrero</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="btn-primary text-lg px-12">Enviar Correo Directo</a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" className="px-12 py-4 glass-card font-bold hover:bg-orange-500/20 transition-all">LinkedIn</a>
          </div>
        </div>
      </section>

    </main>
  );
}