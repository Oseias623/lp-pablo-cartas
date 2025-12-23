
import React from 'react';

interface FinalCtaProps {
    checkoutUrl: string;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ checkoutUrl }) => {
    return (
        <section className="py-16 md:py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
                        Estás a Un Clic de Finalmente Entender las Cartas de Pablo
                    </h2>
                    <p className="text-slate-300 text-base md:text-lg mb-6">
                        Piénsalo: Ya intentaste leer Romanos y desististe en el capítulo 3. Ya abriste Gálatas y te preguntaste por qué Pablo era tan complicado. ¿Cuántas veces te prometiste que "esta vez será diferente"? La verdad es que el problema nunca fuiste tú. El problema era el método.
                    </p>
                    <p className="text-slate-300 text-base md:text-lg mb-8">
                        Más de 2.300 cristianos ya tomaron esta decisión. Hoy estudian a Pablo con claridad y crecen espiritualmente como nunca antes. La pregunta es: ¿vas a seguir luchando solo o te vas a unir a ellos?
                    </p>
                    <div className="flex flex-col items-center w-full max-w-lg mx-auto">
                        <div className="z-10 w-full">
                            <a
                                href={checkoutUrl}
                                className="block w-full bg-amber-500 text-slate-900 font-bold py-4 px-4 rounded-xl shadow-xl text-lg hover:bg-amber-400 transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider relative overflow-hidden btn-shine"
                            >
                                SÍ, QUIERO TRANSFORMAR MI FORMA DE ESTUDIAR LA BIBLIA
                            </a>
                        </div>

                        <div className="w-full bg-red-900/30 border border-red-500/50 text-red-200 rounded-xl font-medium p-6 pt-8 -mt-4 relative z-0">
                            <p className="text-sm md:text-base leading-relaxed">
                                ⚠️ <strong>RECUERDA:</strong> Este precio promocional de US$ 6.90 (con todos los bonos incluidos) no durará para siempre. Cuando regreses a esta página, el valor puede haber aumentado.
                            </p>
                        </div>
                    </div>
                    <p className="text-sm text-slate-400 mt-6">
                        🔒 Pago 100% Seguro • ⚡ Acceso Inmediato • 🛡️ Garantía de 7 Días • 💰 Compra Segura
                    </p>
                </div>
            </div>
        </section>
    );
};
