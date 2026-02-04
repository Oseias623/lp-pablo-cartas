import React from 'react';

export const Identification: React.FC = () => {
    return (
        <section id="como-funciona" className="py-12 md:py-24 bg-slate-900 text-white border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
                        ¿Sientes que lees a Pablo… <br />
                        <span className="text-amber-500">y solo escuchas exigencias?</span>
                    </h2>

                    <p className="text-base md:text-lg text-slate-300 mb-8 font-medium">
                        No estás solo. Y no es porque te falte fe.
                    </p>

                    <div className="bg-slate-800/50 p-5 md:p-6 rounded-2xl border border-slate-700 text-left md:text-center text-slate-300 text-base md:text-lg space-y-3">
                        {/* Mobile Compact List */}
                        <div className="space-y-3">
                            <p className="flex items-start gap-3 md:justify-center">
                                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">❌</span>
                                <span><strong className="text-white">Lees Romanos y sientes culpa</strong>, en lugar de libertad.</span>
                            </p>
                            <p className="flex items-start gap-3 md:justify-center">
                                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">❌</span>
                                <span><strong className="text-white">Gálatas habla de gracia</strong>, pero tú sigues cargando peso.</span>
                            </p>
                            <p className="flex items-start gap-3 md:justify-center">
                                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">❌</span>
                                <span><strong className="text-white">Efesios parece teoría</strong> imposible de aplicar a tu matrimonio.</span>
                            </p>
                            <p className="flex items-start gap-3 md:justify-center">
                                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">❌</span>
                                <span><strong className="text-white">Dependes de otros</strong> para que te expliquen qué dice la Biblia.</span>
                            </p>
                            <p className="flex items-start gap-3 md:justify-center">
                                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">❌</span>
                                <span><strong className="text-white">Nunca es suficiente</strong>: sientes que siempre le debes algo a Dios.</span>
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="inline-block bg-slate-800 border border-slate-600 rounded-lg px-6 py-3 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                            <p className="text-xl font-bold text-white">
                                ✋ No es tu culpa.
                            </p>
                        </div>
                        <p className="text-slate-400 mt-4 text-sm md:text-base">
                            Nadie te enseñó el contexto. <br className="hidden md:block" />
                            Y sin contexto, Pablo parece un juez, no un pastor.
                        </p>
                    </div>
                </div>

                {/* Transição / Virada */}
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12 text-slate-900">
                        <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
                            <h3 className="text-xl md:text-3xl font-extrabold text-white drop-shadow-sm leading-tight">
                                Cuando entiendes el contexto... <span className="bg-white/20 px-1 rounded text-white">todo cambia.</span>
                            </h3>
                            <p className="text-white/90 text-sm md:text-lg font-medium leading-relaxed">
                                Las cartas dejan de ser regaños y se vuelven conversaciones honestas sobre la vida real.
                            </p>
                        </div>

                        <div className="w-full md:w-auto bg-white/20 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/30 text-center shadow-lg">
                            <p className="text-white/90 font-medium text-xs md:text-sm mb-1">Descubre esto en:</p>
                            <p className="text-xl md:text-2xl font-black text-white">"Las Cartas de Pablo"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
