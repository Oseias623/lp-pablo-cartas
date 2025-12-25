
import React from 'react';

interface FinalCtaProps {
    checkoutUrl: string;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ checkoutUrl }) => {
    return (
        <section className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
                        Estás a Un Clic de Finalmente Entender <br />
                        las Cartas de Pablo
                    </h2>
                    <div className="text-slate-300 text-base md:text-lg mb-8 space-y-4">
                        <p>Si ya estás cansado de leer a Pablo "a ciegas"...</p>
                        <p>Si quieres entender con claridad real...</p>
                        <p>Y aplicar su mensaje directo a tu vida...</p>
                        <p className="text-amber-400 font-bold text-xl mt-4">Este es tu momento.</p>
                    </div>

                    <div className="flex flex-col items-center w-full max-w-lg mx-auto">
                        <div className="z-10 w-full">
                            <a
                                href={checkoutUrl}
                                className="block w-full bg-amber-500 text-slate-900 font-bold py-4 px-4 rounded-xl shadow-xl text-lg hover:bg-amber-400 transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider relative overflow-hidden btn-shine"
                            >
                                QUIERO ENTENDER A PABLO DE UNA VEZ
                            </a>
                        </div>
                    </div>
                    <p className="text-sm text-slate-400 mt-6 font-medium">
                        🔒 Pago 100% seguro • ✅ Acceso inmediato por email • 🛡️ Garantía incondicional de 7 días
                    </p>
                </div>
            </div>
        </section>
    );
};
