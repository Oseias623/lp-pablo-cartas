import React, { useEffect, useRef, useState } from 'react';

const CheckIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

interface BenefitProps {
  title: string;
  description: string;
  index: number;
}

const BenefitCard: React.FC<BenefitProps> = ({ title, description, index }) => {
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
      className={`bg-slate-50 p-6 rounded-xl shadow-lg border border-slate-100 h-full transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:shadow-2xl hover:-translate-y-1 hover:border-emerald-200 group`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col items-start mb-3">
        <div className="bg-emerald-100 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
          <CheckIcon />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">{title}</h3>
      </div>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

export const About: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const benefits = [
    {
      title: "Paz Mental y Descanso",
      description: "Aprendes a leer a Pablo sin culpa ni presión. Entiendes la gracia de forma práctica y encuentras descanso real en medio de la ansiedad."
    },
    {
      title: "Relaciones Restauradas",
      description: "Aplicas principios de amor y respeto (no de ley) para sanar tu matrimonio y mejorar la comunicación con quienes te rodean."
    },
    {
      title: "Trabajo y Prosperidad",
      description: "Entiendes lo que Pablo enseñó sobre provisión y responsabilidad, liberándote de la culpa por prosperar o el miedo al futuro."
    },
    {
      title: "Fe Práctica y Real",
      description: "Dejas la teoría. Empiezas a aplicar la Biblia en decisiones reales, conversaciones difíciles y momentos de duda del lunes por la mañana."
    },
    {
      title: "Seguridad al Enseñar",
      description: "Lees con claridad y dejas de depender de otros. Ganas confianza para enseñar y compartir tu fe sin miedo a equivocarte teológicamente."
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const cardWidth = window.innerWidth >= 768 ? width / 3 : width * 0.85;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(benefits.length - 1, Math.max(0, index)));
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">La Transformación Real</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Así es como Pablo <br />
            <span className="text-amber-500">transforma tu realidad hoy</span>
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto pb-8 gap-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 max-w-6xl mx-auto md:justify-center"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="min-w-[85vw] md:min-w-0 snap-center h-full">
              <BenefitCard
                index={index}
                title={benefit.title}
                description={benefit.description}
              />
            </div>
          ))}
        </div>

        {/* Mobile Scroll Indicators */}
        <div className="flex justify-center gap-2 md:hidden mb-12">
          {benefits.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-amber-500' : 'w-2 bg-slate-300'}`}
            />
          ))}
        </div>

        {/* Closing Section - Simplified Button Only */}
        <div className="text-center">
          <a href="#pricing" className="inline-flex items-center justify-center bg-slate-900 text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all uppercase tracking-wider text-sm group">
            <span className="text-amber-400 mr-2">➜</span> QUIERO EMPEZAR MI CAMBIO
          </a>
        </div>

      </div>
    </section>
  );
};