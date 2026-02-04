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
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6">Esto es donde Pablo empieza a ayudarte en la vida real</h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-center">
          <BenefitCard
            index={0}
            title="Ansiedad y Cansancio Interior"
            description="Aprendes a leer a Pablo sin culpa ni presión espiritual. Entiendes la gracia de forma práctica y encuentras descanso en medio de la ansiedad y el agotamiento emocional."
          />
          <BenefitCard
            index={1}
            title="Matrimonio y Relaciones"
            description="Descubres cómo aplicar los principios de Pablo para mejorar la comunicación, resolver conflictos y vivir relaciones más sanas sin religiosidad dura."
          />
          <BenefitCard
            index={2}
            title="Dinero, Trabajo y Decisiones"
            description="Comprendes lo que Pablo realmente enseñó sobre provisión, contentamiento y responsabilidad, sin culpa por prosperar ni miedo al futuro."
          />
          <BenefitCard
            index={3}
            title="Fe para el Día a Día"
            description="Dejas de leer la Biblia como teoría. Empiezas a aplicar lo que lees en decisiones reales, conversaciones difíciles y momentos de duda."
          />
          <BenefitCard
            index={4}
            title="Comunidad y Seguridad Espiritual"
            description="Lees con claridad y seguridad, sin depender de interpretaciones ajenas. Ganas confianza para enseñar, compartir y caminar con otros sin miedo a equivocarte."
          />
        </div>

        {/* Closing Section */}
        <div className="mt-16 text-center max-w-3xl mx-auto bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <p className="text-lg text-slate-700 font-medium mb-4">
            Todo esto con un enfoque simple, humano y sin juicio
          </p>
          <p className="text-slate-600 mb-6">
            Porque Pablo no escribió para cristianos perfectos,<br />
            sino para personas reales aprendiendo a vivir la fe en medio de la vida.
          </p>
          <div className="pt-4 border-t border-slate-200">
            <h3 className="text-2xl font-black text-slate-900 mb-2">Las Cartas de Pablo</h3>
            <p className="text-amber-600 font-bold text-lg">
              Enseñanzas prácticas para tu vida — hoy.
            </p>
            <div className="mt-8">
              <a href="#pricing" className="inline-block bg-slate-900 text-amber-500 font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:bg-slate-800 transition-all uppercase tracking-wider text-sm">
                VER OFERTA ESPECIAL ➜
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};