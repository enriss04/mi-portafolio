interface ProjectProps {
    title: string;
    description: string;
    stack: string[];
    link: string;
}

const techColorMap: Record<string, { bg: string; text: string; border: string }> = {
    'Next.js': { bg: 'from-blue-500/20 to-blue-600/20', text: 'text-blue-300', border: 'border-blue-500/40' },
    'React': { bg: 'from-cyan-500/20 to-blue-500/20', text: 'text-cyan-300', border: 'border-cyan-500/40' },
    'Vue.js': { bg: 'from-emerald-500/20 to-teal-500/20', text: 'text-emerald-300', border: 'border-emerald-500/40' },
    'Laravel': { bg: 'from-red-500/20 to-orange-500/20', text: 'text-red-300', border: 'border-red-500/40' },
    'Docker': { bg: 'from-blue-500/20 to-indigo-500/20', text: 'text-blue-300', border: 'border-blue-500/40' },
    'PostgreSQL': { bg: 'from-blue-500/20 to-slate-500/20', text: 'text-blue-300', border: 'border-blue-500/40' },
    'Node.js': { bg: 'from-lime-500/20 to-green-500/20', text: 'text-lime-300', border: 'border-lime-500/40' },
    'DeepSeek': { bg: 'from-purple-500/20 to-pink-500/20', text: 'text-purple-300', border: 'border-purple-500/40' },
};

const getColorByTech = (tech: string) => {
    return techColorMap[tech] || { bg: 'from-slate-500/20 to-slate-600/20', text: 'text-slate-300', border: 'border-slate-500/40' };
};

export const ProjectCard = ({ title, description, stack, link }: ProjectProps) => (
    <div className="group relative">
        {/* Glow effect */}
        {/* <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div> */}
        
        {/* Card */}
        <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-700/50 p-8 rounded-2xl hover:border-orange-500/50 transition-all duration-300 h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-3 text-orange-400 transition-colors">{title}</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">{description}</p>
            
            {/* Tech Stack */}
            <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                    {stack.map(tech => {
                        const colors = getColorByTech(tech);
                        return (
                            <span
                                key={tech}
                                className={`px-3 py-1.5 rounded-lg border backdrop-blur-sm transition-all duration-300 text-xs font-semibold bg-gradient-to-r ${colors.bg} ${colors.text} ${colors.border} hover:scale-110 hover:shadow-lg`}
                            >
                                {tech}
                            </span>
                        );
                    })}
                </div>
            </div>
            
            {/* CTA Link */}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-orange-300 hover:text-orange-200 font-bold text-sm rounded-lg border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 w-fit group/link"
            >
                Visitar
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </a>
        </div>
    </div>
);