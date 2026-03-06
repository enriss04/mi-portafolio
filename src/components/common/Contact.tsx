'use client';
import { useState } from 'react';
import { Phone, Mail, Check } from 'lucide-react';
import { PERSONAL_INFO } from '@/data';

export const Contact = () => {
    const [copiedText, setCopiedText] = useState<string | null>(null);

    const copyToClipboard = async (text: string, type: 'tel' | 'email') => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(type);
            // El "Toast" desaparece tras 2 segundos
            setTimeout(() => setCopiedText(null), 2000);
        } catch (err) {
            console.error('Error al copiar', err);
        }
    };

    return (
        <section id="contacto" className="py-32 relative">
            <div className="section-container text-center space-y-12">
                <h2 className="text-5xl md:text-7xl font-black text-white">¿Hablamos?</h2>

                <div className="flex flex-wrap justify-center gap-6 pt-8">
                    {/* Botón Teléfono */}
                    <div className="relative group">
                        <button
                            onClick={() => copyToClipboard(PERSONAL_INFO.cellphone, 'tel')}
                            className="cursor-pointer px-8 py-4 glass-card font-bold hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 flex items-center gap-3 text-white"
                        >
                            {copiedText === 'tel' ? <Check size={20} className="text-green-400" /> : <Phone size={20} />}
                            Teléfono
                        </button>
                        {/* Tooltip Manual */}
                        {copiedText === 'tel' && (
                            <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs py-1 px-3 rounded-lg animate-bounce">
                                ¡Copiado!
                            </span>
                        )}
                    </div>

                    {/* Botón Email */}
                    <div className="relative group">
                        <button
                            onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                            className="cursor-pointer px-8 py-4 glass-card font-bold hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 flex items-center gap-3 text-white"
                        >
                            {copiedText === 'email' ? <Check size={20} className="text-green-400" /> : <Mail size={20} />}
                            Email
                        </button>
                        {copiedText === 'email' && (
                            <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs py-1 px-3 rounded-lg animate-bounce">
                                ¡Copiado!
                            </span>
                        )}
                    </div>


                    <a
                        href={PERSONAL_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 glass-card font-bold hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 flex items-center gap-3"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};