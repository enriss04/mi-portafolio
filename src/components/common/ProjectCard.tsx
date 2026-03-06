interface ProjectProps {
    title: string; description: string; stack: string[]; link: string;
}

export const ProjectCard = ({ title, description, stack, link }: ProjectProps) => (
    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-blue-500/50 transition-all group">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
            {stack.map(tech => (
                <span key={tech} className="text-[10px] px-2 py-1 bg-slate-800 text-blue-400 rounded-md font-mono">{tech}</span>
            ))}
        </div>
        <a href={link} target="_blank" className="text-sm text-blue-500 font-medium group-hover:underline">Visitar Proyecto →</a>
    </div>
);