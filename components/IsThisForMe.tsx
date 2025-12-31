
import React from 'react';

const TargetIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const PuzzleIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
);

const ShieldCheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const LightningBoltIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

export const IsThisForMe: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
                        ¿Esto es para mí… <br />
                        <span className="text-amber-500">o es demasiado complicado?</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Card 1: Not for Experts */}
                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-amber-500/30 transition-all duration-300">
                        <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mb-6">
                            <TargetIcon />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">No es para expertos</h3>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            Este material no fue creado para expertos, ni para personas que ya "saben todo".
                        </p>
                        <p className="text-white font-medium italic border-l-2 border-amber-500 pl-4">
                            Es para cristianos comunes que aman a Dios, pero se sienten cansados, confundidos o con culpa al leer a Pablo.
                        </p>
                        <ul className="mt-6 space-y-2 text-slate-400 text-sm">
                            <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> No necesitas conocimiento previo.</li>
                            <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> No necesitas estudiar teología.</li>
                            <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> No necesitas horas libres.</li>
                        </ul>
                    </div>

                    {/* Card 2: Never Understood */}
                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-amber-500/30 transition-all duration-300">
                        <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mb-6">
                            <PuzzleIcon />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">¿Y si nunca he entendido a Pablo?</h3>
                        <p className="text-white font-bold mb-4">
                            Precisamente por eso existe este material.
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            Las cartas no fueron escritas para académicos ni líderes religiosos, sino para personas reales viviendo problemas reales.
                        </p>
                        <div className="mt-6 bg-slate-700/30 p-4 rounded-xl">
                            <p className="text-slate-200 text-sm">
                                <span className="block text-amber-500 font-bold mb-1">Aquí no vas a memorizar versículos.</span>
                                Vas a entender el mensaje y saber cómo aplicarlo a tu vida.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Risk Free */}
                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-amber-500/30 transition-all duration-300">
                        <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mb-6">
                            <ShieldCheckIcon />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Lee con tranquilidad. El riesgo es cero.</h3>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            Si después de acceder al contenido sientes que no era lo que esperabas, o que no te ayudó como pensabas, puedes solicitar tu reembolso dentro de los primeros 7 días.
                        </p>
                        <ul className="mt-4 flex flex-col gap-2">
                            <li className="inline-flex items-center text-slate-400 text-sm bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-700 self-start">
                                Sin preguntas.
                            </li>
                            <li className="inline-flex items-center text-slate-400 text-sm bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-700 self-start">
                                Sin juicios.
                            </li>
                            <li className="inline-flex items-center text-slate-400 text-sm bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-700 self-start">
                                Sin presión.
                            </li>
                        </ul>
                    </div>

                    {/* Card 4: Immediate Access */}
                    <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-8 rounded-2xl shadow-xl transform md:scale-105 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                            <LightningBoltIcon />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">El acceso es inmediato</h3>

                        <div className="space-y-4 text-white/90 font-medium">
                            <div className="flex items-center gap-3">
                                <span className="bg-white/20 p-1 rounded">📧</span>
                                Recibes todo por email.
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="bg-white/20 p-1 rounded">🚀</span>
                                Puedes empezar hoy mismo.
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="bg-white/20 p-1 rounded">📱</span>
                                Desde tu celular.
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="bg-white/20 p-1 rounded">⏳</span>
                                A tu ritmo.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
