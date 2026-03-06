import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#020617]/70 backdrop-blur-xl border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-gradient">
          ESS
        </Link>

        <div className="hidden md:flex gap-10 text-sm font-medium text-slate-300">
          <Link href="#inicio" className="hover:text-orange-400 transition-colors tracking-wide">Inicio</Link>
          <Link href="#sobre-mi" className="hover:text-orange-400 transition-colors tracking-wide">Acerca</Link>
          <Link href="#habilidades" className="hover:text-orange-400 transition-colors tracking-wide">Habilidades</Link>
          <Link href="#portafolio" className="hover:text-orange-400 transition-colors tracking-wide">Portafolio</Link>
          <Link href="#contacto" className="hover:text-orange-400 transition-colors tracking-wide">Contacto</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;