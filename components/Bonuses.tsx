import React, { useEffect, useRef, useState } from 'react';

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const bonusesData = [
    {
        id: 1,
        title: "PABLO Y LA ANSIEDAD",
        subtitle: "Cómo Pablo enfrentó el miedo, la presión y el cansancio interior",
        description: "Descubre cómo el apóstol Pablo habló abiertamente sobre ansiedad, temor y debilidad — y cómo la gracia de Dios actuó en medio, no después, de la fragilidad.",
        checkpoints: [
            "Textos clave explicados en contexto",
            "Ansiedad ≠ falta de fe",
            "Ejercicios prácticos y oraciones honestas"
        ],
        value: 37.00,
        image: "/ebook-anxiety.png"
    },
    {
        id: 2,
        title: "PABLO Y EL MATRIMONIO",
        subtitle: "Principios reales para amar, comunicar y convivir sin religiosidad dura",
        description: "Entiende cómo Pablo habló sobre amor, respeto, perdón y convivencia, aplicado a matrimonios y relaciones reales — sin culpa ni interpretaciones tóxicas.",
        checkpoints: [
            "1 Corintios 13 en contexto",
            "Efesios 5 explicado con equilibrio",
            "Guía práctica para conversaciones difíciles"
        ],
        value: 37.00,
        image: "/ebook-marriage.png"
    },
    {
        id: 3,
        title: "PABLO Y LA CULPA RELIGIOSA",
        subtitle: 'Cómo liberarte del "nunca es suficiente" espiritual',
        description: "Los textos de Pablo más usados para condenar, explicados con contexto para que finalmente entiendas gracia, fe y obras sin confusión ni peso emocional.",
        checkpoints: [
            "Romanos y Gálatas sin condenación",
            "Cómo leer a Pablo sin culpa",
            "Descanso espiritual basado en la gracia"
        ],
        value: 37.00,
        image: "/ebook-guilt.png"
    },
    {
        id: 4,
        title: "PABLO EN EL DÍA A DÍA",
        subtitle: "Cómo aplicar las cartas de Pablo a decisiones reales de la vida cotidiana",
        description: "Aprende a usar los principios de Pablo para decisiones prácticas sobre trabajo, dinero, relaciones, tiempo y prioridades — sin religiosidad vacía.",
        checkpoints: [
            "Guía de decisiones basada en Pablo",
            "Ejemplos cotidianos claros",
            "Fe aplicada a la vida real"
        ],
        value: 27.00,
        image: "/ebook-daily.png"
    }
];

interface BonusCardProps {
    title: string;
    subtitle: string;
    description: string;
    checkpoints: string[];
    image: string;
    index: number;
}

const BonusCard: React.FC<BonusCardProps> = ({ title, subtitle, description, checkpoints, image, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
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

    return (
        <div
            ref={cardRef}
            className={`bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:shadow-2xl hover:border-amber-300 group h-full`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="bg-slate-50 p-6 flex items-center justify-center relative overflow-hidden h-48 sm:h-56">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 opacity-50"></div>
                <img
                    src={image}
                    alt={title}
                    className="relative z-10 h-full object-contain shadow-lg transform group-hover:scale-105 transition-transform duration-500 will-change-transform"
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <h4 className="font-bold text-slate-900 text-lg uppercase tracking-wide leading-tight mb-2">{title}</h4>
                    <p className="text-slate-500 text-sm font-medium leading-normal">{subtitle}</p>
                </div>

                <p className="text-slate-600 mb-6 text-sm leading-relaxed border-t border-slate-100 pt-4">{description}</p>

                <ul className="space-y-3 mt-auto">
                    {checkpoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckIcon />
                            <span className="leading-snug">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


interface BonusesProps {
    checkoutUrl: string;
}

export const Bonuses: React.FC<BonusesProps> = ({ checkoutUrl }) => {

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden font-sans border-t border-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="bg-amber-100 text-amber-700 font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider mb-6 inline-block">
                        Oferta Limitada
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                        🎁 4 Regalos Exclusivos
                    </h2>



                    <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed mt-12">
                        Al unirte hoy, te llevas esta biblioteca completa diseñada para aplicar la fe a tus lunes, martes y miércoles... no solo a tus domingos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {bonusesData.map((bonus, index) => (
                        <BonusCard
                            key={bonus.id}
                            title={bonus.title}
                            subtitle={bonus.subtitle}
                            description={bonus.description}
                            checkpoints={bonus.checkpoints}
                            image={bonus.image}
                            index={index}
                        />
                    ))}
                </div>

                {/* Simplified Call to Action without Price Stack */}
                <div className="mt-16 text-center">
                    <a href="#pricing" className="inline-block bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-wider text-base animate-pulse">
                        QUIERO APROVECHAR ESTA OFERTA ➜
                    </a>
                    <p className="text-slate-500 text-sm mt-4 font-medium">
                        🎁 Llevas todo esto <span className="text-emerald-600 font-bold">GRATIS</span> con tu inscripción.
                    </p>
                </div>
            </div>
        </section>
    );
};
