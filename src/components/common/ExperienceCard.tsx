import { Experience } from '@/types';

export const ExperienceCard = ({ company, role, period, description }: Experience) => (
    <div className="group relative">
        {/* glow */}
        {/* <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div> */}

        <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-700/50 p-8 rounded-2xl hover:border-orange-500/50 transition-all duration-300 h-full flex flex-col">
            <div className="flex flex-col md:flex-row justify-between mb-6 gap-2">
                <h4 className="text-2xl font-bold text-white">
                    {role} <span className="text-orange-500">@ {company}</span>
                </h4>
                <span className="text-slate-500 font-mono text-sm">{period}</span>
            </div>

            <ul className="grid md:grid-cols-2 gap-4">
                {description.map((desc, j) => (
                    <li key={j} className="text-slate-400 text-sm flex items-start gap-2 italic">
                        <span className="text-orange-500 mt-1">▹</span> {desc}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);
