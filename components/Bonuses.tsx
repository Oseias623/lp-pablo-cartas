
import React, { useEffect, useRef, useState } from 'react';

// Hardcoded bonuses directly in the component to match the specific copy requirements
const bonusesData = [
    {
        id: 1,
        title: "Mapa Didáctico de la Biblia",
        description: "Visualiza la línea de tiempo sagrada. Contexto histórico y estructura bíblica en una sola página.",
        value: 27.00
    },
    {
        id: 2,
        title: "Mapas Mentales de los Evangelios",
        description: "Conecta los 4 evangelios. Ve las armonías y conexiones entre Mateo, Marcos, Lucas y Juan claramente.",
        value: 37.00
    },
    {
        id: 3,
        title: "Los 12 Apóstoles de Jesús",
        description: "Conoce a los hombres que cambiaron el mundo. Historias de fe y sacrificio que inspirarán tu caminar.",
        value: 27.00
    },
    {
        id: 4,
        title: "Venciendo Batallas Espirituales",
        description: "Armas y estrategias bíblicas para la victoria. Guerra espiritual explicada de forma práctica y segura.",
        value: 47.00
    }
];

interface BonusCardProps {
    title: string;
    description: string;
    value: number;
    index: number;
}

const BonusCard: React.FC<BonusCardProps> = ({ title, description, value, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Animate only once
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    const delayClass = `delay-${index * 100}`; // Staggered animation

    return (
        <div
            ref={cardRef}
            className={`bg-white border border-slate-100 rounded-xl shadow-md p-6 flex flex-col text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:shadow-xl hover:-translate-y-1 h-full relative overflow-hidden group`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {/* Removed the colored header for simpler look in screenshot */}
            <h4 className="font-bold text-slate-900 text-xl mb-3 flex-grow">{title}</h4>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">{description}</p>
            <div className="mt-auto">
                <span className="inline-block bg-white border border-emerald-200 text-emerald-700 text-sm font-bold px-4 py-2 rounded-full shadow-sm">
                    Valor: US${Math.floor(value)}
                </span>
            </div>
        </div>
    );
};


interface BonusesProps {
    checkoutUrl: string;
}

export const Bonuses: React.FC<BonusesProps> = ({ checkoutUrl }) => {

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                        BONOS EXCLUSIVOS: Valor Total de <span className="text-amber-500">US$138,00</span> — Tuyos Por <span className="text-amber-500">US$0,00</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Solo para quien adquiera el plan hoy, te llevas gratuitamente esta biblioteca completa de materiales que acelerará tu crecimiento espiritual. Estos bonos no están a la venta por separado.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {bonusesData.map((bonus, index) => (
                        <BonusCard key={bonus.id} title={bonus.title} description={bonus.description} value={bonus.value} index={index} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href={checkoutUrl}
                        className="inline-block text-center bg-gradient-to-br from-amber-500 to-amber-400 text-slate-900 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:shadow-xl hover:from-amber-400 hover:to-amber-500 transform hover:scale-105 transition-all duration-300 text-sm sm:text-lg uppercase tracking-wider whitespace-normal md:whitespace-nowrap relative overflow-hidden btn-shine"
                    >
                        QUIERO COMENZAR MI ESTUDIO AHORA
                    </a>
                </div>
            </div>
        </section>
    );
};
