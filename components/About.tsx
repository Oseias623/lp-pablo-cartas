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
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6">Esto es lo que vas a lograr:</h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <BenefitCard
            index={0}
            title="Sin Bloqueos"
            description="Entiende versículos difíciles sin quedarte bloqueado. Avanza en tu lectura con fluidez."
          />
          <BenefitCard
            index={1}
            title="Propósito Claro"
            description="Lee cada carta sabiendo QUÉ PROBLEMA resolvía Pablo. El contexto ilumina el texto."
          />
          <BenefitCard
            index={2}
            title="Seguridad al Explicar"
            description="Explica el texto con seguridad (sin miedo a equivocarte). Ideal para líderes y maestros."
          />
          <BenefitCard
            index={3}
            title="Aplicación Inmediata"
            description="Aplica el mensaje a tu vida esa misma semana. Sabiduría práctica, no solo teórica."
          />
          <BenefitCard
            index={4}
            title="Independencia"
            description="Estudia sin depender de comentarios complicados. Desarrolla tu propio criterio bíblico."
          />
          <BenefitCard
            index={5}
            title="Visión Contextual"
            description="Dejas de leer 'a ciegas' y empiezas a leer con contexto. Todo cobra sentido."
          />
        </div>

        {/* Prova do Método */}
        <div className="mt-16 text-center max-w-2xl mx-auto bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <p className="text-lg text-slate-700 font-medium mb-4">
            Sí, está explicado versículo por versículo. <br />
            Pero con contexto histórico, cultural y aplicación práctica.
          </p>
          <p className="text-xl font-bold text-slate-900">
            No te damos más información. <br />
            <span className="text-amber-600">Te damos COMPRENSIÓN.</span>
          </p>
        </div>

      </div>
    </section>
  );
};