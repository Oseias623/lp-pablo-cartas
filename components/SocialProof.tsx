import React, { useState, useRef, useEffect } from 'react';
import { testimonials } from '../constants';

const StarIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const AvatarIcon: React.FC = () => (
  <div className="h-12 w-12 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center border-2 border-slate-100">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  </div>
);

const VerifiedBadge: React.FC = () => (
  <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 ml-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
    Verificado
  </span>
);

interface TestimonialCardProps {
  name: string;
  role: string;
  location: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, location, quote }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
    </div>
    <p className="text-slate-700 mb-6 italic flex-grow text-base md:text-lg leading-relaxed">“{quote}”</p>
    <div className="flex items-center mt-auto pt-4 border-t border-slate-50">
      <AvatarIcon />
      <div className="ml-3">
        <div className="flex items-center">
          <p className="font-bold text-slate-900">{name}</p>
          <VerifiedBadge />
        </div>
        <p className="text-sm text-slate-500">{role} · {location}</p>
      </div>
    </div>
  </div>
);


interface SocialProofProps {
  checkoutUrl: string;
}

export const SocialProof: React.FC<SocialProofProps> = ({ checkoutUrl }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialsData = [
    {
      name: "Marta S.",
      role: "Líder de célula",
      location: "Colombia",
      quote: "Antes leía Romanos y me perdía en el capítulo 3. Ahora entiendo el argumento completo y lo uso para enseñar en mi célula cada semana."
    },
    {
      name: "Carlos M.",
      role: "Pastor asistente",
      location: "México",
      quote: "Siempre me quedaba en la superficie de Efesios. Ahora veo las cartas como lo que son: conversaciones urgentes. Cambió mi forma de leer toda la Biblia."
    },
    {
      name: "Ana L.",
      role: "Maestra bíblica",
      location: "Argentina",
      quote: "Pensaba que necesitaba un seminario para entender a Pablo. Solo necesitaba el contexto correcto. Ahora enseño con seguridad y sin miedo."
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / (width * 0.8)); // Approx card width
      setActiveIndex(Math.min(testimonialsData.length - 1, Math.max(0, index)));
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            Cristianos que dejaron de sentirse <br />
            <span className="text-amber-600">“perdidos” al leer a Pablo</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Ellos ya están descubriendo el tesoro oculto en las epístolas.
          </p>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto pb-8 gap-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:overflow-visible scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
        >
          {testimonialsData.map((t, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-0 snap-center h-full">
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>

        {/* Mobile Scroll Indicators */}
        <div className="flex justify-center gap-2 md:hidden mb-8">
          {testimonialsData.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-amber-500' : 'w-2 bg-slate-300'}`}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#pricing" className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider text-base animate-pulse">
            ➜ VER OFERTA ESPECIAL
          </a>
          <p className="mt-4 text-sm text-slate-500">
            Garantía de Satisfacción de 7 Días
          </p>
        </div>
      </div>
    </section>
  );
};