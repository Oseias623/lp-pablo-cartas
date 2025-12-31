import React from 'react';

export const Identification: React.FC = () => {
    return (
        <section id="como-funciona" className="py-16 md:py-24 bg-slate-900 text-white border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight">
                        ¿Sientes que lees a Pablo… <br />
                        <span className="text-amber-500">pero solo escuchas exigencias?</span>
                    </h2>

                    <p className="text-lg text-slate-300 mb-8 font-medium">
                        No estás solo. Y no es porque te falte fe.
                    </p>

                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 space-y-4 text-left md:text-center text-slate-300 text-lg">
                        <p className="flex items-start gap-3 md:justify-center">
                            <span className="text-red-500 text-xl mt-1 md:mt-0">❌</span>
                            Lees Romanos desde el capítulo 1 y terminas sintiéndote culpable, no liberado.
                        </p>
                        <p className="flex items-start gap-3 md:justify-center">
                            <span className="text-red-500 text-xl mt-1 md:mt-0">❌</span>
                            Gálatas habla de libertad, pero tú sigues cargando peso espiritual.
                        </p>
                        <p className="flex items-start gap-3 md:justify-center">
                            <span className="text-red-500 text-xl mt-1 md:mt-0">❌</span>
                            Efesios suena profundo, pero no sabes cómo aplicarlo a tu matrimonio o a las decisiones de hoy.
                        </p>
                        <p className="flex items-start gap-3 md:justify-center">
                            <span className="text-red-500 text-xl mt-1 md:mt-0">❌</span>
                            Intentas entender, pero siempre dependes de que alguien más te lo explique.
                        </p>
                        <p className="flex items-start gap-3 md:justify-center">
                            <span className="text-red-500 text-xl mt-1 md:mt-0">❌</span>
                            Quieres crecer espiritualmente, pero cada vez que lees a Pablo sientes que nunca haces lo suficiente.
                        </p>
                    </div>

                    <div className="mt-8 space-y-4">
                        <p className="text-xl font-bold text-white">
                            No es tu culpa.
                        </p>
                        <p className="text-slate-400">
                            A nadie le enseñaron el contexto de forma simple. <br className="hidden md:block" />
                            Y sin contexto, Pablo parece duro y distante.
                        </p>
                    </div>
                </div>

                {/* Transição / Virada */}
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-slate-900">
                        <div className="flex-1 space-y-6">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-sm leading-tight">
                                Pero cuando entiendes quién era Pablo, a quién escribía y qué problema estaba resolviendo, <span className="text-slate-900 bg-white/20 px-2 rounded">todo cambia.</span>
                            </h3>
                            <p className="text-white/90 text-lg font-medium leading-relaxed">
                                Las cartas dejan de ser complicadas y se vuelven conversaciones claras entre alguien que entiende tu lucha y tú.
                            </p>
                        </div>

                        <div className="w-full md:w-auto mt-4 md:mt-0 bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30 text-center shadow-lg">
                            <p className="text-white/90 font-medium mb-2">Eso es exactamente lo que<br />vas a descubrir dentro de</p>
                            <p className="text-2xl font-black text-white">"Las Cartas de Pablo"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
