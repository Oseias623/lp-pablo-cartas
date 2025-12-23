
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
        <section id="pricing" className="py-16 md:py-24 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">Elige Tu Camino y Comienza Tu Transformación Ahora</h2>
                    <p className="text-base md:text-lg text-slate-600">Entiende a Pablo con claridad, profundidad y recursos exclusivos.</p>
                </div>

                <div className="flex justify-center items-center">
                    {/* Oferta Única */}
                    <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg border-4 border-amber-400 relative transition-all duration-300 hover:-translate-y-2">
                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            <span className="bg-amber-400 text-slate-900 text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">⭐ OFERTA ESPECIAL</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-800">Las Cartas de Pablo</h3>
                        <p className="text-amber-500 mt-2 font-semibold text-center">La transformación completa para tu jornada.</p>

                        <div className="my-6 text-center">
                            <p className="text-red-600 font-black leading-none">
                                <span className="text-xl sm:text-2xl align-top">US$</span>
                                <span className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter">9.90</span>
                            </p>
                            <p className="text-xs font-bold text-red-600 tracking-wider mt-1">PAGO ÚNICO</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow text-left">
                            <li className="flex items-start">
                                <CheckIcon className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-slate-700">
                                    <strong className="text-slate-900 block">Estudios Completos de las Cartas Paulinas:</strong> La base sólida para entender la doctrina de la gracia, fe y vida cristiana.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckIcon className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-slate-700">
                                    <strong className="text-slate-900 block">Resúmenes de las Cartas en Podcast:</strong> Estudia a Pablo mientras conduces, entrenas o haces tareas.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckIcon className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-slate-700">
                                    <strong className="text-slate-900 block">Bosquejos de Predicaciones Listos:</strong> Inspiración rápida y confiable para ministrar la Palabra.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckIcon className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-slate-700">
                                    <strong className="text-slate-900 block">Mapas Mentales de los Evangelios:</strong> Visualiza las conexiones entre Mateo, Marcos, Lucas y Juan.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckIcon className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-slate-700">
                                    <strong className="text-slate-900 block">+ Bonos Exclusivos Incluidos:</strong> Biblioteca completa de estudios bíblicos.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckIcon className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-slate-700">
                                    <strong className="text-slate-900 block">Acceso de por Vida:</strong> Estudia a tu ritmo, para siempre. Sin mensualidades.
                                </span>
                            </li>
                        </ul>
                        <a
                            href={checkoutUrl}
                            className="w-full block text-center bg-gradient-to-br from-amber-500 to-amber-400 text-slate-900 font-bold py-3 px-4 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:shadow-xl hover:from-amber-400 hover:to-amber-500 transform hover:scale-105 transition-all duration-300 text-sm sm:text-lg uppercase tracking-wider relative overflow-hidden btn-shine"
                        >
                            QUIERO EL PAQUETE COMPLETO AHORA
                        </a>
                        <div className="bg-red-50 border border-red-200 text-red-700 text-center p-3 rounded-lg text-sm mt-6">
                            ⏰ <strong>ATENCIÓN:</strong> Este precio especial de US$ 9.90 es válido solo durante esta promoción de lanzamiento.
                        </div>
                        <p className="text-slate-400 text-xs font-semibold mt-3 text-center">
                            ✅ Acceso Inmediato • ✅ Garantía de 7 Días • ✅ Acceso de por Vida
                        </p>
                    </div>
                </div>

                <div className="mt-16 max-w-3xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-6 bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                    <div className="flex-shrink-0">
                        <GuaranteeSealIcon />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Garantía Incondicional de 7 Días: Tu Dinero de Vuelta Sin Preguntas</h3>
                        <p className="text-slate-600 mt-2">
                            Confiamos tanto en la transformación que este material traerá a tu vida espiritual que asumimos todo el riesgo por ti. Tienes 7 días completos para explorar todo el material. Si, por cualquier motivo, no sientes que valió cada centavo, solo envía un único correo electrónico. Devolvemos el 100% de tu dinero. Sin preguntas incómodas, sin burocracia, sin letras pequeñas. El riesgo es totalmente nuestro.
                        </p>
                        <p className="text-emerald-700 font-bold mt-3 text-lg">🛡️ RIESGO CERO PARA TI: O transformas tu comprensión de las Cartas de Pablo, o recibes tu dinero de vuelta. Así de simple.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};
