import React from 'react';

export const Differentiation: React.FC = () => {
    return (
        <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-amber-600 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-900 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold leading-tight mb-2 opacity-80">
                                    La mayoría de los estudios bíblicos te dan <br />
                                    <span className="text-slate-400 decoration-slate-500 line-through text-3xl">INFORMACIÓN.</span>
                                </h3>
                                <p className="text-slate-400 text-lg">
                                    Más datos. Más conceptos. <br /> Más cosas para memorizar.
                                </p>
                            </div>

                            <p className="text-slate-300 italic border-l-2 border-slate-600 pl-4">
                                "Pero cuando estás cansado, ansioso o cargando culpa… eso no es lo que necesitas."
                            </p>
                        </div>

                        <div className="relative">
                            {/* Connector line for mobile/desktop */}
                            <div className="hidden md:block absolute left-[-24px] top-1/2 w-6 h-[1px] bg-amber-500/50"></div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-3xl font-black text-amber-500 mb-2">
                                        Esto te da COMPRENSIÓN.
                                    </h3>
                                    <p className="text-white/90 text-lg font-medium leading-relaxed">
                                        Comprensión que encaja. <br />
                                        Comprensión que libera.
                                    </p>
                                </div>
                                <p className="text-white/80">
                                    Comprensión que te permite leer sin miedo y sin sentir que nunca es suficiente.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-12 text-center border-t border-white/10 pt-8 space-y-4">
                        <p className="text-2xl md:text-3xl font-serif italic text-white">
                            "Cuando todo encaja… <br className="md:hidden" /> <span className="text-amber-400 not-italic font-bold">ya no te confundes.</span>"
                        </p>
                        <div className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
                            <p>Lees con calma. Entiendes el propósito.</p>
                            <p className="mt-2 text-white font-medium">Y la fe deja de ser presión para convertirse en descanso.</p>
                        </div>
                    </div>

                    {/* Quick Visual Comparison */}
                    <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5">
                        <div className="text-center opacity-50 contrast-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                            <p className="text-xs font-bold uppercase tracking-widest mb-1">Información</p>
                            <p className="text-sm">Más datos que memorizar.</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-1">Comprensión</p>
                            <p className="text-sm font-bold text-white">Todo finalmente encaja.</p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <a href="#pricing" className="inline-block border-2 border-amber-500 text-amber-500 font-bold py-3 px-8 rounded-full hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 uppercase tracking-widest text-sm">
                            QUIERO ESTA COMPRENSIÓN
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
