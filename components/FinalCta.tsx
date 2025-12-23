
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
                    <div className="inline-block">
                        <a
                            href={checkoutUrl}
                            className="bg-amber-500 text-slate-900 font-bold py-3 px-4 sm:py-4 sm:px-8 rounded-lg shadow-lg text-sm sm:text-lg hover:bg-amber-400 transform hover:scale-105 transition-all duration-300 uppercase tracking-wider whitespace-nowrap relative overflow-hidden btn-shine z-10"
                        >
                            SÍ, QUIERO TRANSFORMAR MI FORMA DE ESTUDIAR LA BIBLIA
                        </a>
                        <div className="bg-red-500/20 border border-red-500 text-red-300 rounded-lg font-semibold mt-6 md:-mt-5 pt-6 md:pt-10 pb-5 px-5 relative z-0">
                            <p>⚠️ <strong>RECUERDA:</strong> Este precio promocional de US$ 6.90 (con todos los bonos incluidos) no durará para siempre. Cuando regreses a esta página, el valor puede haber aumentado.</p>
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
