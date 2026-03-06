const Footer = () => {
  return (
    <footer className="relative overflow-hidden" style={{
      background: 'linear-gradient(to right, #020617, #0f172a, #1e293b)'
    }}>

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Información Personal */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gradient">Enrique Sánchez Santiago</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ingeniero en Sistemas, especialista en Backend & DevOps con enfoque en IA
            </p>
            <div className="flex flex-col space-y-2 pt-2">
              <a href="mailto:enriquesanchezsantiago01@gmail.com" className="text-orange-400 hover:text-orange-300 text-sm transition-colors flex items-center gap-2">
                <span>✉</span> Email
              </a>
              <a href="https://linkedin.com/in/enrique-sanchez-santiago" target="_blank" className="text-blue-400 hover:text-blue-300 text-sm transition-colors flex items-center gap-2">
                <span>💼</span> LinkedIn
              </a>
              <a href="https://github.com/tu-usuario" target="_blank" className="text-purple-400 hover:text-purple-300 text-sm transition-colors flex items-center gap-2">
                <span>⚡</span> GitHub
              </a>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Tech Stack</h4>
            <div className="grid grid-cols-2 gap-2 text-slate-400 text-xs">
              <span className="hover:text-blue-400 transition-colors">Next.js</span>
              <span className="hover:text-green-400 transition-colors">Node.js</span>
              <span className="hover:text-yellow-400 transition-colors">Laravel</span>
              <span className="hover:text-cyan-400 transition-colors">PostgreSQL</span>
              <span className="hover:text-red-400 transition-colors">Docker</span>
              <span className="hover:text-purple-400 transition-colors">AI APIs</span>
            </div>
          </div>
        </div>

        {/* Divisor y Copyright */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Enrique Sánchez Santiago. Todos los derechos reservados.</p>
            <p className="flex items-center gap-2">
              Construido con
              <span className="text-blue-400 font-semibold">Next.js</span>
              <span className="text-slate-600">+</span>
              <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;