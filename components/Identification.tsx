import React from 'react';

export const Identification: React.FC = () => {
    return (
        <section id="como-funciona" className="py-16 md:py-24 bg-slate-900 text-white border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight">
                        ¿Sientes que Podrías Aprender Más... <br />
                        <span className="text-amber-500">pero la Complejidad Siempre Te Detiene?</span>
                    </h2>

                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 space-y-4 text-left md:text-center text-slate-300 text-lg">
                        <p className="flex items-center gap-3 md:justify-center">
                            <span className="text-red-500 text-xl">❌</span>
                            Si Romanos te enreda desde el capítulo 1...
                        </p>
                        <p className="flex items-center gap-3 md:justify-center">
                            <span className="text-red-500 text-xl">❌</span>
                            Si Gálatas parece una discusión sin fin...
                        </p>
                        <p className="flex items-center gap-3 md:justify-center">
                            <span className="text-red-500 text-xl">❌</span>
                            Y Efesios suena "profundo" pero no lo puedes explicar...
                        </p>
                    </div>

                    <p className="mt-8 text-xl font-bold">
                        No es tu culpa.
                    </p>
                    <p className="text-slate-400 mt-2">
                        A nadie le enseñan el contexto de forma simple. <br />
                        Y sin contexto, Pablo parece imposible.
                    </p>
                </div>

                {/* Transição / Virada */}
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-slate-900">
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-white drop-shadow-sm">
                                Pero cuando entiendes:
                            </h3>
                            <ul className="space-y-3 font-semibold text-white/90 text-lg">
                                <li className="flex items-center gap-2">
                                    <span className="bg-white text-amber-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                                    QUIÉN era Pablo
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="bg-white text-amber-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                                    A QUIÉN escribía
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="bg-white text-amber-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                                    QUÉ PROBLEMA estaba resolviendo
                                </li>
                            </ul>
                        </div>

                        <div className="w-full md:w-auto mt-4 md:mt-0 bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30 text-center">
                            <p className="text-3xl font-black text-white mb-2">Todo cambia.</p>
                            <p className="text-white/90 font-medium">
                                Las cartas dejan de ser complicadas... <br />
                                y se vuelven conversaciones claras.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
