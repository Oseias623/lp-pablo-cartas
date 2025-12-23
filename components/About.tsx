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
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6">¿Sientes que Podrías Aprender Más, pero la Complejidad te Detiene?</h2>
          <p className="text-base md:text-lg text-slate-600">
            Abres Romanos, Gálatas o Efesios y sientes que estás leyendo otro idioma. Las palabras pasan por tus ojos, pero no llegan al corazón. La teología pesada y el lenguaje antiguo crean un muro entre tú y las verdades que Pablo quería transmitir.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitCard
            index={0}
            title="Practicidad Total"
            description="Termina cada estudio sabiendo exactamente cómo aplicar esa enseñanza el lunes por la mañana. Nada de teoría vacía. Actuarás diferente porque entenderás de verdad."
          />
          <BenefitCard
            index={1}
            title="Lenguaje Accesible"
            description="Como tener un profesor paciente a tu lado, explicando cada concepto difícil con palabras que usas a diario. Sin términos en griego, sin citas de teólogos desconocidos."
          />
          <BenefitCard
            index={2}
            title="Sin Pérdida de Tiempo"
            description="Estudios directos al grano. Entiendes lo esencial de cada carta sin necesitar horas de lectura complementaria. Tu tiempo es demasiado valioso para desperdiciarlo con rodeos."
          />
          <BenefitCard
            index={3}
            title="Mapas Mentales Increíbles"
            description="Visualiza la estructura completa de cada carta en una sola página. Conecta ideas y nunca más olvides lo que estudiaste. Tu mente funcionará como la de un estudioso experto."
          />
        </div>
      </div>
    </section>
  );
};