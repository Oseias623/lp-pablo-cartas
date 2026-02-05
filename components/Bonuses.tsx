import React, { useEffect, useRef, useState } from 'react';

const BookIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const HeartIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

const DoveIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.848.578-4.182m.069-4.819c.774-1.644 1.76-3.138 2.922-4.453l.261-.284" />
    </svg>
);

const CalendarIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

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
        icon: BookIcon
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
        icon: HeartIcon
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
        icon: DoveIcon
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
        icon: CalendarIcon
    }
];

interface BonusCardProps {
    title: string;
    subtitle: string;
    description: string;
    checkpoints: string[];
    icon: React.FC;
    index: number;
}

const BonusCard: React.FC<BonusCardProps> = ({ title, subtitle, description, checkpoints, icon: Icon, index }) => {
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
            className={`bg-white border border-slate-200 rounded-xl p-6 flex flex-col transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:shadow-xl hover:border-amber-300 relative overflow-hidden group h-full`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-amber-50 rounded-lg group-hover:bg-amber-100 transition-colors">
                    <Icon />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 text-lg uppercase tracking-wide">{title}</h4>
                    <p className="text-slate-500 text-sm font-medium">{subtitle}</p>
                </div>
            </div>

            <p className="text-slate-600 mb-6 text-sm leading-relaxed">{description}</p>

            <ul className="space-y-3 mb-2 flex-grow">
                {checkpoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckIcon />
                        <span className="leading-snug">{point}</span>
                    </li>
                ))}
            </ul>
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
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <span className="bg-amber-100 text-amber-700 font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider mb-6 inline-block">
                        Oferta Limitada
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        🎁 4 Regalos Exclusivos
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-600 font-medium mb-8">
                        Valor Real: <span className="line-through decoration-red-400 text-slate-400">US$138</span> <span className="text-slate-300 mx-2">|</span> <span className="font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-100">GRATIS HOY</span>
                    </p>

                    <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
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
                            icon={bonus.icon}
                            index={index}
                        />
                    ))}
                </div>

                {/* Summary Box */}
                <div className="mt-16 max-w-3xl mx-auto bg-slate-50 rounded-2xl border-2 border-dashed border-amber-300 p-8 md:p-10 text-center relative overflow-hidden shadow-sm">
                    {/* <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div> */}

                    <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">RESUMEN DE TU ACCESO</h3>

                    <div className="bg-white p-6 rounded-xl border border-slate-200 text-left shadow-sm mb-8 space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                            <span className="font-bold text-slate-700">1. Las Cartas de Pablo (Libro Digital)</span>
                            <span className="font-bold text-slate-900">US$19.00</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                            <span className="font-medium text-slate-600">2. Bono: Pablo y la Ansiedad</span>
                            <span className="text-emerald-600 font-bold">GRATIS</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                            <span className="font-medium text-slate-600">3. Bono: Pablo y el Matrimonio</span>
                            <span className="text-emerald-600 font-bold">GRATIS</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                            <span className="font-medium text-slate-600">4. Bono: Culpa Religiosa</span>
                            <span className="text-emerald-600 font-bold">GRATIS</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-slate-600">5. Bono: Fe en el Día a Día</span>
                            <span className="text-emerald-600 font-bold">GRATIS</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center bg-slate-800 p-6 rounded-xl text-white mb-8">
                        <div className="text-left mb-4 md:mb-0">
                            <p className="text-slate-400 text-sm uppercase tracking-wider font-bold">VALOR TOTAL</p>
                            <p className="text-3xl font-black text-white line-through decoration-red-500 decoration-4 opacity-70">US$157</p>
                        </div>
                        <div className="text-right">
                            <p className="text-amber-400 text-sm uppercase tracking-wider font-bold">HOY PAGAS SOLO</p>
                            <p className="text-4xl md:text-5xl font-black text-white">US$19</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <a href="#pricing" className="inline-block bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-wider text-base animate-pulse">
                            QUIERO APROVECHAR ESTA OFERTA ➜
                        </a>
                        <p className="text-slate-500 text-sm mt-4 font-medium">
                            <span className="text-emerald-600">✓</span> Pago Único y Seguro
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
