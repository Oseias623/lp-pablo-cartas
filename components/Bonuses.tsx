
import React, { useEffect, useRef, useState } from 'react';
import { premiumBonuses } from '../constants';

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
            className={`bg-slate-50 border border-slate-200 rounded-xl shadow-lg p-5 flex flex-col text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:shadow-2xl hover:-translate-y-2 hover:border-amber-400 h-full relative overflow-hidden group`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <h4 className="font-bold text-slate-900 text-lg mb-2 flex-grow group-hover:text-amber-600 transition-colors">{title}</h4>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">{description}</p>
            <div className="mt-auto">
                <span className="inline-block bg-white border border-emerald-200 text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                    Valor: US${value}
                </span>
            </div>
        </div>
    );
};


export const Bonuses: React.FC = () => {

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        BONOS EXCLUSIVOS: Valor Total de <span className="text-amber-500">US$138,00</span> — Tuyos Por <span className="text-amber-500">US$0,00</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-600">Solo para quien adquiera el plan hoy, te llevas gratuitamente esta biblioteca completa de materiales que acelerará tu crecimiento espiritual. Estos bonos no están a la venta por separado.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {premiumBonuses.map((bonus, index) => (
                        <BonusCard key={bonus.id} title={bonus.title} description={bonus.description} value={bonus.value} index={index} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="#pricing"
                        className="inline-block text-center bg-gradient-to-br from-amber-500 to-amber-400 text-slate-900 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl hover:from-amber-400 hover:to-amber-500 transform hover:scale-105 transition-all duration-300 text-lg uppercase tracking-wider whitespace-nowrap relative overflow-hidden btn-shine"
                    >
                        QUIERO GARANTIZAR MIS BONOS AHORA
                    </a>
                    <p className="text-slate-500 text-xs font-semibold mt-3">
                        Acceso Inmediato • Garantía de 7 Días • Bonos Limitados
                    </p>
                </div>
                <div className="mt-8 text-center max-w-3xl mx-auto">
                    <p className="bg-red-50 text-red-800 font-bold p-4 rounded-lg border border-red-100 shadow-sm">🔥 IMPORTANTE: Estos bonos son exclusivos de esta oferta y pueden ser eliminados en cualquier momento. Garantizamos la entrega solo para quien compre hoy.</p>
                </div>
            </div>
        </section>
    );
};
