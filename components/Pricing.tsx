
import React from 'react';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const GuaranteeSealIcon: React.FC = () => (
    <svg className="h-24 w-24 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 11.5L11 13L14.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);


interface PricingProps {
    checkoutUrl: string;
}


export const Pricing: React.FC<PricingProps> = ({ checkoutUrl }) => {
    return (
        <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden font-sans">
            <div className="container mx-auto px-6">

                <div className="max-w-xl mx-auto">
                    {/* Single Consolidated Card */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border-2 border-amber-400 relative transition-transform duration-300 hover:-translate-y-1">

                        {/* Scarcity Banner */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg animate-pulse whitespace-nowrap z-10">
                            ⏳ Oferta Expira Pronto
                        </div>

                        <div className="text-center mt-6">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 leading-tight">
                                Todo lo que necesitas para <span className="text-amber-500">entender a Pablo</span>
                            </h2>
                            <p className="text-slate-500 font-medium mb-6">Acceso Total + 4 Bonus GRATIS</p>

                            <div className="flex justify-center items-center gap-2 mb-6">
                                <span className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter">9,90</span>
                            </div>
                        </div>

                        {/* Deliverables List (Inside Card) */}
                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-8 text-left">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">Tu acceso incluye:</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0"><CheckIcon className="text-emerald-600 w-4 h-4" /></div>
                                    <span className="font-bold text-slate-800 text-sm md:text-lg">Las 13 cartas de Pablo explicadas versículo por versículo</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-emerald-100 p-1 rounded-full mr-3 flex-shrink-0"><CheckIcon className="text-emerald-600 w-4 h-4" /></div>
                                    <span className="font-medium text-slate-700 text-sm md:text-lg">Resumen en audio de las 13 cartas</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-emerald-100 p-1 rounded-full mr-3 flex-shrink-0"><CheckIcon className="text-emerald-600 w-4 h-4" /></div>
                                    <span className="font-medium text-slate-700 text-sm md:text-lg">Acceso inmediato al aplicativo</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-emerald-100 p-1 rounded-full mr-3 flex-shrink-0"><CheckIcon className="text-emerald-600 w-4 h-4" /></div>
                                    <span className="font-medium text-slate-700 text-sm md:text-lg">Acceso Vitalicio (para siempre)</span>
                                </li>
                            </ul>
                        </div>

                        <a
                            href={checkoutUrl}
                            className="w-full block text-center bg-gradient-to-br from-amber-500 to-amber-400 text-slate-900 font-bold py-4 px-6 rounded-xl shadow-xl hover:shadow-2xl hover:from-amber-400 hover:to-amber-500 transform hover:scale-[1.02] transition-all duration-300 text-lg uppercase tracking-wider relative overflow-hidden group mb-6"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                DESCARGAR AHORA MISMO <span className="group-hover:translate-x-1 transition-transform">➜</span>
                            </span>
                        </a>

                        <div className="flex flex-col gap-4">
                            <div className="flex justify-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                <span className="text-xs font-bold border border-slate-300 rounded px-2 py-1">🔒 SSL Secure</span>
                                <span className="text-xs font-bold border border-slate-300 rounded px-2 py-1">🛡️ Privacidad</span>
                            </div>

                            <div className="flex items-center justify-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                                <p className="text-xs text-slate-500"><span className="font-bold text-slate-800">12 personas</span> compraron en la última hora.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Guarantee Section */}
                <div className="mt-16 max-w-3xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-6 bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative overflow-hidden group hover:border-emerald-200 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none transform group-hover:scale-110 transition-transform">
                        <GuaranteeSealIcon />
                    </div>
                    <div className="flex-shrink-0 relative z-10">
                        <GuaranteeSealIcon />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-slate-900">Garantía de "Hierro" de 7 Días</h3>
                        <p className="text-slate-600 mt-2 mb-3 text-sm leading-relaxed">
                            No queremos tu dinero si este material no transforma tu lectura. Tienes 7 días para leer, aplicar y decidir. Si no te encanta, te devolvemos el 100%. Sin letras pequeñas.
                        </p>
                        <p className="text-emerald-700 font-bold text-sm flex items-center justify-center md:justify-start gap-1">
                            <CheckIcon className="w-4 h-4" /> Tu riesgo es CERO.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
