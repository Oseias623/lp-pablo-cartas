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
                    <div className="grid md:grid-cols-2 gap-8 items-center">

                        <div className="text-center md:text-left space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                                La mayoría de estudios bíblicos te dan <span className="text-slate-400 decoration-slate-500 line-through">INFORMACIÓN</span>.
                                <br />
                                <span className="text-amber-400 block mt-2 text-3xl md:text-4xl">Esto te da COMPRENSIÓN.</span>
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex items-center gap-4 opacity-60">
                                <span className="text-2xl">📚</span>
                                <div>
                                    <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">Información</p>
                                    <p className="text-slate-300">Más datos que memorizar.</p>
                                </div>
                            </div>

                            <div className="bg-amber-900/30 p-4 rounded-xl border border-amber-500/50 flex items-center gap-4 shadow-lg transform scale-105 transition-transform">
                                <span className="text-2xl">💡</span>
                                <div>
                                    <p className="text-amber-400 text-sm font-bold uppercase tracking-wider">Comprensión</p>
                                    <p className="text-white font-medium">Todo finalmente encaja.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-8 text-center border-t border-white/10 pt-8">
                        <p className="text-xl md:text-2xl font-serif italic text-slate-200">
                            "Y cuando encaja... <span className="text-amber-400 not-italic font-bold">ya no te confundes.</span>"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
