
import React from 'react';
import { testimonials } from '../constants';

const StarIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const AvatarIcon: React.FC = () => (
  <div className="h-12 w-12 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  </div>
);


interface TestimonialCardProps {
  name: string;
  role: string;
  location: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, location, quote }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col h-full">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
    </div>
    <p className="text-slate-600 mb-6 italic flex-grow">“{quote}”</p>
    <div className="flex items-center mt-auto">
      <AvatarIcon />
      <div className="ml-4">
        <p className="font-bold text-slate-800">{name}</p>
        <p className="text-sm text-slate-500">{role} · {location}</p>
      </div>
    </div>
  </div>
);


interface SocialProofProps {
  checkoutUrl: string;
}

export const SocialProof: React.FC<SocialProofProps> = ({ checkoutUrl }) => {
  return (
    <section className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
            Cristianos que dejaron de sentirse <br />
            “perdidos” al leer a Pablo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="Marta S."
            role="Líder de célula"
            location="Colombia"
            quote="Antes leía Romanos y me perdía en el capítulo 3. Ahora entiendo el argumento completo y lo uso para enseñar en mi célula cada semana."
          />
          <TestimonialCard
            name="Carlos M."
            role="Pastor asistente"
            location="México"
            quote="Siempre me quedaba en la superficie de Efesios. Ahora veo las cartas como lo que son: conversaciones urgentes. Cambió mi forma de leer toda la Biblia."
          />
          <TestimonialCard
            name="Ana L."
            role="Maestra bíblica"
            location="Argentina"
            quote="Pensaba que necesitaba un seminario para entender a Pablo. Solo necesitaba el contexto correcto. Ahora enseño con seguridad y sin miedo."
          />
        </div>

        <div className="mt-12 text-center">
          <a href={checkoutUrl} className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider text-sm md:text-base animate-pulse">
            ➜ QUIERO ENTENDER A PABLO DE UNA VEZ
          </a>
        </div>
      </div>
    </section>
  );
};