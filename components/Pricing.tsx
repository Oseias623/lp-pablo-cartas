
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
        <section id="pricing" className="py-16 md:py-24 bg-slate-100 overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="flex justify-center items-center">
                    {/* Oferta Única */}
                    <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg border-4 border-amber-400 relative transition-all duration-300 hover:-translate-y-2">
                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            <span className="bg-amber-400 text-slate-900 text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">⭐ OFERTA ESPECIAL</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-800">Las Cartas de Pablo</h3>
                        <p className="text-slate-500 mt-2 font-medium text-center text-sm">Acceso Completo + Todos los Bonus</p>

                        <div className="my-6 text-center">
                            <p className="text-red-600 font-black leading-none">
                                <span className="text-xl sm:text-2xl align-top">US$</span>
                                <span className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter">9.90</span>
                            </p>
                            <p className="text-sm font-medium text-slate-500 mt-2">(El precio de un café... pero con resultado eterno)</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow text-left">
                            <li className="flex items-center">
                                <CheckIcon className="text-emerald-500 mr-3 flex-shrink-0" />
                                <span className="text-slate-700 font-medium">Acceso inmediato por email</span>
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="text-emerald-500 mr-3 flex-shrink-0" />
                                <span className="text-slate-700 font-medium">Garantía incondicional de 7 días</span>
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="text-emerald-500 mr-3 flex-shrink-0" />
                                <span className="text-slate-700 font-medium">Pago 100% seguro</span>
                            </li>
                        </ul>

                        <a
                            href={checkoutUrl}
                            className="w-full block text-center bg-gradient-to-br from-amber-500 to-amber-400 text-slate-900 font-bold py-3 px-4 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:shadow-xl hover:from-amber-400 hover:to-amber-500 transform hover:scale-105 transition-all duration-300 text-sm sm:text-lg uppercase tracking-wider relative overflow-hidden btn-shine"
                        >
                            SÍ, QUIERO ACCESO AHORA
                        </a>

                        <div className="text-center mt-4 flex items-center justify-center gap-2 animate-pulse">
                            <span className="text-red-600 text-sm font-bold">⏰ Oferta disponible por tiempo limitado</span>
                        </div>
                    </div>
                </div>

                <div className="mt-16 max-w-3xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-6 bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                    <div className="flex-shrink-0">
                        <GuaranteeSealIcon />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">🛡️ Garantía Incondicional de 7 Días <br />(Cero Preguntas. Cero Complicaciones.)</h3>
                        <p className="text-slate-600 mt-2 mb-2">
                            Prueba el material por 7 días completos. Si no te ayuda a entender a Pablo con más claridad, te devolvemos cada centavo.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-1">
                            <li>• Sin justificaciones.</li>
                            <li>• Sin formularios largos.</li>
                            <li>• Sin demoras.</li>
                        </ul>
                        <p className="text-emerald-700 font-bold mt-3 text-sm">Solo escribes y lo procesamos.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};
