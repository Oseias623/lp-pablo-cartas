import React, { useEffect, useRef, useState } from 'react';

const BookIcon: React.FC = () => <span className="text-3xl">📘</span>;
const HeartIcon: React.FC = () => <span className="text-3xl">💑</span>;
const DoveIcon: React.FC = () => <span className="text-3xl">🕊️</span>;
const CalendarIcon: React.FC = () => <span className="text-3xl">🗓️</span>;

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
    value: number;
    icon: React.FC;
    index: number;
}

const BonusCard: React.FC<BonusCardProps> = ({ title, subtitle, description, checkpoints, value, icon: Icon, index }) => {
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

            <ul className="space-y-2 mb-6 flex-grow">
                {checkpoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-amber-500 font-bold mt-0.5">✔</span>
                        {point}
                    </li>
                ))}
            </ul>

            <div className="pt-4 border-t border-slate-100 mt-auto">
                <span className="text-slate-400 text-xs uppercase font-bold tracking-wider block mb-1">Valor Real</span>
                <span className="text-slate-800 font-bold text-lg">US${value}</span>
            </div>
        </div>
    );
};


interface BonusesProps {
    checkoutUrl: string;
}

export const Bonuses: React.FC<BonusesProps> = ({ checkoutUrl }) => {

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden font-sans">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-2">
                        🎁 BONOS EXCLUSIVOS
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-700 font-bold mb-6">
                        Valor Total de US$138 — <span className="text-amber-600">Tuyos Por US$0</span>
                    </p>

                    <div className="inline-block bg-slate-900 text-amber-400 text-sm md:text-base font-bold px-6 py-2 rounded-full uppercase tracking-widest mb-8 shadow-lg animate-pulse">
                        ⭐ SOLO CON PLAN PREMIUM ⭐
                    </div>

                    <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        Solo para quien adquiere el Plan Premium hoy, recibes gratuitamente esta biblioteca especial basada en las cartas de Pablo, creada para aliviar la carga espiritual y ayudarte a aplicar la fe a la vida real.
                    </p>
                    <p className="text-sm text-slate-500 mt-4 font-medium italic">
                        * Estos bonos no están disponibles por separado ni se venden en ningún otro lugar.
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
                            value={bonus.value}
                            icon={bonus.icon}
                            index={index}
                        />
                    ))}
                </div>

                {/* Summary Box */}
                <div className="mt-16 max-w-3xl mx-auto bg-slate-50 rounded-2xl border-2 border-slate-200 p-8 md:p-10 text-center relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>

                    <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">🎯 RESUMEN DE VALOR</h3>

                    <div className="space-y-2 mb-8">
                        <p className="text-lg text-slate-600">Valor total de los 4 bonos: <span className="line-through decoration-red-500 decoration-2">US$138</span></p>
                        <p className="text-2xl md:text-3xl font-bold text-slate-900">Hoy con Plan Premium: <span className="text-emerald-600">US$0</span></p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200 text-left md:text-center shadow-sm mb-8">
                        <p className="font-bold text-slate-800 mb-4 block">💡 Estos materiales están diseñados para resolver las áreas más difíciles de tu vida:</p>
                        <ul className="text-slate-600 space-y-2 inline-block text-left">
                            <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Ansiedad y cansancio emocional</li>
                            <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Matrimonio y relaciones</li>
                            <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Culpa espiritual crónica</li>
                            <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Decisiones de la vida diaria</li>
                        </ul>
                    </div>

                    <p className="text-slate-500 text-sm font-medium italic">
                        No son materiales genéricos. Son guías prácticas para problemas reales.
                    </p>
                </div>

                {/* Secondary CTA */}
                <div className="mt-12 text-center">
                    <a
                        href={checkoutUrl}
                        className="inline-block text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-lg uppercase tracking-wider whitespace-normal md:whitespace-nowrap w-full md:w-auto"
                    >
                        ➜ QUIERO EL PLAN PREMIUM CON LOS 4 BONOS <br />
                        <span className="text-xs md:text-sm font-medium opacity-90 normal-case">US$19.97 (o 3x $6.99)</span>
                    </a>
                    <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs md:text-sm text-slate-500 font-medium">
                        <span className="flex items-center gap-1">✅ Incluye las 13 Cartas + Áudios + Bonos</span>
                        <span className="flex items-center gap-1">✅ Acceso de por vida</span>
                        <span className="flex items-center gap-1">✅ Garantía de 7 días</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
